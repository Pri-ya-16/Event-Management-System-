from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.guest import Guest
from app.schemas.guest import GuestCreate

router = APIRouter(
    prefix="/guests",
    tags=["Guests"]
)

@router.post("/")
def create_guest(
    guest: GuestCreate,
    db: Session = Depends(get_db)
):

    new_guest = Guest(
        guest_name=guest.guest_name,
        designation=guest.designation,
        organization=guest.organization,
        phone=guest.phone,
        email=guest.email,
        event_id=guest.event_id
    )

    db.add(new_guest)
    db.commit()
    db.refresh(new_guest)

    return {
        "message": "Guest Added Successfully",
        "guest_id": new_guest.id
    }


@router.get("/")
def get_guests(
    db: Session = Depends(get_db)
):
    guests = db.query(Guest).all()
    return guests
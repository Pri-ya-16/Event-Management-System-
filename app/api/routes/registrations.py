from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.registration import Registration

from app.schemas.registration import RegistrationCreate

from app.api.routes.auth import router as auth_router

router = APIRouter(
    prefix="/registrations",
    tags=["Registrations"]
)


@router.post("/")
def register_for_event(
    registration: RegistrationCreate,
    db: Session = Depends(get_db)
):

    new_registration = Registration(
        student_id=registration.student_id,
        event_id=registration.event_id
    )

    db.add(new_registration)

    db.commit()

    db.refresh(new_registration)

    return {
        "message": "Event Registration Successful",
        "registration_id": new_registration.id
    }


@router.get("/")
def get_registrations(
    db: Session = Depends(get_db)
):

    registrations = db.query(Registration).all()

    return registrations

@router.get("/event/{event_id}/department-count")
def department_count(
    event_id: int,
    db: Session = Depends(get_db)
):

    result = (
        db.query(
            Student.department,
            func.count(Student.id)
        )
        .join(
            Registration,
            Registration.student_id == Student.id
        )
        .filter(
            Registration.event_id == event_id
        )
        .group_by(
            Student.department
        )
        .all()
    )

    return result
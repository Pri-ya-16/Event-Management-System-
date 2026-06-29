from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.event import Event

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/department-events")
def get_department_events(
    department: str,
    db: Session = Depends(get_db)
):

    events = (
        db.query(Event)
        .filter(
            Event.department == department
        )
        .all()
    )

    return events
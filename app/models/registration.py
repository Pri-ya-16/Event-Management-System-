from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.database.database import Base

class Registration(Base):
    __tablename__ = "registrations"

    id = Column(Integer, primary_key=True, index=True)

    student_id = Column(
        Integer,
        ForeignKey("students.id")
    )

    event_id = Column(
        Integer,
        ForeignKey("events.id")
    )

    registration_date = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )
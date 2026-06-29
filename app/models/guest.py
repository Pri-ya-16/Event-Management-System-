# app/models/guest.py

from sqlalchemy import Column, Integer, String
from app.database.database import Base

class Guest(Base):
    __tablename__ = "guests"

    id = Column(Integer, primary_key=True, index=True)

    guest_name = Column(String)
    designation = Column(String)
    organization = Column(String)

    phone = Column(String)
    email = Column(String)

    event_id = Column(Integer)
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Date
from sqlalchemy import Time

from app.database.database import Base

class Event(Base):

    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200))

    venue = Column(String(200))

    event_date = Column(Date)

    event_time = Column(Time)

    department = Column(String(100))

    invitation = Column(String(500))

    description = Column(String(1000))

    guest_name = Column(String(200))
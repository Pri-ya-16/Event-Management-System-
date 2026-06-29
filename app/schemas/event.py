from pydantic import BaseModel
from datetime import date
from datetime import time

class EventCreate(BaseModel):

    title: str

    venue: str

    event_date: date

    event_time: time

    department: str

    invitation: str

    description: str

    guest_name: str
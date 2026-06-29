from pydantic import BaseModel

class RegistrationCreate(BaseModel):

    student_id: int

    event_id: int
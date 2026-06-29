from pydantic import BaseModel, EmailStr

class GuestCreate(BaseModel):
    guest_name: str
    designation: str
    organization: str
    phone: str
    email: EmailStr
    event_id: int
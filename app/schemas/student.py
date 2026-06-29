from pydantic import BaseModel, EmailStr

class StudentCreate(BaseModel):
    name: str
    roll_no: str
    email: EmailStr
    password: str
    department: str


class StudentLogin(BaseModel):
    email: EmailStr
    password: str
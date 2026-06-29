from sqlalchemy import Column, Integer, String
from app.database.database import Base

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    roll_no = Column(String(50), unique=True)
    email = Column(String(100))
    department = Column(String(100))
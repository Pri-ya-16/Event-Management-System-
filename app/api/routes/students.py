from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.student import Student
from app.schemas.student import StudentCreate, StudentLogin
#from app.core.auth import create_access_token


router = APIRouter(
prefix="/students",
tags=["Students"]
)

@router.post("/register")
def register_student(
student: StudentCreate,
db: Session = Depends(get_db)
):
    new_student = Student(
name=student.name,
roll_no=student.roll_no,
email=student.email,
password=student.password,
department=student.department
)
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return {
        "message": "Student Registered Successfully",
        "student_id": new_student.id
        }
@router.post("/login")
def login_student(
    student: StudentLogin,
    db: Session = Depends(get_db)
):

    db_student = db.query(Student).filter(
        Student.email == student.email
    ).first()

    if not db_student:
        return {
            "message": "Email not found"
        }

    if db_student.password != student.password:
        return {
            "message": "Invalid Password"
        }

    token = create_access_token(
        {
            "student_id": db_student.id,
            "email": db_student.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "student_id": db_student.id,
        "name": db_student.name
    }
@router.get("/")
def get_students(
    db: Session = Depends(get_db)
):
    students = db.query(Student).all()
    return students
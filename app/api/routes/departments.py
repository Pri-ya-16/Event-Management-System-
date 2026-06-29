from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.department import Department
from app.schemas.department import DepartmentCreate

router = APIRouter(
    prefix="/departments",
    tags=["Departments"]
)


@router.post("/")
def create_department(
    department: DepartmentCreate,
    db: Session = Depends(get_db)
):
    new_department = Department(
        department_name=department.department_name,
        department_code=department.department_code,
        hod_name=department.hod_name
    )

    db.add(new_department)
    db.commit()
    db.refresh(new_department)

    return {
        "message": "Department Created Successfully",
        "department_id": new_department.id
    }


@router.get("/")
def get_departments(
    db: Session = Depends(get_db)
):
    departments = db.query(Department).all()
    return departments
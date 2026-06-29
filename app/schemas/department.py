from pydantic import BaseModel

class DepartmentCreate(BaseModel):
    department_name: str
    department_code: str
    hod_name: str
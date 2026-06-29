from app.database.database import engine
from app.database.database import Base

from app.models import student
from app.models import department
from app.models import event
from app.models import guest


Base.metadata.create_all(bind=engine)

print("Tables Created Successfully")

from app.database.database import engine
from app.models.student import Student
from app.models.department import Department
from app.database.database import Base
from app.models.guest import Guest

Base.metadata.create_all(bind=engine)

print("Tables Created Successfully")

from app.database.database import engine, Base
from app.models.student import Student
from app.models.department import Department

Base.metadata.create_all(bind=engine)

print("Tables Created Successfully")

from app.models.student import Student
from app.models.department import Department
from app.models.event import Event
from app.models.guest import Guest
print("Tables Created Successfully")


from app.database.database import engine
from app.database.database import Base

from app.models.student import Student
from app.models.department import Department
from app.models.guest import Guest
from app.models.event import Event
from app.models.registration import Registration

Base.metadata.create_all(bind=engine)

print("Tables Created Successfully")

from app.models.student import Student
from app.models.department import Department
from app.models.guest import Guest
from app.models.event import Event
from app.models.registration import Registration
print("Tables Created Successfully")
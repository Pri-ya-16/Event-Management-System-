import { Link } from "react-router-dom";

function StudentSidebar() {
  return (
    <div className="w-64 min-h-screen bg-indigo-900 text-white">

      <div className="p-6 border-b">
        <h1 className="text-3xl font-bold">
          Student Portal
        </h1>
      </div>

      <ul className="mt-8 space-y-3">

        <li>
          <Link to="/student">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/student/events">
            Upcoming Events
          </Link>
        </li>

        <li>
          <Link to="/student/myevents">
            My Events
          </Link>
        </li>

        <li>
          <Link to="/student/notifications">
            Notifications
          </Link>
        </li>

        <li>
          <Link to="/student/certificates">
            Certificates
          </Link>
        </li>

        <li>
          <Link to="/student/profile">
            Profile
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default StudentSidebar;
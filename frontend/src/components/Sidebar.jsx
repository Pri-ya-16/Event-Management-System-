
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-6">

      <h1 className="text-4xl font-bold mb-10">
        Event Manager
      </h1>

      <ul className="space-y-5">

        {/* Dashboard Only */}
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            📊 Dashboard
          </Link>
        </li>

        <hr className="border-blue-700 my-4" />

        {/* Departments */}

        <li>
          <Link to="/department/tamil">
            📖 Tamil
          </Link>
        </li>

        <li>
          <Link to="/department/english">
            📚 English
          </Link>
        </li>

        <li>
          <Link to="/department/mathematics">
            🧮 Mathematics
          </Link>
        </li>

        <li>
          <Link to="/department/management">
            💼 Management
          </Link>
        </li>

        <li>
          <Link to="/department/computer-science">
            💻 Computer Science
          </Link>
        </li>

        <li>
          <Link to="/department/physics">
            ⚛️ Physics
          </Link>
        </li>

        <li>
          <Link to="/department/commerce">
            📈 Commerce
          </Link>
        </li>

        <li>
          <Link to="/department/placements">
            🎓 Placements
          </Link>
        </li>

        <li>
          <Link to="/department/common-events">
            🏛️ Common Events
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;


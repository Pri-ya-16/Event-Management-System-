import { useEffect, useState } from "react";
import axios from "axios";

function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/registrations/")
      .then((res) => setRegistrations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Registrations
      </h1>

      <table className="w-full bg-white shadow">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Student ID</th>
            <th className="p-3">Event ID</th>
            <th className="p-3">Registration Date</th>
          </tr>
        </thead>

        <tbody>
          {registrations.map((reg) => (
            <tr key={reg.id}>
              <td className="p-3">{reg.id}</td>
              <td className="p-3">{reg.student_id}</td>
              <td className="p-3">{reg.event_id}</td>
              <td className="p-3">{reg.registration_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Registrations;
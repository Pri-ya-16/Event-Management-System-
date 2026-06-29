import { useEffect, useState } from "react";
import axios from "axios";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/students/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Students
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-blue-900 text-white">

          <tr>
            <th className="p-3">ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Department</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b"
            >
              <td className="p-3">{student.id}</td>
              <td>{student.name}</td>
              <td>{student.roll_no}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default Students;
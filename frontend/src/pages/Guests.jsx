import { useEffect, useState } from "react";
import axios from "axios";

function Guests() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/guests/")
      .then((res) => {
        setGuests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Guests
      </h1>

      <table className="w-full bg-white shadow">
        <thead>
          <tr>
            <th>ID</th>
            <th>Guest Name</th>
            <th>Designation</th>
            <th>Organization</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id}>
              <td>{guest.id}</td>
              <td>{guest.guest_name}</td>
              <td>{guest.designation}</td>
              <td>{guest.organization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Guests;
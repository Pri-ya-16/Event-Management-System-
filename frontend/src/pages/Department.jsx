
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Department() {
  const { name } = useParams();

  // Events
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [venue, setVenue] = useState("");
  const [customVenue, setCustomVenue] = useState("");

  // Guests
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const allEvents =
      JSON.parse(localStorage.getItem("allEvents")) || [];

    const departmentEvents = allEvents.filter(
      (event) => event.department === name
    );

    setEvents(departmentEvents);

    const allGuests =
      JSON.parse(localStorage.getItem(`guests_${name}`)) || [];

    setGuests(allGuests);
  }, [name]);

  const addEvent = () => {
    if (!eventName || !eventDate || !venue) {
      alert("Fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title: eventName,
      date: eventDate,
      venue,
      department: name,
      status: "Active",
    };

    const updatedEvents = [...events, newEvent];

    setEvents(updatedEvents);

    localStorage.setItem(
      "allEvents",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("allEvents")) || []),
        newEvent,
      ])
    );

    setEventName("");
    setEventDate("");
    setVenue("");

    alert("Event Added Successfully");
  };

  const addGuest = () => {
    if (
      !guestName ||
      !designation ||
      !organization ||
      !email ||
      !phone
    ) {
      alert("Fill all guest details");
      return;
    }

    const newGuest = {
      id: Date.now(),
      guestName,
      designation,
      organization,
      address,
      email,
      phone,
    };

    const updatedGuests = [...guests, newGuest];

    setGuests(updatedGuests);

    localStorage.setItem(
      `guests_${name}`,
      JSON.stringify(updatedGuests)
    );

    setGuestName("");
    setDesignation("");
    setOrganization("");
    setAddress("");
    setEmail("");
    setPhone("");

    alert("Guest Added Successfully");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h1 className="text-4xl font-bold capitalize">
          {name.replace("-", " ")} Department
        </h1>

        <p className="text-gray-500 mt-2">
          Department Event Management Dashboard
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-6">

        <div className="bg-white p-5 rounded-2xl shadow">
          <h3>Total Events</h3>
          <h1 className="text-3xl font-bold text-blue-600">
            {events.length}
          </h1>
        </div>

      
      </div>

      {/* Add Event */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-2xl font-bold mb-4">
          Add New Event
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="border p-3 rounded-lg"
          />

         
<div>

  <select
    value={venue}
    onChange={(e) => setVenue(e.target.value)}
    className="border p-3 rounded-lg w-full"
  >

    <option value="">
      Select Venue
    </option>

    <option value="UG Conference Hall">
      UG Conference Hall
    </option>

    <option value="PG Conference Hall">
      PG Conference Hall
    </option>

    <option value="MBA Seminar Hall">
      MBA Seminar Hall
    </option> 

    <option value="Others">
      Others
    </option>

  </select>

  {venue === "Others" && (
    <input
      type="text"
      placeholder="Enter Venue Name"
      value={customVenue}
      onChange={(e) =>
        setCustomVenue(e.target.value)
      }
      className="border p-3 rounded-lg w-full mt-3"
    />
  )}

</div>



        </div>

        <button
          onClick={addEvent}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Add Event
        </button>

      </div>

      {/* Add Guest */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-2xl font-bold mb-4">
          Add Guest Details
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Guest Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Official Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded-lg"
          />

        </div>

        <button
          onClick={addGuest}
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Add Guest
        </button>

      </div>
    
  
{/* Event List */}
<div className="bg-white rounded-2xl shadow p-6 mb-6">

  <h2 className="text-2xl font-bold mb-4">
    Event List
  </h2>

  <table className="w-full">

    <thead>
      <tr className="border-b">

        <th className="text-left py-3">
          Event Name
        </th>

        <th className="text-left py-3">
          Date
        </th>

        <th className="text-left py-3">
          Venue
        </th>

      

      </tr>
    </thead>

    <tbody>

      {events.length === 0 ? (
        <tr>
          <td
            colSpan="4"
            className="text-center py-4 text-gray-500"
          >
            No Events Added
          </td>
        </tr>
      ) : (
        events.map((event) => (
          <tr
            key={event.id}
            className="border-b hover:bg-gray-50"
          >

            <td className="py-3">
              {event.title}
            </td>

            <td className="py-3">
              {event.date}
            </td>

            <td className="py-3">
              {event.venue}
            </td>

          

          </tr>
        ))
      )}

    </tbody>

  </table>

</div>



      {/* Guest List */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-2xl font-bold mb-4">
          Guest List
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>Name</th>
              <th>Designation</th>
              <th>Organization</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>

            {guests.map((guest) => (
              <tr key={guest.id} className="border-b">

                <td>{guest.guestName}</td>
                <td>{guest.designation}</td>
                <td>{guest.organization}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Department;


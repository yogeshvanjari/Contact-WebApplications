import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [eml, setEml] = useState("");
  const [mob, setMob] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [DataAll, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");


  // ✅ Fetch contacts
  const contact = () => {
    axios
      .get("http://localhost:3000/contact")
      .then((res) => {
        setData(res.data.menu || []);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
      });
  };

  useEffect(() => {
    contact();
  }, []);

  // ✅ Save new contact
  const save = () => {
    const dt = { name, email: eml, mob, age, city };

    axios
      .post("http://localhost:3000/addcontact", dt)
      .then(() => {
        alert("✅ Contact Added Successfully!");
        clearForm();
        contact();
      })
      .catch(() => alert("❌ Something went wrong!"));
  };

  // ✅ Delete contact
  const del = (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    axios
      .delete("http://localhost:3000/contactDelById", { data: { id } })
      .then(() => {
        alert("🗑️ Contact Deleted");
        contact();
      })
      .catch(() => alert("❌ Failed to delete contact!"));
  };

  // ✅ Start edit mode
  const startEdit = (item) => {
    setEditId(item.id);
    setName(item.name);
    setEml(item.email);
    setMob(item.mob);
    setAge(item.age);
    setCity(item.city);
  };

  // ✅ Update contact
  const updateUser = () => {
    const dt = { id: editId, name, email: eml, mob, age, city };

    axios
      .put("http://localhost:3000/updcontact", dt)
      .then(() => {
        alert("✅ Contact Updated!");
        clearForm();
        contact();
      })
      .catch(() => alert("❌ Update Failed!"));
  };

  // ✅ Clear form
  const clearForm = () => {
    setName("");
    setEml("");
    setMob("");
    setAge("");
    setCity("");
    setEditId(null);
  };

  return (
    

    
     

    <div className="contact-container">
      <div className="overlay"></div>

      <div className="contact-box text-center">
        <h1 className="title">📇 Contact Manager</h1>
        <p className="subtitle">Add or manage your contacts below</p>

        <div className="form-section">
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={eml}
            placeholder="Enter Email"
            className="form-input"
            onChange={(e) => setEml(e.target.value)}
          />
          <input
            type="text"
            value={mob}
            placeholder="Enter Mobile"
            className="form-input"
            onChange={(e) => setMob(e.target.value)}
          />
          <input
            type="text"
            value={age}
            placeholder="Enter Age"
            className="form-input"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            value={city}
            placeholder="Enter City"
            className="form-input"
            onChange={(e) => setCity(e.target.value)}
          />

          {editId ? (
            <button className="btn-save" onClick={updateUser}>
              Update Contact
            </button>
          ) : (
            <button className="btn-save" onClick={save}>
              Save Contact
            </button>
          )}
        </div>
      </div>

      <br />

      <br />




      {/* ✅ Contacts Table */}
      <div className="table-section container mt-4">
        <h3 className="table-title text-light text-center">Saved Contacts</h3>
        <table className="table table-striped table-hover table-dark text-center mt-3">
     
     
      {/* Search Box */}
     <div className="search-box text-center mb-3">
      <input
      type="text"
      value={search}
      placeholder="🔍 Search Name or Mobile"
      className="form-input search-input"
      onChange={(e) => setSearch(e.target.value)}
      />

      
    </div>

    
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
     {DataAll
  .filter((item) => {
    const s = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(s) ||
      item.mob.toString().includes(s)
    );
  })
  .map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.mob}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => startEdit(item)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => del(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
))}

          </tbody>
        </table>
      </div>


  
      {/* Inline CSS */}
      <style>{`
        .contact-container {
          position: relative;
          min-height: 100vh;
          background-image: url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          padding-top: 60px;
          color: white;
          font-family: 'Poppins', sans-serif;
        }

      .search-box {
              margin-top: 10px;
              }

      .search-input {
      width: 500%;
      max-width: 1100px;
      margin: auto;
      background: rgba(255, 255, 255, 0.8);
      
      }


        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          z-index: 0;
        }

        .contact-box {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          width: 90%;
          max-width: 600px;
          margin: auto;
          padding: 40px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        }

        .title {
          color: #00bcd4;
          font-weight: 700;
          font-size: 30px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #ddd;
          font-size: 15px;
          margin-bottom: 30px;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-input {
          padding: 10px;
          border-radius: 8px;
          border: none;
          outline: none;
          text-align: center;
          font-size: 15px;
          background: rgba(255, 255, 255, 0.8);
        }

        .btn-save {
          margin-top: 15px;
          background: #00bcd4;
          border: none;
          padding: 12px;
          border-radius: 8px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .btn-save:hover {
          background: #0097a7;
          transform: scale(1.05);
        }

        .table-section {
          position: relative;
          z-index: 1;
          margin-top: 60px;
          padding-bottom: 50px;
        }

        .table-title {
          color: #00bcd4;
          font-weight: 600;
        }

        table {
          border-radius: 10px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .contact-box {
            width: 95%;
            padding: 25px;
          }
          .title {
            font-size: 26px;
          }
          
        }
      `}</style>
    </div>
  );
}

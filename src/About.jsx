import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function About() {
  const [DataAll, setData] = useState([]);

  const contact = () => {
    axios
      .get("http://localhost:3000/contact")
      .then((res) => {
        console.log(res.data.menu);
        setData(res.data.menu);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  const del = (id) => {
    axios
      .delete("http://localhost:3000/contactDelById", { data: { id } })
      .then((res) => {
        if (res.data) {
          alert("Delete Success");
          contact();
        }
      });
  };

  useEffect(() => {
    contact();
  }, []);

  return (
    <>
      <div className="about-section text-center py-5 bg-dark text-light">
        <h1 className="display-5 fw-bold">About Our Contact Manager</h1>
        <p className="lead w-75 mx-auto">
          Manage and view all your saved contacts in one place. Each card below
          represents an individual contact with options to delete or view
          details.
        </p>
        <Button variant="primary" className="mt-3" onClick={contact}>
          Refresh Contact List
        </Button>
      </div>

      <div className="contact-card-section container mt-5">
        <div className="row">
          {DataAll.length > 0 ? (
            DataAll.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-lg border-0">
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">{item.name}</h5>
                    <p className="card-text mb-1">
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p className="card-text mb-1">
                      <strong>Mobile:</strong> {item.mob}
                    </p>
                    <p className="card-text mb-1">
                      <strong>Age:</strong> {item.age}
                    </p>
                    <p className="card-text">
                      <strong>City:</strong> {item.city}
                    </p>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => del(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-secondary mt-5">
              <h5>No contacts found</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

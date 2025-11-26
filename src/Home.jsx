import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/Contact");
    }, 800);
  };

  return (
    <div className="home-container">
      <div className="overlay"></div>

      <div className="content-box text-center">
        <h1 className="title">Welcome to Contact Manager</h1>
        <p className="subtitle">
          Keep all your contacts organized, safe, and accessible anytime.
        </p>

        <div className="stats-card">
          <h3 className="stat-title">📇 Manage Your Network Efficiently</h3>
          <p className="description">
            Add, edit, or remove contacts with just a few clicks. Stay connected and never lose track of important people in your professional and personal life.
          </p>

          <button className="fetch-btn" onClick={handleNavigate}>
            {loading ? "Redirecting..." : "Go to Contact List"}
          </button>
        </div>
      </div>

      {/* Inline Styling */}
      <style>{`
        .home-container {
          position: relative;
          height: 100vh;
          width: 100%;
          background-image: url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-family: 'Poppins', sans-serif;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.65);
        }

        .content-box {
          position: relative;
          z-index: 1;
          padding: 40px 60px;
          border-radius: 20px;
          backdrop-filter: blur(15px);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
          text-align: center;
          width: 80%;
          max-width: 600px;
          color: white;
        }

        .title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #00bcd4;
        }

        .subtitle {
          font-size: 16px;
          color: #ddd;
          margin-bottom: 40px;
        }

        .stats-card {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          transform: scale(1.03);
          background: rgba(0, 0, 0, 0.4);
        }

        .stat-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #00e5ff;
        }

        .description {
          font-size: 16px;
          color: #ccc;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .fetch-btn {
          background-color: #00bcd4;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .fetch-btn:hover {
          background-color: #0097a7;
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          .content-box {
            width: 90%;
            padding: 30px 20px;
          }

          .title {
            font-size: 28px;
          }

          .description {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}

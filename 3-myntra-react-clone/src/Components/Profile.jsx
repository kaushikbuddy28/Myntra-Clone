import pic from "../assets/pic.jpg";
import { FaBoxOpen, FaHeart, FaMapMarkerAlt, FaCrown } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "420px" }}>
      <div
        className="card p-4"
        style={{
          borderRadius: "8px",
          border: "1px solid #eaeaec",
          boxShadow: "none",
        }}
      >
        {/* Profile Image */}
        <div className="text-center mb-3">
          <img
            src={pic}
            alt="Profile"
            className="rounded-circle"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              border: "1px solid #eaeaec",
            }}
          />
        </div>

        {/* Name & Email */}
        <h5 className="text-center mb-1">Unnati Sharma</h5>
        <p className="text-center text-muted" style={{ fontSize: "14px" }}>
          unnati256@example.com
        </p>

        {/* Insider Badge */}
        <div className="text-center mb-3">
          <span
            style={{
              fontSize: "12px",
              padding: "4px 10px",
              backgroundColor: "#fff1f4",
              color: "#ff3f6c",
              borderRadius: "12px",
              fontWeight: "600",
            }}
          >
            <FaCrown style={{ marginRight: "4px" }} />
            Myntra Insider
          </span>
        </div>

        <hr />

        {/* Quick Actions */}
        <div style={{ fontSize: "14px", color: "#282c3f" }}>
          <div className="d-flex align-items-center mb-3">
            <FaBoxOpen className="me-2 text-muted" />
            <span>My Orders</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaHeart className="me-2 text-muted" />
            <span>Wishlist</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaMapMarkerAlt className="me-2 text-muted" />
            <span>Saved Addresses</span>
          </div>
        </div>

        <hr />

        {/* User Details */}
        <div style={{ fontSize: "14px", color: "#282c3f" }}>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Username</span>
            <span>Unnati123</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Birthday</span>
            <span>09 Mar 2003</span>
          </div>


          <div className="d-flex justify-content-between">
            <span className="text-muted">Member Since</span>
            <span>Jan 2024</span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          className="btn mt-4 w-100"
          style={{
            backgroundColor: "#ff3f6c",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "4px",
          }}
        >
          EDIT PROFILE
        </button>
      </div>
    </div>
  );
};

export default Profile;

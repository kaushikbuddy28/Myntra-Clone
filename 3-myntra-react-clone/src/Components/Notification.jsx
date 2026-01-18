import {
  FaTag, FaBox,FaBell,FaHeart,FaCrown,FaTruck,FaGift,
} from "react-icons/fa";

const Notifications = () => {
  return (
<div className="container mt-5" style={{ maxWidth: "900px" ,paddingLeft:"20%"}}>
      <div>
        {/* Header */}
        <h3
          className="mb-4"
          style={{ color: "#282c3f", fontWeight: "600", fontSize: "22px" }}
        >
          <FaBell style={{ marginRight: "8px", marginLeft: "80px" }} />
          Notifications
        </h3>

        {/* Today */}
        <p className="text-muted mb-3" style={{ fontSize: "14px" }}>
          Today
        </p>

        <div className="d-flex align-items-start mb-4">
          <FaBox className="me-3" style={{ color: "#03a685", fontSize: "18px" }} />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Order Out for Delivery
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Your order will arrive today • Track your order
            </div>
          </div>
        </div>

        <div className="d-flex align-items-start mb-4">
          <FaTruck
            className="me-3"
            style={{ color: "#03a685", fontSize: "18px" }}
          />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Delivery Partner Assigned
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Your shipment is on the way to your location
            </div>
          </div>
        </div>

        <div className="d-flex align-items-start mb-4">
          <FaTag className="me-3" style={{ color: "#ff3f6c", fontSize: "18px" }} />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Flat 40% OFF on Top Brands
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Ends tonight. Don’t miss out on your favourites
            </div>
          </div>
        </div>

        {/* Yesterday */}
        <p className="text-muted mt-4 mb-3" style={{ fontSize: "14px" }}>
          Yesterday
        </p>

        <div className="d-flex align-items-start mb-4">
          <FaCrown
            className="me-3"
            style={{ color: "#f5a623", fontSize: "18px" }}
          />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Insider Exclusive Reward
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Extra 10% OFF unlocked for your next order
            </div>
          </div>
        </div>

        <div className="d-flex align-items-start mb-4">
          <FaHeart
            className="me-3"
            style={{ color: "#ff3f6c", fontSize: "18px" }}
          />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Price Drop Alert ❤️
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Items in your wishlist are now available at lower prices
            </div>
          </div>
        </div>

        <div className="d-flex align-items-start mb-4">
          <FaGift
            className="me-3"
            style={{ color: "#ff3f6c", fontSize: "18px" }}
          />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Special Birthday Offer 🎉
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Enjoy exclusive discounts curated just for you
            </div>
          </div>
        </div>

        {/* Earlier */}
        <p className="text-muted mt-4 mb-3" style={{ fontSize: "14px" }}>
          Earlier
        </p>

        <div className="d-flex align-items-start mb-4">
          <FaTag className="me-3" style={{ color: "#ff3f6c", fontSize: "18px" }} />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              New Arrivals Just Dropped
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Fresh styles from your favourite brands are now live
            </div>
          </div>
        </div>

        <div className="d-flex align-items-start mb-2">
          <FaTag className="me-3" style={{ color: "#ff3f6c", fontSize: "18px" }} />
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Trending Picks for You
            </div>
            <div className="text-muted" style={{ fontSize: "14px" }}>
              Styles based on your recent browsing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

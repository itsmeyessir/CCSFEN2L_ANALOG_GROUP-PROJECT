import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="dashboard-header">
        <div className="header-title">
          <h1>Logistics</h1>
          <p>Make and send logistics request</p>
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search product, supplier, order"
        />
        <div className="profile-section">
          <span className="notification-icon">🔔</span>
          <div className="profile-info">
            <p className="profile-name">Sumting W.</p>
            <p className="profile-role">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

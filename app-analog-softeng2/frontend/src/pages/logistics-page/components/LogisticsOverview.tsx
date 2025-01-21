import "./styles/LogisticsOverview.css";

const LogisticsOverview = () => {
  return (
    <div className="logistics-overview-wrapper">
      <div className="logistics-header">
        <h2>Logistics Overview</h2>
        <p>A summary of current logistics data and key metrics.</p>
      </div>
      <div className="logistics-stats">
        <div className="stat-card">
          <h3>Total Requests Made</h3>
          <h4>124</h4>
          <p>50 more than last year</p>
        </div>
        <div className="stat-card">
          <h3>Total Cost Incurred</h3>
          <h4>124</h4>
        </div>
        <div className="stat-card">
          <h3>Pending Requests</h3>
          <h4>124</h4>
        </div>
        <div className="stat-card">
          <h3>Approved Requests</h3>
          <h4>124</h4>
          <p>2% more than last year</p>
        </div>
      </div>
    </div>
  );
};

export default LogisticsOverview;

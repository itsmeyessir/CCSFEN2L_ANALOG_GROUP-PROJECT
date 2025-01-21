import "./styles/ViewRequest.css";

const mockRequests = [
  {
    id: "001",
    module: "Camera",
    description: "Includes the camera module...",
    quantity: "360,000",
    requestedBy: "Robs Gelo Siaton",
    sentTo: "Sumting Wong",
    requestDate: "21/11/2022",
    status: "Pending",
  },
  {
    id: "002",
    module: "Speaker",
    description: "Comprises the speaker unit...",
    quantity: "360,000",
    requestedBy: "Robs Gelo Siaton",
    sentTo: "Sumting Wong",
    requestDate: "21/11/2022",
    status: "Pending",
  },
  {
    id: "003",
    module: "SD Card",
    description: "Provides expandable storage...",
    quantity: "360,000",
    requestedBy: "Robs Gelo Siaton",
    sentTo: "Sumting Wong",
    requestDate: "21/11/2022",
    status: "Approved",
  },
  {
    id: "004",
    module: "SD Card",
    description: "Provides expandable storage...",
    quantity: "360,000",
    requestedBy: "Robs Gelo Siaton",
    sentTo: "Sumting Wong",
    requestDate: "21/11/2022",
    status: "Approved",
  },
  {
    id: "005",
    module: "SD Card",
    description: "Provides expandable storage...",
    quantity: "360,000",
    requestedBy: "Robs Gelo Siaton",
    sentTo: "Sumting Wong",
    requestDate: "21/11/2022",
    status: "Approved",
  },
];

const ViewRequest = () => {
  return (
    <div className="view-request">
      <h2>All Logistics Request</h2>
      <table className="request-table">
        <thead>
          <tr>
            <th>RID</th>
            <th>Modules</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Requested By</th>
            <th>Sent To</th>
            <th>Request Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.module}</td>
              <td>{request.description}</td>
              <td>{request.quantity}</td>
              <td>{request.requestedBy}</td>
              <td>{request.sentTo}</td>
              <td>{request.requestDate}</td>
              <td
                className={
                  request.status === "Pending"
                    ? "status-pending"
                    : "status-approved"
                }
              >
                {request.status}
              </td>
              <td>
                <a href={`/requests/${request.id}`} className="action-link">
                  View more
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRequest;

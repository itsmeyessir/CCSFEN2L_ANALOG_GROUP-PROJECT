import "./styles/ProgressTable.css"; // Import the CSS file

interface WorkInProgressRow {
  mid: string;
  currentState: string;
  quantityModules: string;
  status: string;
  eta: string;
}

const workInProgressData: WorkInProgressRow[] = [
  {
    mid: "001",
    currentState: "Assembly",
    quantityModules: "500 camera modules",
    status: "Pending",
    eta: "25/02/2024",
  },
  {
    mid: "002",
    currentState: "Testing",
    quantityModules: "250 speaker modules",
    status: "Approved",
    eta: "19/02/2024",
  },
  {
    mid: "003",
    currentState: "Packaging",
    quantityModules: "850 SD card modules",
    status: "Rejected",
    eta: "10/02/2023",
  },
  {
    mid: "003",
    currentState: "Packaging",
    quantityModules: "850 SD card modules",
    status: "Rejected",
    eta: "10/02/2023",
  },
  {
    mid: "003",
    currentState: "Packaging",
    quantityModules: "850 SD card modules",
    status: "Rejected",
    eta: "10/02/2023",
  },
  {
    mid: "003",
    currentState: "Packaging",
    quantityModules: "850 SD card modules",
    status: "Rejected",
    eta: "10/02/2023",
  },
];

const ProgressTable = () => {
  return (
    <div className="work-in-progress-table">
      <p className="table-label">Work in Progress</p>
      <table className="table">
        <thead>
          <tr>
            <th>MID</th>
            <th>Current State</th>
            <th>Quantity & Modules</th>
            <th>Status</th>
            <th>ETA</th>
          </tr>
        </thead>
        <tbody>
          {workInProgressData.map((row) => (
            <tr key={row.mid}>
              <td>{row.mid}</td>
              <td>{row.currentState}</td>
              <td>{row.quantityModules}</td>
              <td className={`status-${row.status.toLowerCase()}`}>
                {row.status}
              </td>
              <td>{row.eta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressTable;

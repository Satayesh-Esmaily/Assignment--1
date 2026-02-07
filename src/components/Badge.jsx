export default function Badge({ label, value }) {
  return (
    <div className="badge">
      <span className="badge-label">{label}</span>
      <span className="badge-value">{value}</span>
    </div>
  );
}


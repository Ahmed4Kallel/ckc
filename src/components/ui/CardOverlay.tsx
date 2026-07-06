export default function CardOverlay() {
  return (
    <div className="card-line-overlay pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="card-overlay-line" />
      ))}
    </div>
  );
}

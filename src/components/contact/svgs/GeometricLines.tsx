export default function GeometricLines() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
      <line x1="0" y1="0" x2="1440" y2="600" stroke="#F8F9FC" strokeWidth="1" />
      <line x1="1440" y1="0" x2="0" y2="600" stroke="#F8F9FC" strokeWidth="1" />
      <circle cx="720" cy="300" r="200" fill="none" stroke="#F8F9FC" strokeWidth="0.5" />
      <circle cx="720" cy="300" r="150" fill="none" stroke="#F8F9FC" strokeWidth="0.5" />
    </svg>
  );
}

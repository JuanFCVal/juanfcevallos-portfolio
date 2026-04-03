export default function DiagonalAccent() {
  return (
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 400 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <line x1="400" y1="0" x2="0" y2="800" stroke="#F8F9FC" strokeWidth="2" />
        <line x1="350" y1="0" x2="-50" y2="800" stroke="#F8F9FC" strokeWidth="1" />
      </svg>
    </div>
  );
}

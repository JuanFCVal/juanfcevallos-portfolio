export default function NetworkBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1B2A4A" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <line x1="0" y1="200" x2="400" y2="0" stroke="#1B2A4A" strokeWidth="0.4" />
      <line x1="200" y1="600" x2="800" y2="0" stroke="#1B2A4A" strokeWidth="0.4" />
      <line x1="600" y1="600" x2="1200" y2="100" stroke="#1B2A4A" strokeWidth="0.4" />
      <circle cx="200" cy="150" r="3" fill="#2D4A6E" />
      <circle cx="500" cy="80" r="2" fill="#2D4A6E" />
      <circle cx="750" cy="300" r="3" fill="#2D4A6E" />
      <circle cx="100" cy="400" r="2" fill="#2D4A6E" />
      <line x1="200" y1="150" x2="500" y2="80" stroke="#2D4A6E" strokeWidth="0.6" />
      <line x1="500" y1="80" x2="750" y2="300" stroke="#2D4A6E" strokeWidth="0.6" />
      <line x1="100" y1="400" x2="200" y2="150" stroke="#2D4A6E" strokeWidth="0.6" />
    </svg>
  );
}

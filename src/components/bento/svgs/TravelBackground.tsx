export default function TravelBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="150" r="120" fill="none" stroke="#F8F9FC" strokeWidth="1" />
      <circle cx="200" cy="150" r="80" fill="none" stroke="#F8F9FC" strokeWidth="0.5" />
      <line x1="80" y1="150" x2="320" y2="150" stroke="#F8F9FC" strokeWidth="0.5" />
      <line x1="200" y1="30" x2="200" y2="270" stroke="#F8F9FC" strokeWidth="0.5" />
    </svg>
  );
}

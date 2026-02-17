export default function StarHalf() {
  return (
    <svg
      className="w-5 h-5 inline-block"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#d1d5db', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="url(#halfGradient)"
      />
    </svg>
  );
}

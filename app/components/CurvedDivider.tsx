interface CurvedDividerProps {
  color?: string;
  flip?: boolean;
}

export function CurvedDivider({ color = "#221da0", flip = false }: CurvedDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-16 lg:h-20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,100 480,20 720,64 C960,108 1200,20 1440,64 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M0,80 C240,116 480,36 720,80 C960,124 1200,36 1440,80 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.1"
        />
      </svg>
    </div>
  );
}


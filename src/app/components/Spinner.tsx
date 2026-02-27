import React from "react";

interface SpinnerProps {
  size?: number;
}

/**
 * Circular loading spinner — Material/Figma style.
 * Uses --color-text-muted for the track, --color-text-primary for the arc.
 */
const Spinner: React.FC<SpinnerProps> = ({ size = 32 }) => {
  const borderWidth = Math.max(2, Math.round(size / 10));

  return (
    <div
      className="animate-spin rounded-full"
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid var(--color-border-muted)`,
        borderTop: `${borderWidth}px solid var(--color-text-primary)`,
      }}
    />
  );
};

export default Spinner;

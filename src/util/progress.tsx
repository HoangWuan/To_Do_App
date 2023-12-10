import React from "react";

interface ProgressBarProps {
  progress: number; // Progress percentage (0-100)
  variant?: string; // Bootstrap progress bar variant (e.g., "primary", "success")
  label?: string; // Optional label to display
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, variant = "primary", label }) => {
  const progressStyle = { width: `${progress}%` };

  return (
    <div className="progress">
      {label && <span className="progress-label">{label}</span>}
      <div className={`progress-bar progress-bar-${variant}`} style={progressStyle}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
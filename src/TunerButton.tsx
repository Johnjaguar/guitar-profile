import React from 'react';
import { Music } from 'lucide-react';

interface TunerButtonProps {
  href?: string;
  onClick?: () => void;  // Add this line
}

const TunerButton: React.FC<TunerButtonProps> = ({ 
  href = "https://johnjaguar.github.io/Tuner/",
  onClick 
}) => {
  const handleClick = () => {
    if (onClick) onClick();  // Call the passed onClick handler if it exists
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="cta-button secondary-cta flex items-center gap-2"
    >
      <Music size={20} />
      Tune Guitar
    </button>
  );
};

export default TunerButton;

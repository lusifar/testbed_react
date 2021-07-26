import { useLocation } from 'react-router-dom';

import './LocationDisplay.css';

function LocationDisplay() {
  const location = useLocation();

  return (
    <div className="LocationDisplay" data-testid="location-display">
      {location.pathname}
    </div>
  );
}

export default LocationDisplay;

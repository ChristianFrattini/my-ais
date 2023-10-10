import './service-toggler.styles.scss'
import { useState } from "react";



function ServiceToggler({ serviceName, service }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleService = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={toggleService}>
          <h2>{serviceName}</h2>
          <div className={`arrow ${isOpen ? 'open' : ''}`}></div>
        </div>
        {isOpen && <div className="accordion-content">{service}</div>}
      </div>
    );
  }
  
  export default ServiceToggler;
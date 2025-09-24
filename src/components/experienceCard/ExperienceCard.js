import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    try {
      const colorThief = new ColorThief();
      const colors = colorThief.getColor(imgRef.current);
      setColorArrays(colors);
    } catch (error) {
      // Fallback for iOS Safari CORS issues or other ColorThief failures
      console.warn('ColorThief failed to extract colors, using fallback:', error);
      setColorArrays([100, 100, 100]); // Default gray color
    }
  }

  function rgb(values) {
    return typeof values === "undefined" || !values || values.length === 0
      ? "rgb(100, 100, 100)" // Default gray fallback
      : "rgb(" + values.join(", ") + ")";
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={(isDark ? "experience-card-dark" : "experience-card") + " fade-in-up"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
          onError={() => {
            // Fallback when image fails to load
            setColorArrays([100, 100, 100]);
          }}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <div className={`experience-description-container ${!isExpanded ? 'collapsed' : ''}`}>
          <ul>
            <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
          </ul>
          {!isExpanded && <div className="experience-fade-overlay"></div>}
        </div>
        <button 
          className={`experience-toggle-btn ${isDark ? 'dark-mode' : ''}`}
          onClick={toggleExpanded}
        >
          {isExpanded ? 'collapse...' : 'read more...'}
        </button>
      </div>
    </div>
  );
}

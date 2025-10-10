import React from "react";
import "./FractionalLeadership.scss";
import { fractionalLeadership } from "../../portfolio";

export default function FractionalLeadership() {
  if (fractionalLeadership.display) {
    return (
      <div id="fractionalLeadership">
        <div className="fractional-leadership-container">
          <div>
            <h1 className="fractional-leadership-heading">
              {fractionalLeadership.title}
            </h1>
            <div className="fractional-leadership-content">
              {fractionalLeadership.paragraphs.map((paragraph, i) => (
                <p key={i} className="fractional-leadership-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}


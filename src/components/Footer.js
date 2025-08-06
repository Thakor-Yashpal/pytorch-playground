import React, { useState } from "react";
const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <footer className="footer">
      <button className="footer-expand" onClick={() => setShowInfo(s => !s)}>
        <span className="expand-arrow">▼</span> Um, What Is a Neural Network?
      </button>
      {showInfo && (
        <div className="footer-info">
          <p>
            A neural network is a computational model inspired by the human brain, composed of layers of interconnected "neurons" that learn patterns from data.
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
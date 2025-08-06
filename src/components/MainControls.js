import React from "react";

const MainControls = () => (
  <div className="main-controls">
    <button className="icon-btn" title="Play/Pause">
      <span className="play-icon">▶</span>
    </button>
    <span className="epoch-label">Epoch</span>
    <span className="epoch-value">000,000</span>
    <input type="number" min="0" step="0.0001" className="input-short" defaultValue="0.001" title="Learning rate"/>
    <select className="input-short" title="Activation">
      <option>ReLU</option>
      <option>Sigmoid</option>
      <option>Tanh</option>
    </select>
    <select className="input-short" title="Regularization">
      <option>None</option>
      <option>L1</option>
      <option>L2</option>
    </select>
    <input type="number" min="0" step="0.0001" className="input-short" defaultValue="0.001" title="Regularization rate"/>
    <select className="input-short" title="Problem type">
      <option>Classification</option>
      <option>Regression</option>
    </select>
  </div>
);

export default MainControls;
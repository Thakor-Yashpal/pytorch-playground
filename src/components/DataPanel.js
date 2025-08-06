import React from "react";
import { BlobIcon, SpiralIcon, XorIcon, CustomIcon } from "./assets/datasetIcons";

const DataPanel = () => (
  <aside className="panel data-panel">
    <h2 className="panel-title">DATA</h2>
    <div className="dataset-icons">
      <button title="Blobs"><BlobIcon /></button>
      <button title="Spiral"><SpiralIcon /></button>
      <button title="XOR"><XorIcon /></button>
      <button title="Custom"><CustomIcon /></button>
    </div>
    <label>
      Ratio of training to test data:
      <span className="slider-label">50%</span>
      <input type="range" min="10" max="90" defaultValue="50" />
    </label>
    <label>
      Noise:
      <input type="range" min="0" max="1" step="0.01" defaultValue="0" />
    </label>
    <label>
      Batch size:
      <input type="range" min="1" max="128" defaultValue="10" />
    </label>
    <button className="regenerate-btn">REGENERATE</button>
  </aside>
);

export default DataPanel;
import React from "react";

const OutputPanel = () => (
  <aside className="panel output-panel">
    <h2 className="panel-title">OUTPUT</h2>
    <div>
      <div>Test loss <span className="loss-value">0.504</span></div>
      <div>Training loss <span className="loss-value">5.008</span></div>
    </div>
    <div className="plot-area">
      <div className="plot-placeholder"></div>
    </div>
    <div className="output-options">
      <label>
        <input type="checkbox" /> Show test data
      </label>
      <label>
        <input type="checkbox" /> Discretize output
      </label>
    </div>
    <div className="output-legend">
      <span>Colors show data, neuron and weight values.</span>
    </div>
  </aside>
);

export default OutputPanel;
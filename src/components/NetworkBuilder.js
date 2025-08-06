import React from "react";

const features = ["X₁", "X₂", "X₁·X₂", "sin(X₁)", "sin(X₂)"];
const layers = [
  { id: 1, neurons: 4 },
  { id: 2, neurons: 2 },
  { id: 3, neurons: 2 },
  { id: 4, neurons: 2 },
  { id: 5, neurons: 2 }
];

const NetworkBuilder = () => (
  <section className="network-builder">
    <div className="features">
      <h3>FEATURES</h3>
      <span>Which properties do you want to feed in?</span>
      <div className="feature-list">
        {features.map(f => (
          <label key={f} className="feature-checkbox">
            <input type="checkbox" /> {f}
          </label>
        ))}
      </div>
    </div>
    <div className="layers-controls">
      <span>5 HIDDEN LAYERS</span>
      <button title="Add Layer">+</button>
      <button title="Remove Layer">−</button>
    </div>
    <div className="network-diagram">
      <div className="layer-row">
        {layers.map(layer => (
          <div key={layer.id} className="layer">
            <span>{layer.neurons} neurons</span>
            <div className="neurons">
              {Array.from({ length: layer.neurons }).map((_, i) => (
                <div key={i} className="neuron"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="network-desc">
      The outputs are mixed with varying weights, shown by thickness of lines.
    </div>
  </section>
);

export default NetworkBuilder;
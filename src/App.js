
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

export default function App() {
  const mapRef = useRef(null);
  const [rightOpen, setRightOpen] = useState(false);
  const [tab, setTab] = useState("layers");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    window.require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Home",
      "esri/widgets/LayerList",
      "esri/widgets/Legend"
    ], (Map, MapView, FeatureLayer, Home, LayerList, Legend) => {

      const boreholeLayer = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/USA_Major_Cities/FeatureServer/0",
        title: "Borehole"
      });

      const map = new Map({
        basemap: "topo",
        layers: [boreholeLayer]
      });

      const view = new MapView({
        container: mapRef.current,
        map,
        center: [103.8198, 1.3521],
        zoom: 11
      });

      view.ui.add(new Home({ view }), "top-left");

      const layerList = new LayerList({ view, container: "layerListDiv" });
      const legend = new Legend({ view, container: "legendDiv" });

      window._layerList = layerList;
      window._legend = legend;
    });
  }, []);

  return (
    <div className={`app ${rightOpen ? 'right-open' : ''}`}>
      {/* Header */}
      <div className="header">
        <div className="logo">GDIS</div>
        <div className="menu">Map View &nbsp; Admin &nbsp; GDB</div>
        <input className="search" placeholder="Search By Project Id / Hole Id / Hole Type / Location" />
        <button className="btn">Cross-Section View</button>
        <button className="btn primary" onClick={() => setShowUploadModal(true)}>Upload Dataset</button>
        <div className="user">John Doe</div>
      </div>

      {/* Map */}
      <div ref={mapRef} className="map"></div>

      {/* Top left tools */}
      <div className="top-left-tools">
        <button className="icon-btn" title="Home"><i className="bi bi-house-fill"></i></button>
          <button className="icon-btn" title="2D View"><b className="bi bi-cube">2D</b></button>
          <button className="icon-btn" title="3D View"><b className="bi bi-cube">3D</b></button>
      </div>

      {/* Bottom left stats */}
      <div className="stats">
        <div className="stat">Total Borehole<br /><b>1090</b></div>
        <div className="stat">Total CPT<br /><b>1200</b></div>
        <div className="stat">Total Contract<br /><b>1000</b></div>
      </div>

      {/* Right toggle (uses SVG icon) */}
      <button
        className="right-toggle"
        aria-label="Toggle right panel"
        onClick={() => setRightOpen(!rightOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
          <rect x="2" y="3" width="8" height="6" rx="1" stroke="white" strokeWidth="1.2" fill="transparent"/>
          <rect x="2" y="15" width="8" height="6" rx="1" stroke="white" strokeWidth="1.2" fill="transparent"/>
          <rect x="14" y="3" width="8" height="6" rx="1" stroke="white" strokeWidth="1.2" fill="transparent"/>
          <rect x="14" y="15" width="8" height="6" rx="1" stroke="white" strokeWidth="1.2" fill="transparent"/>
        </svg>
      </button>

      {/* Right panel */}
      {rightOpen && (
        <div className="right-panel">
          <div className="tabs">
            <button onClick={() => setTab("layers")} className={tab==="layers"?"active":""}>Layers & Legends</button>
            <button onClick={() => setTab("widgets")} className={tab==="widgets"?"active":""}>Widgets</button>
          </div>

          {tab === "layers" && (
            <div className="panel-content">
              <p><b>Layers</b></p>
              <div className="layer-search">
                <input className="layer-search-input" placeholder="Search for layers" />
              </div>
              <div id="layerListDiv"></div>
              <hr />
              <p><b>Legends</b></p>
              <div id="legendDiv"></div>
            </div>
          )}

          {tab === "widgets" && (
            <div className="panel-content grid">
              <button className="widget-btn" title="Info"><i className="bi bi-info-circle"></i></button>
              <button className="widget-btn" title="Point"><i className="bi bi-record-circle"></i></button>
              <button className="widget-btn" title="Rectangle"><i className="bi bi-square"></i></button>
              <button className="widget-btn" title="Polygon"><i className="bi bi-hexagon"></i></button>
              <button className="widget-btn" title="Edit"><i className="bi bi-pencil"></i></button>
              <button className="widget-btn" title="Target"><i className="bi bi-crosshair"></i></button>
              <button className="widget-btn" title="Print"><i className="bi bi-printer"></i></button>
            </div>
          )}
        </div>
      )}

      {/* Upload Dataset Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon">
                <i className="bi bi-cloud-arrow-up"></i>
              </div>
              <button className="modal-close" onClick={() => setShowUploadModal(false)}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            <h2 className="modal-title">Upload Dataset</h2>
            
            <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
              <p className="upload-text">Drag & Drop files Or Browse</p>
              <p className="upload-subtitle">Upload upto 3 AGS ZIP files</p>
              <button className="browse-btn" onClick={() => fileInputRef.current?.click()}>Browse</button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".zip"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 3) {
                  alert('You can upload maximum 3 files');
                  return;
                }
                console.log('Files selected:', files);
              }}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

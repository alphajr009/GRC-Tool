import React, { useState } from "react";
import "../css/project.css";
import Navbar from "../components/navbar/MainNavbar";
import { Layout, Table, InputNumber, Button } from "antd";

function PsScore() {
  return (
    <div className="PsScore">
      <Navbar />
      <div className="ps-score-content">
        <h2>Risk Assessment Score </h2>
        <div className="psc-sc-content-score">
          <div className="psc-section">
            <div className="psc-score-card">
              <span>5.6</span>
            </div>
          </div>
          <div className="psc-section">
            <div className="psc-1l9">
              <div className="psc-section-al">
                <div className="psc-s-al-box">
                  <h4>Phishing Bait</h4>
                  <h5>1</h5>
                </div>

                <div className="psc-s-al-box">
                  <h4>Governance Findings</h4>
                  <h5>2</h5>
                </div>

                <div className="psc-s-al-box">
                  <h4>Training Defaulters</h4>
                  <h5>1</h5>
                </div>
              </div>
              <div className="psc-section-al">
                <div className="psc-s-al-box">
                  <h4>Phishing Bait</h4>
                  <h5>1</h5>
                </div>

                <div className="psc-s-al-box">
                  <h4>Governance Findings</h4>
                  <h5>2</h5>
                </div>

                <div className="psc-s-al-box">
                  <h4>Training Defaulters</h4>
                  <h5>1</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsScore;

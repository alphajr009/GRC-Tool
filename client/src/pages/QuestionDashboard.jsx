import React, { useState } from "react";
import "../css/project.css";
import Navbar from "../components/navbar/MainNavbar";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

function QuestionDashboard() {
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <Navbar />
      <div className="question-dashboard">
        <div className="qb-title">
          <h1>Governance Questionnaire Dashboards</h1>
        </div>
        <div className="qb-content">
          <div className="qb-section">
            <div className="qb-section-content">
              <div className="qb-section-content-item">
                <h4>Question ID</h4>
                <p>110283921</p>
              </div>
              <div className="qb-section-content-item">
                <h4>Project Manager Name</h4>
                <p> Tharuka Wishvajith</p>
              </div>
              <div className="qb-section-content-item">
                <h4>Uploaded Date</h4>
                <p>Jan - 23</p>
              </div>
            </div>
          </div>
          <div className="qb-section">
            <div className="qb-section-ctrl">
              <h6>Control</h6>
              <h5>
                <br />
                Ensure Client Specific requirements are completed before
                Onboarding new resources to the Account
              </h5>
            </div>
          </div>
          <div className="qb-section">
            <div className="qb-section-ctrl">
              <h6>Uploaded Evidence</h6>
              <br />
              <br />

              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDashboard;

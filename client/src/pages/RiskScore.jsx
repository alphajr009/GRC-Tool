import React, { useState } from "react";
import "../css/project.css";
import Navbar from "../components/navbar/MainNavbar";
import { Layout, Table, InputNumber, Button } from "antd";

const { Content } = Layout;

const data = [
  {
    key: "1",
    accountName: "Dialog",
    annualTrainingCompleted: 0,
    annualTrainingNotCompleted: 0,
    avAndPatchCompleted: 0,
    phishingBaited: 0,
    phishingReported: 0,
    governanceFindings: 0,
  },
  {
    key: "2",
    accountName: "Sri Lanka Telecom",
    annualTrainingCompleted: 0,
    annualTrainingNotCompleted: 0,
    avAndPatchCompleted: 0,
    phishingBaited: 0,
    phishingReported: 0,
    governanceFindings: 0,
  },
  {
    key: "3",
    accountName: "Hemas",
    annualTrainingCompleted: 0,
    annualTrainingNotCompleted: 0,
    avAndPatchCompleted: 0,
    phishingBaited: 0,
    phishingReported: 0,
    governanceFindings: 0,
  },
  {
    key: "4",
    accountName: "Scope Cinemas",
    annualTrainingCompleted: 0,
    annualTrainingNotCompleted: 0,
    avAndPatchCompleted: 0,
    phishingBaited: 0,
    phishingReported: 0,
    governanceFindings: 0,
  },
  {
    key: "5",
    accountName: "HNB",
    annualTrainingCompleted: 0,
    annualTrainingNotCompleted: 0,
    avAndPatchCompleted: 0,
    phishingBaited: 0,
    phishingReported: 0,
    governanceFindings: 0,
  },
  {
    key: "6",
    accountName: "Colombo Stock Exchange",
    annualTrainingCompleted: 0,
    annualTrainingNotCompleted: 0,
    avAndPatchCompleted: 0,
    phishingBaited: 0,
    phishingReported: 0,
    governanceFindings: 0,
  },
];

function RiskScore() {
  const [tableData, setTableData] = useState(data);

  const handleChange = (value, key, column) => {
    const newData = [...tableData];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
      newData[index][column] = value;
      setTableData(newData);
    }
  };

  const handleSubmit = () => {
    window.location.href = "/ps-score/score";
  };

  const columns = [
    {
      title: "Account Name",
      dataIndex: "accountName",
      key: "accountName",
    },
    {
      title: "Annual Training Completed",
      dataIndex: "annualTrainingCompleted",
      key: "annualTrainingCompleted",
      render: (_, record) => (
        <InputNumber
          value={record.annualTrainingCompleted}
          onChange={(value) =>
            handleChange(value, record.key, "annualTrainingCompleted")
          }
        />
      ),
    },
    {
      title: "Annual Training Not Completed",
      dataIndex: "annualTrainingNotCompleted",
      key: "annualTrainingNotCompleted",
      render: (_, record) => (
        <InputNumber
          value={record.annualTrainingNotCompleted}
          onChange={(value) =>
            handleChange(value, record.key, "annualTrainingNotCompleted")
          }
        />
      ),
    },
    {
      title: "AV and Patch Completed",
      dataIndex: "avAndPatchCompleted",
      key: "avAndPatchCompleted",
      render: (_, record) => (
        <InputNumber
          value={record.avAndPatchCompleted}
          onChange={(value) =>
            handleChange(value, record.key, "avAndPatchCompleted")
          }
        />
      ),
    },
    {
      title: "Phishing Baited",
      dataIndex: "phishingBaited",
      key: "phishingBaited",
      render: (_, record) => (
        <InputNumber
          value={record.phishingBaited}
          onChange={(value) =>
            handleChange(value, record.key, "phishingBaited")
          }
        />
      ),
    },
    {
      title: "Phishing Reported",
      dataIndex: "phishingReported",
      key: "phishingReported",
      render: (_, record) => (
        <InputNumber
          value={record.phishingReported}
          onChange={(value) =>
            handleChange(value, record.key, "phishingReported")
          }
        />
      ),
    },
    {
      title: "Governance Findings",
      dataIndex: "governanceFindings",
      key: "governanceFindings",
      render: (_, record) => (
        <InputNumber
          value={record.governanceFindings}
          onChange={(value) =>
            handleChange(value, record.key, "governanceFindings")
          }
        />
      ),
    },
  ];

  return (
    <div className="riskScore">
      <Navbar />
      <div className="risk-score-content">
        <h1>Risk Assessment Score Inputs</h1>
        <div className="risk-sc-table">
          <Table columns={columns} dataSource={tableData} pagination={false} />
        </div>
        <br />
        <div className="rsc-btn">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default RiskScore;

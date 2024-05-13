import React, { useState } from "react";
import "../css/project.css";
import Navbar from "../components/navbar/MainNavbar";
import { Layout, Table, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

const data = [
  {
    qid: "110283921",
    projectManager: "Tharuka Wishvajith",
    count: "2024-01-01",
    month: "January",
  },
  {
    qid: "110283999",
    projectManager: "Tharuka Wishvajith",
    count: "2024-03-09",
    month: "March",
  },
  {
    qid: "110283990",
    projectManager: "Tharuka Wishvajith",
    count: "2024-01-01",
    month: "January",
  },
];

function Questionnaire() {
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState(data);
  const [selectedMonth, setSelectedMonth] = useState("All");

  const handleRowClick = (record) => {
    navigate(`/questions/${record.qid}`);
  };

  const handleMonthFilter = (value) => {
    setSelectedMonth(value);
    if (value === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.month === value);
      setFilteredData(filtered);
    }
  };

  const columns = [
    {
      title: "Question ID",
      dataIndex: "qid",
      key: "qid",
    },
    {
      title: "Project Manager Name",
      dataIndex: "projectManager",
      key: "projectManager",
    },
    {
      title: "Uploaded Date",
      dataIndex: "count",
      key: "count",
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Content className="project-content">
        <h1>Governance Account List</h1>
        <Select
          defaultValue="All"
          style={{ width: 120 }}
          onChange={handleMonthFilter}
        >
          <Option value="All">All</Option>
          <Option value="January">January</Option>
          <Option value="February">February</Option>
          <Option value="March">March</Option>
        </Select>
        <div className="pc-table-view">
          <Table
            columns={columns}
            dataSource={filteredData}
            onRow={(record, rowIndex) => ({
              onClick: () => {
                handleRowClick(record);
              },
            })}
          />
        </div>
      </Content>
    </Layout>
  );
}

export default Questionnaire;

import React, { useState } from "react";
import "../css/project.css";
import Navbar from "../components/navbar/MainNavbar";
import { Layout, Table, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

const data = [
  {
    projectManager: "Tharuka Wishvajith",
    account: "Dialog",
    count: 11,
    month: "January",
  },
  {
    projectManager: "Anuranga Wishvajith",
    account: "Sri Lanka Telecom",
    count: 10,
    month: "March",
  },
  {
    projectManager: "Sandun Bandara",
    account: "Hemas",
    count: 15,
    month: "January",
  },
];

function Question() {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedMonth, setSelectedMonth] = useState("All");
  const navigate = useNavigate();

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
      title: "Project Manager",
      dataIndex: "projectManager",
      key: "projectManager",
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Count of Questions",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
  ];

  const handleRowClick = (record) => {
    navigate(`/questions/${record.account}`);
  };

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

export default Question;

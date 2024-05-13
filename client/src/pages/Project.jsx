import React from "react";
import "../css/project.css";
import Navbar from "../components/navbar/MainNavbar";
import { Layout, Table } from "antd";

const { Content } = Layout;

function Project() {
  const columns = [
    {
      title: "Account Name",
      dataIndex: "accountName",
      key: "accountName",
    },
    {
      title: "Business Unit",
      dataIndex: "businessUnit",
      key: "businessUnit",
    },
    {
      title: "Account Owner",
      dataIndex: "accountOwner",
      key: "accountOwner",
    },
    {
      title: "Project Manager",
      dataIndex: "projectManager",
      key: "projectManager",
    },
    {
      title: "Data Type",
      dataIndex: "dataType",
      key: "dataType",
    },
  ];

  const data = [
    {
      key: "1",
      accountName: "Dialog",
      businessUnit: "Telecommunication",
      accountOwner: "Sandun Wikasitha",
      projectManager: "Tharuka Wishvajith",
      dataType: "PII, Non Sensitive Data",
    },
    {
      key: "2",
      accountName: "Sri Lanka Telecom",
      businessUnit: "Telecommunication",
      accountOwner: "Sndun Wikasitha",
      projectManager: "Senarath Bandara",
      dataType: "PII, Non Sensitive Data",
    },
  ];

  return (
    <Layout>
      <Navbar />
      <Content className="project-content">
        <h1>Account Overview Dashboard</h1>
        <div className="pc-table-view">
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
    </Layout>
  );
}

export default Project;

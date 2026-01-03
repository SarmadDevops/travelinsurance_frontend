import React from "react";
import { Layout, Menu, Flex, Typography, Button } from "antd";
import { SafetyCertificateFilled, KeyOutlined } from "@ant-design/icons";
import "./Navbar.css";

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
  return (
    <Header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <Flex align="center" gap={10} className="logo-wrap">
          <SafetyCertificateFilled className="logo-icon" />
          <Text strong className="logo-text">SecurePath</Text>
        </Flex>

        {/* Menu */}
        <Menu
          mode="horizontal"
          selectable={false}
          className="navbar-menu"
          items={[
            { key: "1", label: "Home" },
            { key: "2", label: "Plans" },
            {
              key: "4",
              label: (
                <span className="change-pass-link">
                  <KeyOutlined /> Change Password
                </span>
              ),
            },
            {
              key: "5",
              label: (
                <Button type="primary" size="small">
                  Login
                </Button>
              ),
            },
          ]}
        />
      </div>
    </Header>
  );
};

export default Navbar;

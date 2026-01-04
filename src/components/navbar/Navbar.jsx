import React from "react";
import { Layout, Menu, Flex, Typography } from "antd";
import {
  SafetyCertificateFilled,
  HomeOutlined,
  ReloadOutlined,
  GlobalOutlined,
  TeamOutlined,
  FileTextOutlined,
  UserAddOutlined,
  FileProtectOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const { Header, Sider } = Layout;
const { Text } = Typography;

const Navbar = ({ variant = "top", isLoggedIn = true }) => { // Default true kiya hai taaki tabs dikhein
  const navigate = useNavigate();

  // Aapke saare 8 tabs
  const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "Home" },
    { key: "refresh", icon: <ReloadOutlined />, label: "Refresh Balance" },
    { key: "travel", icon: <GlobalOutlined />, label: "Travel Packages" },
    { key: "underwriting", icon: <FileProtectOutlined />, label: "Under Writing" },
    { key: "users", icon: <TeamOutlined />, label: "User Management" },
    { key: "reports", icon: <FileTextOutlined />, label: "Reports" },
    { key: "agent", icon: <UserAddOutlined />, label: "Agent Registration" },
    { key: "policy", icon: <FileTextOutlined />, label: "Policy Details" },
    { key: "logout", icon: <LogoutOutlined />, label: "Logout", danger: true },
  ];

  /* ============== TOP NAVBAR ============== */
  if (variant === "top") {
    return (
      <Header className="navbar-header">
        <div className="navbar-container">
          {/* Logo Section */}
          <Flex align="center" gap={10} className="logo-wrap">
            <SafetyCertificateFilled className="logo-icon" />
            <Text strong className="logo-text">SecurePath</Text>
          </Flex>

          {/* Menu Section - Flex 1 diya hai taaki puri jagah le ske */}
          <div className="menu-wrapper">
            <Menu
              mode="horizontal"
              items={menuItems}
              disabledOverflow={true} // Ye line zaroori hai tabs dikhane ke liye
              className="navbar-menu"
            />
          </div>
        </div>
      </Header>
    );
  }

  /* ============== SIDE NAVBAR ============== */
  return (
    <Sider width={260} className="sidebar">
      <Flex align="center" gap={10} className="sidebar-logo">
        <SafetyCertificateFilled className="logo-icon" />
        <Text strong className="logo-text sidebar-text">SecurePath</Text>
      </Flex>
      <Menu
        theme="dark"
        mode="inline"
        className="side-menu-custom"
        items={menuItems}
        onClick={({ key }) => navigate(`/${key}`)}
      />
    </Sider>
  );
};

export default Navbar;
// import React from "react";
// import { Layout, Menu, Flex, Dropdown } from "antd";
// import {
//   HomeOutlined,
//   ReloadOutlined,
//   GlobalOutlined,
//   TeamOutlined,
//   FileTextOutlined,
//   UserAddOutlined,
//   FileProtectOutlined,
//   LogoutOutlined,
//   EllipsisOutlined
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";

// import spLogo from "../../assets/splogo.png";
// import spText from "../../assets/securpathsolution.png";

// const { Header, Sider } = Layout;
// const Navbar = ({ variant = "top", isLoggedIn = true }) => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { key: "home", icon: <HomeOutlined />, label: "Home" },
//     { key: "refresh", icon: <ReloadOutlined />, label: "Refresh" },
//     // Key ko simple rakhein navigation ke liye
//     { key: "change-password", icon: <FileTextOutlined />, label: "Change Password" },
//     { key: "travel", icon: <GlobalOutlined />, label: "Travel" },
//     { key: "underwriting", icon: <FileProtectOutlined />, label: "Underwriting" },
//     { key: "users", icon: <TeamOutlined />, label: "Users" },
//     { key: "reports", icon: <FileTextOutlined />, label: "Reports" },
//     { key: "agent", icon: <UserAddOutlined />, label: "Agents" },
//     { key: "policy", icon: <FileTextOutlined />, label: "Policy" },
//   ];

//   // Logic to separate items for Top Navbar
//   // Top items ab 5 kar diye taake Change Password oper hi dikhe
//   const topItems = menuItems.slice(0, 5); 
//   const moreItems = menuItems.slice(5);

//   const moreMenu = {
//     items: moreItems.map(item => ({
//       ...item,
//       onClick: () => navigate(`/${item.key}`)
//     }))
//   };

//   if (variant === "top") {
//     return (
//       <Header className="navbar-header">
//         <div className="navbar-container">
//           <Flex align="center" className="logo-wrap" onClick={() => navigate("/")}>
//             <img src={spLogo} alt="Logo" className="brand-icon" />
//             <img src={spText} alt="SecurePath" className="brand-text" />
//           </Flex>

//           <div className="menu-wrapper">
//             <Menu mode="horizontal" className="navbar-menu" disabledOverflow>
//               {topItems.map(item => (
//                 <Menu.Item 
//                   key={item.key} 
//                   icon={item.icon} 
//                   onClick={() => navigate(`/${item.key}`)} // Yeh /change-password par le jayega
//                 >
//                   {item.label}
//                 </Menu.Item>
//               ))}

//               {moreItems.length > 0 && (
//                 <Dropdown menu={moreMenu} trigger={['hover']}>
//                   <Menu.Item key="more" icon={<EllipsisOutlined />}>
//                     More
//                   </Menu.Item>
//                 </Dropdown>
//               )}

//               <Menu.Item 
//                 key="logout" 
//                 icon={<LogoutOutlined />} 
//                 className="logout-item"
//                 onClick={() => navigate("/logout")}
//               >
//                 Logout
//               </Menu.Item>
//             </Menu>
//           </div>
//         </div>
//       </Header>
//     );
//   }

//   // SIDEBAR (Mobile/Admin View)
//   return (
//     <Sider width={280} className="sidebar" breakpoint="lg" collapsedWidth="0">
//       <div className="sidebar-logo">
//         <img src={spLogo} alt="Logo" className="brand-icon" />
//         <img src={spText} alt="SecurePath" className="brand-text" style={{ filter: 'brightness(0) invert(1)' }} />
//       </div>
//       <Menu
//         theme="dark"
//         mode="inline"
//         className="side-menu-custom"
//         // Sidebar mein click karne par bhi navigation chalegi
//         items={menuItems.map(item => ({
//           ...item, 
//           onClick: () => navigate(`/${item.key}`)
//         }))}
//       />
//     </Sider>
//   );
// };

// export default Navbar;

import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import {
  HomeOutlined,
  ReloadOutlined,
  GlobalOutlined,
  TeamOutlined,
  FileTextOutlined,
  UserAddOutlined,
  FileProtectOutlined,
  LogoutOutlined,
  EllipsisOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import spLogo from "../../assets/splogo.png";
import spText from "../../assets/securpathsolution.png";
import "./Navbar.css";

const { Header, Sider } = Layout;

const Navbar = ({ variant = "top", onMenuClick }) => {
  const navigate = useNavigate();

  // ================= Menu Items =================
  const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "Home" },
    { key: "refresh", icon: <ReloadOutlined />, label: "Refresh" },
    { key: "change-password", icon: <FileTextOutlined />, label: "Change Password" },
    { key: "travel", icon: <GlobalOutlined />, label: "Travel" },
    { key: "underwriting", icon: <FileProtectOutlined />, label: "Underwriting" },
    { key: "users", icon: <TeamOutlined />, label: "Users" },
    { key: "reports", icon: <FileTextOutlined />, label: "Reports" },
    { key: "agent", icon: <UserAddOutlined />, label: "Agents" },
    { key: "policy", icon: <FileTextOutlined />, label: "Policy" },
  ];

  // Top Navbar: show first 5 items + "More" dropdown for the rest
  const topItems = menuItems.slice(0, 5);
  const moreItems = menuItems.slice(5);

  const moreMenu = {
    items: moreItems.map(item => ({
      key: item.key,
      label: item.label,
      onClick: () => navigate(`/${item.key}`),
    })),
  };

  // ================= TOP NAVBAR =================
  if (variant === "top") {
    return (
      <Header className="navbar-header">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-wrap" onClick={() => navigate("/")}>
            <img src={spLogo} alt="Logo" className="brand-icon" />
            <img src={spText} alt="SecurePath" className="brand-text" />
          </div>

          {/* Menu */}
          <div className="menu-wrapper">
            <Menu mode="horizontal" className="navbar-menu" disabledOverflow>
              {topItems.map(item => (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  onClick={() => navigate(`/${item.key}`)}
                >
                  {item.label}
                </Menu.Item>
              ))}

              {moreItems.length > 0 && (
                <Dropdown menu={moreMenu} trigger={["hover"]}>
                  <Menu.Item key="more" icon={<EllipsisOutlined />}>
                    More
                  </Menu.Item>
                </Dropdown>
              )}

              <Menu.Item
                key="logout"
                icon={<LogoutOutlined />}
                className="logout-item"
                onClick={() => navigate("/logout")}
              >
                Logout
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Header>
    );
  }

  // ================= SIDEBAR =================
  return (
    <Sider width={280} className="sidebar" breakpoint="lg" collapsedWidth="0">
      <div className="sidebar-logo">
        <img src={spLogo} alt="Logo" className="brand-icon" />
        <img
          src={spText}
          alt="SecurePath"
          className="brand-text"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        items={menuItems.map(item => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
          onClick: () => {
            if (onMenuClick) onMenuClick(item.key); // call parent Dashboard
          },
        }))}
      />
    </Sider>
  );
};

export default Navbar;

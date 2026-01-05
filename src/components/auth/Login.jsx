// import React from "react";
// import { Form, Input, Button, Typography, ConfigProvider, Card, message } from "antd"; // message add kiya
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom"; // Navigation ke liye import
// import "./Login.css";

// const { Title, Text } = Typography;

// const Login = () => {
//   const navigate = useNavigate(); // Hook initialize kiya

//   // Ye function tab chalega jab saare fields valid honge
//   const onFinish = (values) => {
//     console.log("Success:", values);
    
//     // Yahan aap API call kar sakte hain. Filhal direct redirect:
//     message.success("Login Successful!"); 
//     navigate("/dashboard"); // Dashboard ka path yahan likhein
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorPrimary: "#13c2c2",
//           borderRadius: 8,
//         },
//       }}
//     >
//       <div className="main-wrapper">
//         <Card bordered={false} className="login-card">
//           <div className="card-flex-container">
            
//             {/* Left Panel (Same as before) */}
//             <div className="left-panel">
//               <div className="image-overlay" />
//               <div className="left-panel-content">
//                 <Title className="hero-title">
//                   SECURE YOUR <br /> JOURNEY
//                 </Title>
//                 <Text className="hero-subtitle">Travel Insurance Simplified.</Text>
//                 <div className="accent-line" />
//               </div>
//             </div>

//             {/* Right Panel */}
//             <div className="right-panel">
//               <div className="form-header">
//                 <Title level={3} className="welcome-text">Welcome Back</Title>
//                 <Text className="sub-text">Login with your credentials</Text>
//               </div>

//               {/* Added onFinish prop here */}
//               <Form 
//                 layout="vertical" 
//                 size="large" 
//                 onFinish={onFinish}
//               >
//                 <Form.Item 
//                   label={<Text strong className="label-text">Username</Text>} 
//                   name="username"
//                   rules={[{ required: true, message: 'Please input your username!' }]} // Validation
//                 >
//                   <Input 
//                     prefix={<UserOutlined className="input-icon" />} 
//                     placeholder="Username" 
//                   />
//                 </Form.Item>

//                 <Form.Item 
//                   label={<Text strong className="label-text">Password</Text>} 
//                   name="password"
//                   rules={[{ required: true, message: 'Please input your password!' }]} // Validation
//                 >
//                   <Input.Password 
//                     prefix={<LockOutlined className="input-icon" />} 
//                     placeholder="Password" 
//                   />
//                 </Form.Item>

//                 <Form.Item>
//                   {/* htmlType="submit" hona zaroori hai */}
//                   <Button type="primary" block className="login-btn" htmlType="submit">
//                     Login In
//                   </Button>
//                 </Form.Item>
//               </Form>

//               <div className="copyright-container">
//                 <Text className="copyright-text" style={{ fontSize: '12px', color: '#bfbfbf' }}>
//                   © {new Date().getFullYear()} <span style={{ fontWeight: 600, color: '#595959' }}>SecurePathSolution</span>
//                 </Text>
//               </div>
//             </div>

//           </div>
//         </Card>
//       </div>
//     </ConfigProvider>
//   );
// };

// export default Login;
import React from "react";
import { Form, Input, Button, Typography, ConfigProvider, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login Success:", values);
    message.success("Login Successful!");
    navigate("/dashboard");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#13c2c2",
          borderRadius: 8,
        },
      }}
    >
      <div className="main-wrapper">
        <Card bordered={false} className="login-card">
          <div className="card-flex-container">
            {/* Left Panel */}
            <div className="left-panel">
              <div className="image-overlay" />
              <div className="left-panel-content">
                <Title className="hero-title">
                  SECURE YOUR <br /> JOURNEY
                </Title>
                <Text className="hero-subtitle">Travel Insurance Simplified.</Text>
                <div className="accent-line" />
              </div>
            </div>

            {/* Right Panel */}
            <div className="right-panel">
              <div className="form-header">
                <Title level={3} className="welcome-text">Welcome Back</Title>
                <Text className="sub-text">Login with your credentials</Text>
              </div>

              <Form layout="vertical" size="large" onFinish={onFinish}>
                <Form.Item
                  label={<Text strong className="label-text">Username</Text>}
                  name="username"
                  rules={[{ required: true, message: "Please input your username!" }]}
                >
                  <Input prefix={<UserOutlined className="input-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                  label={<Text strong className="label-text">Password</Text>}
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password prefix={<LockOutlined className="input-icon" />} placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" block className="login-btn" htmlType="submit">
                    Login In
                  </Button>
                </Form.Item>
              </Form>

              {/* COPYRIGHT */}
              <div className="copyright-container">
                <Text className="copyright-text" style={{ fontSize: "12px", color: "#bfbfbf" }}>
                  © {new Date().getFullYear()} <span style={{ fontWeight: 600, color: "#595959" }}>SecurePathSolution</span>
                </Text>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default Login;

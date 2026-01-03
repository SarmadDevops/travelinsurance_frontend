import React from 'react';
import { 
  Form, Input, Button, Typography, ConfigProvider, 
  Flex, Layout, Menu, Card 
} from 'antd';
import { 
  UserOutlined, LockOutlined, SafetyCertificateFilled, 
  TwitterOutlined, InstagramOutlined, LinkedinOutlined, KeyOutlined 
} from '@ant-design/icons';
import './Login.css'; 

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const TravelApp = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#13c2c2',
          borderRadius: 10,
        },
      }}
    >
      <div className="main-wrapper">
        
        {/* Navbar */}
        <Header className="navbar-header">
          <Flex align="center" gap={10}>
            <SafetyCertificateFilled className="logo-icon" />
            <Text strong className="logo-text">SecurePath</Text>
          </Flex>
          <div style={{ flex: 1 }} />
          <Menu
            mode="horizontal"
            selectable={false}
            className="navbar-menu"
            items={[
              { key: '1', label: 'Home' },
              { key: '2', label: 'Plans' },
              { key: '4', label: <span className="change-pass-link"><KeyOutlined /> Change Password</span> },
              { key: '5', label: <Button type="primary" size="small">Login</Button> },
            ]}
          />
        </Header>

        {/* Content Area */}
        <Content className="main-content">
          <Card bordered={false} className="login-card">
            <div className="card-flex-container">
              
              {/* Left Side: Hero Image Section */}
              <div className="left-panel">
                <div className="image-overlay" />
                <div className="left-panel-content">
                  <Title level={2} className="hero-title">SECURE YOUR <br /> JOURNEY</Title>
                  <Text className="hero-subtitle">Travel Insurance Simplified.</Text>
                  <div className="accent-line" />
                </div>
              </div>

              {/* Right Side: Login Form Section */}
              <div className="right-panel">
                <div className="form-wrapper">
                  <div className="form-header">
                    <Title level={4} className="welcome-text">Welcome Back</Title>
                    <Text type="secondary" className="sub-text">Login with your credentials</Text>
                  </div>

                  <Form layout="vertical" size="middle">
                    <Form.Item 
                      label={<Text strong className="label-text">Username</Text>} 
                      name="username" 
                      className="form-item"
                    >
                      <Input prefix={<UserOutlined className="input-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item 
                      label={<Text strong className="label-text">Password</Text>} 
                      name="password" 
                      className="form-item-last"
                    >
                      <Input.Password prefix={<LockOutlined className="input-icon" />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item className="btn-item">
                      <Button type="primary" block className="login-btn">
                        Login In
                      </Button>
                    </Form.Item>
                  </Form>
                </div>

                {/* Form End Copyright Section */}
                <div className="copyright-container">
                  <Text className="copyright-text">
                    © {new Date().getFullYear()} <span className="brand-name">SecurePathSolution</span>
                  </Text>
                </div>
              </div>

            </div>
          </Card>
        </Content>

      </div>
    </ConfigProvider>
  );
};

export default TravelApp;
import React from "react";
import { Row, Col, Input, Button, Typography, Space } from "antd";
import { SafetyCertificateOutlined, SyncOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./RefreshBalance.css";

const { Title, Text } = Typography;

const RefreshBalance = () => {
  return (
    <div className="corporate-refresh-container">
      {/* 1. Slim & Professional Welcome Header */}
      <div className="corporate-header">
        <Space size="large">
          <SafetyCertificateOutlined className="header-icon" />
          <div>
            <Title level={4} className="m-0 text-white">System Balance Dashboard</Title>
            <Text className="text-white-light">Welcome back, Muhammad Hamza Shahid</Text>
          </div>
        </Space>
      </div>

      <div className="corporate-body">
        {/* 2. Horizontal Data Strip (Clean & Direct) */}
        <div className="data-strip">
          <Row gutter={0}>
            <Col span={6} className="data-box border-right">
              <Text className="label">CREDIT LIMIT</Text>
              <div className="value blue-text">300,000 <small>PKR</small></div>
            </Col>
            <Col span={6} className="data-box border-right">
              <Text className="label">TRANSFER BALANCE</Text>
              <div className="value">0</div>
            </Col>
            <Col span={6} className="data-box border-right">
              <Text className="label">ISSUED POLICIES</Text>
              <div className="value">11,500</div>
            </Col>
            <Col span={6} className="data-box">
              <Text className="label">REMAINING BALANCE</Text>
              <div className="value orange-text">288,500 <small>PKR</small></div>
            </Col>
          </Row>
        </div>

        {/* 3. Action Section (Minimalist) */}
        <div className="action-section-v2">
          <Row align="middle" gutter={40}>
            <Col flex="auto">
               <Title level={5} className="m-0">Instant Balance Synchronization</Title>
               <Text type="secondary">Update your wallet balance with your latest credit adjustments.</Text>
            </Col>
            <Col>
              <Space>
                <Input 
                  placeholder="Enter amount" 
                  className="corp-input" 
                  suffix="PKR"
                />
                <Button type="primary" className="corp-btn" icon={<SyncOutlined />}>
                  REFRESH BALANCE
                </Button>
              </Space>
            </Col>
          </Row>
        </div>

        {/* 4. Details Container */}
        <div className="details-container-v2">
           <div className="details-tab">
              <ArrowRightOutlined /> Policy Payment Details
           </div>
           <div className="details-content">
              <div className="placeholder-text">Recent transaction records will appear here...</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RefreshBalance;
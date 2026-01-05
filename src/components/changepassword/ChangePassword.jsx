import React from "react";
import { Form, Input, Button, Typography, message, Card, Space } from "antd";
import { LockOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // 1. Navigate import kiya
import "./ChangePassword.css";
import Navbar from "../navbar/Navbar";

const { Title, Text } = Typography;

const ChangePassword = () => {
  const navigate = useNavigate(); // 2. Hook initialize kiya
  const [form] = Form.useForm();

  const handleChangePasswordSubmit = (values) => {
    console.log("Values:", values);
    message.success("Password changed successfully!");
    form.resetFields();
    // Optional: Password change ke baad bhi login par bhej sakte hain
    // navigate("/login"); 
  };

  return (
    <div className="change-password-page">
      <Navbar variant="top" />
      
      <div className="change-password-container">
        <Card className="change-password-card" bordered={false}>
          <Space direction="vertical" size="small" style={{ textAlign: 'center', width: '100%', marginBottom: 24 }}>
            <div className="lock-icon-wrapper">
              <LockOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
            </div>
            <Title level={3} style={{ margin: 0 }}>Update Password</Title>
            <Text type="secondary">Ensure your account is using a long, random password to stay secure.</Text>
          </Space>

          <Form 
            form={form}
            layout="vertical" 
            onFinish={handleChangePasswordSubmit}
            requiredMark={false}
          >
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[{ required: true, message: "Enter your current password" }]}
            >
              <Input.Password prefix={<LockOutlined className="form-icon" />} placeholder="••••••••" />
            </Form.Item>

            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Enter a new password" },
                { min: 6, message: "Password must be at least 6 characters" }
              ]}
            >
              <Input.Password prefix={<LockOutlined className="form-icon" />} placeholder="••••••••" />
            </Form.Item>

            <Form.Item
              label="Confirm New Password"
              name="confirmPassword"
              dependencies={['newPassword']}
              rules={[
                { required: true, message: "Confirm your new password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined className="form-icon" />} placeholder="••••••••" />
            </Form.Item>

            <Form.Item style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" block size="large" className="submit-btn">
                Update Password
              </Button>
            </Form.Item>

            {/* 3. onClick par navigate use kiya */}
            <Button 
              type="link" 
              block 
              icon={<ArrowLeftOutlined />} 
              onClick={() => navigate("/login")} 
              className="back-btn"
            >
              Back to Login
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
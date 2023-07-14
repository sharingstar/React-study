"use client";
import React from "react";
import { useState } from "react";
import { Button, Divider, Modal, Checkbox, Form, Input } from "antd";
export default function Dialog() {
  // 弹框
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 表单
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        新增学生信息
      </Button>
      <Modal
        title="增加学生信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Submit
            </Button>,
          ]}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="Age"
            rules={[{ required: true, message: "Please input your Age!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tags"
            name="Tags"
            rules={[{ required: true, message: "Please input your Tags!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Space, Table, Tag, Button, Divider, Modal } from "antd";
import Dialog from "./compoments/Dialog";
export default function Home() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="dashed" onClick={() => handleEdit(record.id)}>
            编辑
          </Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState();
  useEffect(() => {
    async function getUserData() {
      const response = await fetch("http://localhost:9000/user");
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    getUserData();
  }, []);

  async function handleDelete(id) {
    console.log(id);
    await fetch(`http://localhost:9000/user/${id}`, {
      method: "DELETE",
    });
    const response = await fetch("http://localhost:9000/user");
    const data = await response.json();
    setData(data);
  }

  return (
    <div>
      <Divider />
      <Dialog />
      <Divider />
      <Table columns={columns} dataSource={data} rowKey = "id"/>
    </div>
  );
}

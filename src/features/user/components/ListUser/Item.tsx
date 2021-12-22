import React, { memo } from 'react';
import { Col, Card, Typography, Row } from 'antd';
import {
  EditOutlined,
  DeleteFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

const { Text, Title, Link } = Typography;

interface ListUserItemProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

function Item({ name, username, email, phone, website }: ListUserItemProps) {
  return (
    <Col xs={24} sm={12} xl={6} data-testid="user-item">
      <Card
        style={{ width: '100%' }}
        cover={
          <img
            style={{ background: '#eee' }}
            alt={name}
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
          />
        }
        actions={[
          <HeartOutlined key="like" style={{ color: '#ff4d4f' }} />,
          <EditOutlined key="edit" />,
          <DeleteFilled key="delete" />,
        ]}
      >
        <Title level={5}>{name}</Title>
        <Row align="middle" style={{ columnGap: 10, marginBottom: 6 }}>
          <MailOutlined style={{ fontSize: 20 }} />
          <Text>{email}</Text>
        </Row>

        <Row align="middle" style={{ columnGap: 10, marginBottom: 6 }}>
          <PhoneOutlined style={{ fontSize: 20 }} />
          <Text>{phone}</Text>
        </Row>
        <Row align="middle" style={{ columnGap: 10, marginBottom: 6 }}>
          <GlobalOutlined style={{ fontSize: 20 }} />
          <Link href={`https://${website}`}>{`https://${website}`}</Link>
        </Row>
      </Card>
    </Col>
  );
}

export default memo(Item);

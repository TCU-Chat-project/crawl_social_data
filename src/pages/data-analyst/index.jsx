import React from 'react';
import AppLayout from '@/components/Layout';
import { Card, Col, Row } from 'antd';
import PercentChart from '@/components/Charts/PercentChart';
import QuantityChart from '@/components/Charts/QuantityChart';
const DataAnalyst = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Card title" bordered={true} size='small'>
            <PercentChart />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={true} size='small'>
            <PercentChart />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={true} size='small'>
            <PercentChart />
          </Card>
        </Col>
        <Col flex="auto">
          <Card title="Card title" bordered={true} size='small'>
            <QuantityChart />
          </Card>
        </Col>
      </Row>
    </>
  );
};

DataAnalyst.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default DataAnalyst;

import React, { useState } from 'react';
import { Row, Col } from 'antd';
import MainTable from './components/MainTable';
import LineChart from './components/LineChart';
import ChatApp from './components/ChatApp';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleRowClick = (year: number) => {
    setSelectedYear(year);
  };

  const data = [
    { year: 2020, jobs: 1200, salary: 80000 },
    { year: 2021, jobs: 1500, salary: 85000 },
    // Add more data here
  ];

  const aggregatedData = [
    { jobTitle: 'Data Scientist', jobs: 300 },
    { jobTitle: 'ML Engineer', jobs: 400 },
    // Add more aggregated data based on selected year
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <MainTable onRowClick={handleRowClick} />
        </Col>
        <Col span={12}>
          {selectedYear && <LineChart data={data.filter(item => item.year === selectedYear)} />}
          {selectedYear && <Table columns={[
            { title: 'Job Title', dataIndex: 'jobTitle', key: 'jobTitle' },
            { title: 'Number of Jobs', dataIndex: 'jobs', key: 'jobs' }
          ]} dataSource={aggregatedData} rowKey="jobTitle" />}
        </Col>
      </Row>
      <ChatApp />
    </div>
  );
};

export default App;

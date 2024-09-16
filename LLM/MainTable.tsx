import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Year', dataIndex: 'year', key: 'year' },
  { title: 'Number of Jobs', dataIndex: 'jobs', key: 'jobs' },
  { title: 'Average Salary (USD)', dataIndex: 'salary', key: 'salary' },
];

const data = [
  { year: 2020, jobs: 1200, salary: 80000 },
  { year: 2021, jobs: 1500, salary: 85000 },
  // Add more data here
];

const MainTable: React.FC<{ onRowClick: (year: number) => void }> = ({ onRowClick }) => (
  <Table 
    columns={columns} 
    dataSource={data} 
    rowKey="year" 
    onRow={(record) => ({
      onClick: () => onRowClick(record.year),
    })}
  />
);

export default MainTable;

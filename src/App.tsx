import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'; // Import default Ant Design styles

// Define your columns
const columns = [
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    sorter: (a: any, b: any) => a.year - b.year,
  },
  {
    title: 'Number of Total Jobs',
    dataIndex: 'totalJobs',
    key: 'totalJobs',
    sorter: (a: any, b: any) => a.totalJobs - b.totalJobs,
  },
  {
    title: 'Average Salary (USD)',
    dataIndex: 'avgSalary',
    key: 'avgSalary',
    sorter: (a: any, b: any) => a.avgSalary - b.avgSalary,
  },
];

// Define your data
const salaryData = [
  { year: 2020, totalJobs: 1000, avgSalary: 120000 },
  { year: 2021, totalJobs: 1100, avgSalary: 125000 },
  { year: 2022, totalJobs: 1200, avgSalary: 130000 },
  { year: 2023, totalJobs: 1300, avgSalary: 135000 },
  { year: 2024, totalJobs: 1400, avgSalary: 140000 },
];

// Main App component
const App: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Table
        columns={columns}
        dataSource={salaryData}
        rowKey="year"
      />
    </div>
  );
};

export default App;

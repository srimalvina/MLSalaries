import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'; // Ant Design CSS
import data from './data.json'; // Ensure this file exists in the src directory

const SalaryTable: React.FC = () => {
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
      dataIndex: 'averageSalary',
      key: 'averageSalary',
      sorter: (a: any, b: any) => a.averageSalary - b.averageSalary,
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey="year"
    />
  );
};

export default SalaryTable;

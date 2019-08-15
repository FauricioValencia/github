import React from 'react';
import { Table } from 'antd';

export function TableRepos({ repos = [] }) {
  const columns = [
    {
      title: 'Lenguaje',
      dataIndex: 'language',
      sorter: (a, b) => (a.language < b.language ? 1 : -1),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Branch',
      dataIndex: 'default_branch',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.default_branch - b.default_branch
    },
    {
      title: 'Url',
      dataIndex: 'url',
      sorter: (a, b) => a.url.length - b.url.length,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      sorter: (a, b) => a.name - b.name,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      sorter: (a, b) => a.descripcion - b.descripcion,
      sortDirections: ['descend', 'ascend']
    }
  ];
  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  return (
    <Table
      pagination={{ defaultPageSize: 5 }}
      columns={columns}
      dataSource={repos}
      onChange={onChange}
      size={'middle'}
    />
  );
}

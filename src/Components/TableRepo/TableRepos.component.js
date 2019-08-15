import React from 'react';
import { Table } from 'antd';


export function TableRepos({repos=[]}) {
    
  const columns = [
    {
      title: 'Lenguaje',
      dataIndex: 'language',
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Branch',
      dataIndex: 'default_branch',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Url',
      dataIndex: 'url',
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
    function onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
      }
      
    return (
        <Table columns={columns} dataSource={repos} onChange={onChange} />
    )
}

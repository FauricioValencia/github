import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';

/**
 * Table of respositories, where you would organize alphabetically
 * @param  {Array} repos array of repositories
 * @return {Component}      Table of repositories
 */

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
      sorter: (a, b) => (a.default_branch < b.default_branch ? 1 : -1)
    },
    {
      title: 'Url',
      dataIndex: 'url',
      sorter: (a, b) => (a.url < b.url ? 1 : -1),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      sorter: (a, b) => (a.name < b.name ? 1 : -1),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      sorter: (a, b) => (a.description < b.description ? 1 : -1),
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
TableRepos.propTypes = {
  repos: PropTypes.array
};

import React  from 'react'
import {DeleteOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'Actions',
        dataIndex: '',
        key: 'x',
        render: () => <div className='flex m-2 justify-around'>
            <Button type="primary" className='rounded'>Change</Button>
            <Button className='rounded'>View</Button>
            <Button type="primary" danger className='rounded'> <DeleteOutlined /> Delete</Button>
        </div>,

    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

const Users = () => {

    return (
        <Table
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}

            columns={columns} dataSource={data}  />
    )
}

export default Users
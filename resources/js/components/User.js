import React, {useEffect, useState} from "react";
import {Table, Divider, Tag} from 'antd';
import axios from "axios";
import { Button } from 'react-bootstrap';

function User() {
    const [user,setUser] = useState({});
    const fetctUsers = () => {
        return axios.get("http://localhost:8000/api/users")
            .then(response => {
                setUser(response);
            });
    };
    useEffect(()=>{
        fetctUsers();
    },[]);

    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (

        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default User;

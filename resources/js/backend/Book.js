import React, {useEffect, useState} from "react";
import AdminPage from "./AdminPage";
import {Card, Button, Icon, Table, Avatar, Modal, Input} from "antd";
import {Formik, Form} from "formik";
import axios from 'axios';

const CARD = {
    minHeight: "100vh"
};

const ModelConponent = props => {
    const {visible, setVisible} = props;

    return (
        <Modal
            title={"Create Book"}
            visible={visible}
            onCancel={setVisible}
            destroyOnClose={true}
        >
            <Formik
                initialValues={{
                    title: "",
                    cover: "",
                    price: "",
                    author: ""
                }}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {props => {
                    const {} = props
                }}
            </Formik>
            <form>
                <span>
                    Title :
                    <Input/>
                </span>

                <span>
                    Cover :
                    <Input/>
                </span>

                <span>
                    Price :
                    <Input/>
                </span>

                <span>
                    Author :
                    <Input/>
                </span>
            </form>
        </Modal>
    );
};

const Header = () => {
    const [state, setState] = useState({
        visible: false
    });
    const showModel = () => setState({visible: true});
    const closeModel = () => setState({visible: false});
    return (
        <React.Fragment>
            <Button type="primary" onClick={showModel}>
                <Icon type={"plus"}/>
                Create
            </Button>
            <span style={{marginRight: 10}}/>
            <Button>
                <Icon type={"plus"}/>
                Quick
            </Button>
            <ModelConponent visible={state.visible} setVisible={closeModel}/>
        </React.Fragment>
    );
};

const columns = [
    {
        key: "id",
        title: "#",
        dataIndex: "id",
        render: (_, __, index) => {
            return index + 1;
        }
    },
    {
        key: "title",
        title: "Title",
        dataIndex: "title"
    },
    {
        key: "cover",
        title: "Cover",
        dataIndex: "cover",
        render: () => {
            return <Avatar icon="plus"/>;
        }
    },
    {
        key: "price",
        title: "Price",
        dataIndex: "price"
    },
    {
        key: "author",
        title: "Author",
        dataIndex: "author"
    },
    {
        key: "rate",
        title: "Rate",
        dataIndex: "rate"
    },
    {
        key: "action",
        title: "Action",
        dataIndex: "action"
    }
];

const dataSource = [];

for (let i = 0; i <= 100; i++) {
    dataSource.push({
        key: i,
        title: "War of king",
        cover: "",
        price: "$5.5",
        author: "Nouen Thary",
        rate: 4
    });
}

const TableConponent = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/books')
            .then((response) => response.json())
            .then(data => setState(data.data));
    },[state]);

    return <Table columns={columns} dataSource={state} rowKey={"id"}/>;
};

const Book = () => {
    return (
        <AdminPage>
            <Card style={CARD}>
                <Header/>
                <br/>
                <br/>
                <TableConponent/>
            </Card>
        </AdminPage>
    );
};

export default Book;

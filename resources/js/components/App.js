import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb} from "antd";
import 'antd/dist/antd.css';
import User from "./User";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from "./UserTable";
import {
    BrowserRouter, Router, Switch, Route, Link
} from "react-router-dom";
import Article from "./Article";

function App() {
    const {Header, Content, Footer} = Layout;
    return (
        <>
            <BrowserRouter>
                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">List</Menu.Item>
                            <Menu.Item key="3">App</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 50px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{background: '#fff', padding: 24, minHeight: 500}}>
                            <UserTable/>
                            <User/>
                            <Article/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App/>, document.getElementById('example'));
}

import React from 'react';
import {Breadcrumb, Layout, Menu} from "antd";
import {Link, withRouter} from 'react-router-dom';

const {Header, Content, Footer} = Layout;

const FrontLayout = (props) => {
    return (
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
                    <Menu.Item key="4"><Link to="/admin">Admin</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{background: '#fff', padding: 24, minHeight: 500}}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default withRouter(FrontLayout);


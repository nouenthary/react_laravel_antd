import React, { useState } from "react";
import { withRouter } from "react-router";
import { Layout, Menu, Icon } from "antd";
import "./index.css";

const { Header, Sider, Content } = Layout;

const AdminPage = props => {
    const [state, setState] = useState({
        collapsed: false
    });

    const toggle = () => {
        setState({
            collapsed: !state.collapsed
        });
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div className="logo" style={{ padding: 18, color: "#fff" }}>
                    Admin
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>Genres</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>Book</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>Author</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ paddingLeft: 24 }}
                >
                    <Icon
                        className="trigger"
                        type={state.collapsed ? "menu-unfold" : "menu-fold"}
                        onClick={toggle}
                    />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 10,
                        minHeight: 280,
                        height: "100vh"
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default withRouter(AdminPage);

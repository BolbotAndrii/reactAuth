import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const MainLayout = ({children}) => {
    return (
        <Layout className='w-full h-screen'>
            <Sider>
                <Sidebar />
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content className='p-8'>{children}</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>

    )
}

export default MainLayout;
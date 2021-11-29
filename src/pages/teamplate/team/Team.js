import React  from "react";
import { Layout, Row, Col } from 'antd';
import { Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;









const Team = () => {
    return(

        <div className="container-fluid">
            <div className="header">
                <div className="logo"></div>
                <Menu style={{background: "blue"}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">TeamUp</Menu.Item>
      
      </Menu>

            </div>
            <Sider width={200} className="site-layout-background">
        
      </Sider>

      <Content style={{ padding: '0 50px' }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          
            
          </Menu>
        </Sider>

        <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <h2>Team Leader</h2>

            <Row>
                <Col span={24}>
                    <h4 style={{color: "blue"}}>Team List</h4>
                </Col>
            </Row>
        </Content>
        
        <Row>
            <Col>Home / Team Admin </Col>
            </Row>
        
      </Layout>
    </Content>


        </div>


                  
    )
}

export default Team;
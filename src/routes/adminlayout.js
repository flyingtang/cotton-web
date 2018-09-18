import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, withRouter } from 'dva/router';
import Account from "./account"
import Article from "./article"
import Archive from "./archive"
import Category from "./category"

const { Header, Sider, Content } = Layout;




class AdminLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    
    return (
      <Layout className="adminLayout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['account']}>
            <Menu.Item key="account">
              <Icon type="user" />
              <span><Link to="/admin/account">用户管理</Link></span>
            </Menu.Item>
            <Menu.Item key="category">
              <Icon type="video-camera" />
              <span><Link to="/admin/category">文章分类</Link></span>
            </Menu.Item>
            <Menu.Item key="archive">
              <Icon type="upload" />
              <span><Link to="/admin/archive">文章归档</Link></span>
            </Menu.Item>
            <Menu.Item key="article">
              <Icon type="upload" />
              <span><Link to="/admin/article">文章管理</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Route exact path="/admin/account" component={Account} />
            <Route path="/admin/category" component={Category} />
            <Route path="/admin/archive" component={Archive} />
            <Route path="/admin/article" component={Article} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// function mapStateToProps(state) {
  
//     return state;
//   }
// export default withRouter(connect(mapStateToProps)(AdminLayout));
export default withRouter(connect()(AdminLayout));

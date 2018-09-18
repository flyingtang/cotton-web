import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

class Category extends React.Component {

    render(){
        return (
            <div>
                this is Category
            </div>
        )
    }
}

export default connect()(Category)
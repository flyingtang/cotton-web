import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

class Article extends React.Component {

    render(){
        return (
            <div>
                this is article
            </div>
        )
    }
}

export default connect()(Article)
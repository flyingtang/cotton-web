import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import * as services from "../services/login"
import { routerRedux } from 'dva/router';


const FormItem = Form.Item;
const key = "login"
class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }

      const res = await services.Login(values);
      if (res && res.message && res.token){
        localStorage.setItem("token", res.token)
        message.success(res.message)
        // 重定向到登录首页
        const url = "/admin/"
        this.props.dispatch({type: `${key}/redirect`, payload: {url}})
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className="loginForm">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          Or <a href="">注册</a>
        </FormItem>
      </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
};

function mapStateToProps(state) {
    console.log("mapStateToProps", state)
    return { login: state.login };
  }

export default connect(mapStateToProps)(Form.create()(LoginForm))



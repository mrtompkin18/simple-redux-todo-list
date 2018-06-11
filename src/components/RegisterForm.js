import React from 'react';
import { Form, Input, Button, Card, Radio, InputNumber, Col, Row } from 'antd';
// import moment from 'moment';
import 'antd/dist/antd.css';
import PersonalForm from '../containers/PersonalForm';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const formItemLayout = {
    labelCol: {
        sm: { span: 4 },
    },
    wrapperCol: {
        sm: { span: 20 },
    },
};

class RegisterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { getFieldValue, validateFields } = this.props.form
        validateFields((err) => {
            if (err === null) {
                this.setState({
                    fname: getFieldValue('fname'),
                    lname: getFieldValue('lname'),
                    gender: getFieldValue('gender'),
                    age: getFieldValue('age'),
                    tel: getFieldValue('tel'),
                    email: getFieldValue('email')
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <br />
                <Row gutter={30}>
                    <Col span="12">
                        <Card title="Register Form" >
                            <Form layout="horizontal" onSubmit={this.handleSubmit}>
                                <FormItem label="First name" {...formItemLayout}>
                                    {getFieldDecorator('fname', {
                                        rules: [{ required: true, message: 'Please input your first name!' }],
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="Last name" {...formItemLayout}>
                                    {getFieldDecorator('lname', {
                                        rules: [{ required: true, message: 'Please input your last name!' }],
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="Gender" {...formItemLayout}>
                                    {getFieldDecorator('gender', {
                                        rules: [{ required: true, message: 'Please choose your gender!' }],
                                    })(<RadioGroup>
                                        <Radio value="male">Male</Radio>
                                        <Radio value="female">Female</Radio>
                                    </RadioGroup>)}
                                </FormItem>
                                <FormItem label="Age" {...formItemLayout}>
                                    {getFieldDecorator('age')(<InputNumber min={0} />)}
                                </FormItem>
                                <FormItem label="Tel" {...formItemLayout}>
                                    {getFieldDecorator('tel')(<Input />)}
                                </FormItem>
                                <FormItem label="Email" {...formItemLayout}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please input your email!' }],
                                    })(<Input />)}
                                </FormItem>
                                <FormItem wrapperCol={{ span: 24, offset: 8 }}  >
                                    <Button type="primary" htmlType="submit"> Submit </Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </Col>
                    <Col span="12">
                        <PersonalForm person={this.state} />
                    </Col >
                </Row>
                <br />
            </div>
        )
    }
}

export default Form.create()(RegisterForm);
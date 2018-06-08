import React from 'react';
import { Form, Input, Card, } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        sm: { span: 4 },
    },
    wrapperCol: {
        sm: { span: 20 },
    },
};

class PersonalForm extends React.Component {
    render() {
        const { fname, lname, gender, age, tel, email } = this.props.person;
        return (
            <Card title="Personal Data" >
                <Form layout="horizontal">
                    <FormItem label="First name" {...formItemLayout}>
                        <Input value={fname} disabled={true} />
                    </FormItem>
                    <FormItem label="Last name" {...formItemLayout}>
                        <Input value={lname} disabled={true} />
                    </FormItem>
                    <FormItem label="Gender" {...formItemLayout}>
                        <Input value={gender} disabled={true} />
                    </FormItem>
                    <FormItem label="Age" {...formItemLayout}>
                        <Input value={age} disabled={true} />
                    </FormItem>
                    <FormItem label="Tel" {...formItemLayout}>
                        <Input value={tel} disabled={true} />
                    </FormItem>
                    <FormItem label="Email" {...formItemLayout}>
                        <Input value={email} disabled={true} />
                    </FormItem>
                </Form>
            </Card>
        )
    }
}
export default PersonalForm
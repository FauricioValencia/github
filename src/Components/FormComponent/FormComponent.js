import React from 'react'
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import classes from "./FormComponent.module.scss";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function FormComponent({form}, props) {
  console.log('props: ', props);
    const   handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
      const onChange=(date, dateString)=> {
        console.log(date, dateString);
      }
      const { getFieldDecorator } = form;

    return (
        <div className={classes.root}>
        <Form onSubmit={handleSubmit} className={classes.containerForm}>
        <Form.Item>
        {getFieldDecorator('names', {
            rules: [{ required: true, message: 'Porfavor ingresa los nombres' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Nombres"
              />
              )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('lastnames', {
            rules: [{ required: true, message: 'Porfavor ingresa los apellidos' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Apellidos"
              />
          )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('identification', {
            rules: [{ required: true, message: 'Porfavor ingresa la cédula' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Cedula"
              type=""
              />
              )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('date', {
            rules: [{ required: true, message: 'Porfavor ingresa la fecha de nacimiento' }],
          })(
            <DatePicker onChange={onChange} />

          )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Porfavor ingresa el correo electronico' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Correo electronico"
              />
          )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('userGithub', {
            rules: [{ required: true, message: 'Porfavor ingresa el usuario de github' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Usuario github candidato"
              />
          )}
              </Form.Item>
        <Form.Item className={classes.containerButton}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </div>
    )
}
export const WrappedFormComponent = Form.create({ name: 'Form_Component' })(FormComponent)
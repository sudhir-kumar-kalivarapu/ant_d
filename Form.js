import React from "react";
import { Form, Input , Cascader , Select , Checkbox , Button, Switch} from "antd";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
const { Option } = Select;

const RegisterForm = () =>{
    const [form] = Form.useForm();

    const residences =[
        {
           value:"moscow",
           label:"moscow",
        },

        {
            value:"india",
            label:"india",
        },

        {
            value:"newZealand",
            label:"newZealand",
        }

    ];

    const formItemLayout = {
        labelCol:{
            xs:{
                span:24
            },
            sm:{
                span:8
            }
        },
        wrapperCol:{
            xs:{
                span:24
            },
            sm:{
                span:16
            },
        },
    };

    const tailFormItemLayout = {
        wrapperCol:{
            xs:{
                span:24,
                offset:0
            },
            sm:{
                span:16,
                offset:8,
            },
        },
    };

    const prefix = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
            <Option value="91">+91</Option>
          </Select>
        </Form.Item>
      );

    /*const onFinish = () =>{};*/

    return(
        <Form {...formItemLayout} 
                 form={form} 
                 name="register" 
                 /*onFinish={onFinish}*/
                 scrollToFirstError
                 initialValues={{
                     residences:["india"],
                     prefix:["91"]
                 }}
                 >
            <Form.Item 
                name="email" 
                label="E-mail" 
                style={{width:"400px"}}
                rules={[
                    {
                        type:"email",
                        message:"Given input is not valid"
                    },
                    {
                        required:"true",
                        message:"please input you'r email"
                    }
                ]}>
            <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="password"
                style={{ width:"400px"}}
                hasFeedback
                rules={[
                    {
                        required:"true",
                        message:"enter your password"
                    }
                ]}>
            <Input.Password />
            </Form.Item>
            <Form.Item
                 name="confirm-password"
                 label="confirm-password"
                 dependencies={["password"]}
                 style={{ width: "400px"}}
                 hasFeedback
                 rules={[
                     {
                         required:true,
                         message:"re-enter your password"
                     },
                     ({getFieldValue})=>({
                         validator(_,value){
                             if(!value || getFieldValue("password")===value){
                               return Promise.resolve();
                             }
                             return Promise.reject(
                                 "Passwords doesn't match"
                             );
                         }
                     })
                 ]}>
                <Input.Password /> 
             </Form.Item>
                <Form.Item 
                 name="Nick-Name" 
                 label="Nick-Name" 
                 style={{width:"400px"}}
                 rules={[
                     {
                         required:true,
                         message:"Enter your nick name",
                     },
                 ]}>
            <Input />
            </Form.Item>
            <Form.Item
                 name="residences"
                 label="country"
                 style={{ width: "250px",marginLeft: "45px"}}
                 rules={[
                     {
                         required:true,
                         message:"select your country"
                        
                     }
                 ]}>

                 <Cascader options={residences} style={{ marginLeft: "5px"}}/>
            </Form.Item>
                <Form.Item
                label="gender"
                name="gender"
                style={{ width: "250px" ,marginLeft: "45px" }}
                rules={[
                    {
                        
                    }
                ]}
                >

                <Switch 
                
                checkedChildren="Male" unCheckedChildren="female" defaultChecked 
                />
                      <br />
                </Form.Item>



                <Form.Item
                  name="phone"
                  label="Phone Number"
                  style={{ width: "400px"}}
                  rules={[
                      {
                          required:true,
                          message:"enter your phone number"
                      }
                  ]}
                  >
             <Input
                   addonBefore={prefix}
                   style={{width: "100%"}}
                   />
             </Form.Item>
             <div style = {{ float:"left",width:"350px"}}>
             <Form.Item 
                    name="agreement"
                    valuePropName="checked"
                    {...tailFormItemLayout}
                    rules={[
                        {
                            required:true,
                            message:"please read the agreement"
                        }
                    ]}
             >
                 <Checkbox>
                     I have read the <a href="www.google.com">Agreement</a>
                 </Checkbox>

             </Form.Item>

             <Form.Item {...tailFormItemLayout}>
                 <Button type="primary" htmlType="submit">
                    Register
                 </Button>
             </Form.Item>
             </div>     
        </Form>
    );
};

export default RegisterForm
import React, { useState , useEffect } from 'react';
import logoFB from '../../../../Assets/Images/iconfb.svg'
import logoGG from '../../../../Assets/Images/icongg.svg'
import {
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Modal,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { useHistory } from 'react-router';
import $ from 'jquery'
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// change form
function changeForm(){
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
};


//  end change form
function Register() {
  const [form] = Form.useForm();
  const [fullName,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [avatar,setAvatar] = useState("");
  //register
  const [sdt,setSdt] = useState("");
  const [address,setAddress] = useState("");
  //authentication
  const [token,setToken] = useState("");
  const history = useHistory();
// form token
const [visible, setVisible] = React.useState(false);
const [confirmLoading, setConfirmLoading] = React.useState(false);

  useEffect(() => {
      if (localStorage.getItem('user-info')) {
          history.push("/client");
      }
      
  }, []);
  
// form token
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
     // Chọn OK và xác thực
      authen();
    }, 1000);
  };
  
  const handleCancel = () => {
       setVisible(false);
     };
//  end form token

// reset form
     function resetForm(){
          form.resetFields();
     }

//  Asset Token
     async function authen() {
          let code = {token};
          let result = await fetch('https://beonlinelibrary.herokuapp.com/users/verify-email', {
               method: 'POST',
               headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
               },
               body: JSON.stringify(code)
               });
               if (result.status===200) {
                    result = await result.json();
                    console.log(result);
                    if (result.code==="200") {
                         resetForm(); // reset form
                         setVisible(false); //đóng form 
                         message.success(result.message); // success từ message BE
                    }
                    else {
                         message.error(result.message); //  fail! từ message BE
                         setConfirmLoading(false);  // stop loading
                    }
               }
               else {
                    message.error('Mã xác thực không đúng');  // Add user fail! từ message BE
                    setConfirmLoading(false); // stop loading
               }
     }

//Login
          async function logIn(e) {
               e.preventDefault();
               let item = {email,password};
               let result = await fetch('https://beonlinelibrary.herokuapp.com/users/login', {
               method: 'POST',
               headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
               },
               body: JSON.stringify(item)
               });
                    // console.log(result);
                    if (result.status === 200 ){
                         // return res;
                         result = await result.json();
                         if (result.data[0].success === false) {
                              message.error(result.data[0].error);
                         }
                         else {
                              message.success('Đăng nhập thành công');
                              localStorage.setItem('user-info' , JSON.stringify(result));
                              history.push("/client");
                         }
                    }
          }

//Register
          async function register(e) {
               e.preventDefault();
               let item = {
                    'fullName': fullName,
                    'email': email,
                    'phone': Number(sdt),
                    'password': password,
                    'address': address,
                    'avatar': avatar,
                    'blockMail': false
               };
               console.log(avatar);
            
          }

 
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

//  test truoc khi xoa  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
     <>
     <div className="container">
           <div className="frame">
             <div className="nav">
                 <ul className="links">
                     <li className="signin-active" ><a className="btn" onClick={changeForm}>ĐĂNG NHẬP</a></li>
                     <li className="signup-inactive"><a className="btn" onClick={changeForm}>ĐĂNG KÝ </a></li>
                 </ul>
             </div>
             <div ng-app ng-init="checked = false" className="frame-child">
                    {/* Login */}
                    <form className="form-signin" >
                    <Form
                         {...formItemLayout}
                         form={form}
                         // className="form-signin"
                         name="login"
                         onSubmitCapture={logIn}
                         // onFinish={onFinish}
                         initialValues={{
                         prefix: '84',
                         }}
                         scrollToFirstError
                    >
                    
                         <Form.Item
                         name="email"
                         label="Email"
                         rules={[
                              {
                              type: 'email',
                              message: 'Địa chỉ Email không xác định!',
                              },
                              {
                              required: true,
                              message: 'Hãy nhập địa chỉ Email của bạn!',
                              },
                         ]}
                         >
                         <Input onChange={(e)=>setEmail(e.target.value)} />
                         </Form.Item>

                         <Form.Item
                         name="password"
                         label="Mật khẩu"
                         rules={[
                              {
                              required: true,
                              message: 'Hãy nhập mật khẩu của bạn!',
                              },
                         ]}
                         hasFeedback
                         >
                         <Input.Password onChange={(e)=>setPassword(e.target.value)} />
                         </Form.Item>

                         <Form.Item {...tailFormItemLayout}>
                         <Button type="primary" htmlType="submit" >
                              Đăng nhập
                         </Button>
                         </Form.Item>
    
                         <div>
                              <a href='#'>
                                   <div id='facebook' className='button'>Facebook
                                        <div className='cover facebook'>
                                   <img src={logoFB} alt=""/>
                                        </div>
                                   </div>
                              </a>
                         
                              <a href='#'>
                                   <div id='google' className='button'>Google+
                                        <div className='cover google'>
                                   <img src={logoGG} alt=""/>
                                        </div>
                                   </div>
                              </a>
                              {/* Quen mat khau */}
                              <div className="forgot">
                              <a href="#">Quên mật khẩu?</a>
                              </div>
                         </div>
                    </Form>
                    </form>


                         {/* Register */}
                    <form className="form-signup"  name="form">
                         <Form
                         {...formItemLayout}
                         form={form}
                         // className="form-signup"
                         name="register"
                         onSubmitCapture={register}
                         //  onFinish={onFinish}
                         initialValues={{
                         residence: ['zhejiang', 'hangzhou', 'xihu'],
                         prefix: '84',
                         }}
                         scrollToFirstError
                    >
                    <Form.Item
                    name="nickname_dk"
                    label="Tên đầy đủ"
                    tooltip="Bạn muốn người khác gọi bạn là gì?"
                    rules={[
                         {
                         required: true,
                         message: 'Hãy nhập tên đầy đủ của bạn!',
                         whitespace: true,
                         },
                    ]}
                    >
                    <Input onChange={(e)=>setFullname(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                    name="emai_dk"
                    label="Email"
                    rules={[
                         {
                         type: 'email',
                         message: 'Địa chỉ Email không xác định!',
                         },
                         {
                         required: true,
                         message: 'Hãy nhập địa chỉ Email của bạn!',
                         },
                    ]}
                    >
                    <Input onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                    name="phone_dk"
                    label="Số điện thoại"
                    rules={[
                         {
                         required: true,
                         message: 'Hãy nhập số điện thoại của bạn!',
                         },
                    ]}
                    >
                    <Input
                         addonBefore={prefixSelector}
                         typeof="number"
                         onChange={(e)=>setSdt(e.target.value)}
                         style={{
                         width: '100%',
                         }}
                    />
                    </Form.Item>

                    <Form.Item
                    name="password_dk"
                    label="Mật khẩu"
                    rules={[
                         {
                         required: true,
                         message: 'Hãy nhập mật khẩu của bạn!',
                         },
                    ]}
                    hasFeedback
                    >
                    <Input.Password onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                    name="confirm_dk"
                    label="Nhập lại mật khẩu"
                    dependencies={['password_dk']}
                    hasFeedback
                    rules={[
                         {
                         required: true,
                         message: 'Nhập lại mật khẩu của bạn!',
                         },
                         ({ getFieldValue }) => ({
                         validator(_, value) {
                         if (!value || getFieldValue('password_dk') === value) {
                              return Promise.resolve();
                         }

                         return Promise.reject(new Error('Không khớp vui lòng nhập lại!'));
                         },
                         }),
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>

                    <Form.Item name="address_dk" label="Địa chỉ" rules={[{ required: true }]}>
                    <Input onChange={(e)=>setAddress(e.target.value)} />
                    </Form.Item>     
                 
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                         Đăng ký
                    </Button>
                    <Button onClick={() => {form.resetFields();}}  style={{ margin: '0 8px' }} >
                         Đặt lại
                    </Button>
                    </Form.Item>
                    <Modal
                    title="Vui lòng kiểm tra Email và nhập mã xác thực"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    >
                    <Input placeholder="TOKEN"  onChange={(e)=>setToken(e.target.value)} />
                    </Modal>
                    </Form>
                    
               </form>
               </div>
          </div>
         </div>
     </>
  );
};

export default Register;
import { Button, Form, Input, message, Modal, Select } from "antd";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import userApi from "../../../../api/userApi";
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
function changeForm() {
  $(".form-signin").toggleClass("form-signin-left");
  $(".form-signup").toggleClass("form-signup-left");
  $(".frame").toggleClass("frame-long");
  $(".signup-inactive").toggleClass("signup-active");
  $(".signin-active").toggleClass("signin-inactive");
  $(".forgot").toggleClass("forgot-left");
  $(this).removeClass("idle").addClass("active");
}

//  end change form
function Register() {
  const [form] = Form.useForm();
  const [emailDN, setEmailDN] = useState("");
  const [passwordDN, setPasswordDN] = useState("");
  //register
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");
  const [sdt, setSdt] = useState("");
  const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");
  //authentication
  const [token, setToken] = useState("");
  const history = useHistory();
  // form token
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  // show button
    let show = "";
    let show2= "";
     if (emailDN ==="" || passwordDN === "")  show = "disable";
     else show = "";
     if (email ==="" || password === "" || sdt === "" || fullName === "" || password !== password_confirm) show2 = "disable";     
     else show2 = "";
 
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const adminToken = await localStorage.getItem("token");
        const data = {
          token: adminToken,
        };
        const res = await userApi.AccessToken(data);
        history.push("/account");
      } catch (err) {
        console.log(err);
        const adminToken = await localStorage.getItem("token");
        if (adminToken) {
          Swal.fire(
            "Phiên đăng nhập hết hạn",
            "vui lòng đăng nhập lại",
            "error"
          );
          history.push("/login");
        } else {
          history.push("/login");
        }
      }
    };

    fetchAccessToken();
  }, []);

  // form token
  // const handleOk = () => {
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     // Chọn OK và xác thực
  //     authen();
  //   }, 1000);
  // };
  
  // const handleCancel = () => {
  //   setVisible(false);
  // };
  //  end form token

  // reset form
  function resetForm() {
    form.resetFields();
  }
// clear useState
function clearUseState(){
  setEmailDN("");
  setPasswordDN("");
  setFullname("");
  setSdt("");
  setPassword("");
  setPassword_confirm("");
  setEmail("");
  setAddress("");
} 


  //  Asset Token
  // async function authen() {
  //   let code = { token };
  //   let result = await fetch(
  //     "https://beonlinelibrary.herokuapp.com/users/verify-email",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(code),
  //     }
  //   );
  //   if (result.status === 200) {
  //     result = await result.json();
  //     console.log(result);
  //     if (result.code === "200") {
  //       changeForm();
  //       resetForm(); // reset form
  //       clearUseState(); //clear useState
  //       setVisible(false); //đóng form
  //       message.success(result.message); // success từ message BE
  //     } else {
  //       message.error(result.message); //  fail! từ message BE
  //       setConfirmLoading(false); // stop loading
  //     }
  //   } else {
  //     message.error("Mã xác thực không đúng"); // Add user fail! từ message BE
  //     setConfirmLoading(false); // stop loading
  //   }
  // }
  //Login
  async function logIn(e) {
    const key = 'loading';
    message.loading({ content: 'Vui lòng chờ...', key });
    e.preventDefault();
    let item = { email: emailDN, password: passwordDN };
    let result = await fetch(
      "https://beonlinelibrary.herokuapp.com/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    if (result.status === 200) {
      result = await result.json();
      setTimeout(() => {
      if (result.data[0].success === false) {
        message.error(result.data[0].error);
      } else {
        Swal.fire('Đăng Nhập Thành Công', `Chào Mừng  đã đến với chúng tôi `, 'success');
        message.success("Đăng nhập thành công");
        localStorage.setItem("user-info", JSON.stringify(result));
        localStorage.setItem('token', result.token);
        history.push("/");
      }
      },2500);
    }
  }

 //Register
async function register(e) {
  const key = 'loading';
  message.loading({ content: 'Vui lòng chờ...', key });
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
  console.log(item);
    let result = await userApi.Register(item)
    console.log(result);
       if (result.status===200) {
            setTimeout(() => {
            if (result.data.message) {
                 message.error(result.data.message);
            }
            else {
                 message.success({ content: 'Vui lòng kiểm tra email và xác nhận!', key, duration: 2 });
                 changeForm();
                 resetForm(); // reset form
                 clearUseState(); //clear useState
                 setVisible(false); //đóng form
                }
            }, 2500);
       }
       else message.error('Thất bại!')

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


  return (
    <>
      <div className="container">
        <div className="frame">
          <div className="nav">
            <ul className="links">
              <li className="signin-active">
                <a onClick={changeForm}>ĐĂNG NHẬP</a>
              </li>
              <li className="signup-inactive">
                <a onClick={changeForm}>ĐĂNG KÝ </a>
              </li>
            </ul>
          </div>
          <div ng-app ng-init="checked = false" className="frame-child">
            {/* Login */}
            <form className="form-signin">
              <Form
                {...formItemLayout}
                form={form}
                // className="form-signin"
                name="login"
                onSubmitCapture={logIn}
                // onFinish={onFinish}
                initialValues={{
                  prefix: "84",
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      message: "Địa chỉ Email không xác định!",
                    },
                    {
                      required: true,
                      message: "Hãy nhập địa chỉ Email của bạn!",
                    },
                  ]}
                >
                <Input onChange={(e) => setEmailDN(e.target.value)} />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Mật khẩu"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập mật khẩu của bạn!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                       onChange={(e) => setPasswordDN(e.target.value)}
                  />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" disabled={show}>
                    Đăng nhập
                  </Button>
                </Form.Item>

                {/* 
                  <div className="forgot">
                    <a href="#">Quên mật khẩu?</a>
                  </div>
                 */}
              </Form>
            </form>

            {/* Register */}
            <form className="form-signup" name="form">
              <Form
                {...formItemLayout}
                form={form}
                // className="form-signup"
                name="register"
                onSubmitCapture={register}
                //  onFinish={onFinish}
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "84",
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
                      message: "Hãy nhập tên đầy đủ của bạn!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input onChange={(e) => setFullname(e.target.value)} />
                </Form.Item>

                <Form.Item
                  name="emai_dk"
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      message: "Địa chỉ Email không xác định!",
                    },
                    {
                      required: true,
                      message: "Hãy nhập địa chỉ Email của bạn!",
                    },
                  ]}
                >
                  <Input onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item
                  name="phone_dk"
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập số điện thoại của bạn!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    typeof="number"
                    onChange={(e) => setSdt(e.target.value)}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="password_dk"
                  label="Mật khẩu"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập mật khẩu của bạn!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="confirm_dk"
                  label="Nhập lại mật khẩu"
                  dependencies={["password_dk"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Nhập lại mật khẩu của bạn!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password_dk") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("Không khớp vui lòng nhập lại!")
                        );
                      },
                    }),
                  ]}
                >
                      <Input.Password onChange={(e) => setPassword_confirm(e.target.value)}/>
                </Form.Item>

                <Form.Item
                  name="address_dk"
                  label="Địa chỉ"
                  rules={[{ required: true }]}
                >
                  <Input onChange={(e) => setAddress(e.target.value)} />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" disabled={show2}>
                    Đăng ký
                  </Button>
                  <Button
                    onClick={() => {
                      form.resetFields();
                    }}
                    style={{ margin: "0 8px" }}
                  >
                    Đặt lại
                  </Button>
                </Form.Item>
                {/* <Modal
                  title="Vui lòng kiểm tra Email và nhập mã xác thực"
                  visible={visible}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <Input
                    placeholder="TOKEN"
                    onChange={(e) => setToken(e.target.value)}
                  />
                </Modal> */}
              </Form>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

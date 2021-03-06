import { Button, Form, Input, message, Modal, Select } from "antd";
import $ from "jquery";
import LoginFB from './LoginFB';
import LoginGG from './LoginGG';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import userApi from "../../../../api/userApi";
import { string } from "yup";
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

//   const responseFacebook = (response) => {
//      console.log(response);
//   }

  // show button
    let show = "";
    let show2= "";
     if (emailDN ==="" || passwordDN === "" || passwordDN.length < 4)  show = "disable";
     else show = "";
     if (email ==="" || password === "" ||  fullName === ""|| password.length < 4 || password !== password_confirm ||  /[a-z]{3}/.test(fullName) !== true) show2 = "disable";     
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
            "Phi??n ????ng nh???p h???t h???n",
            "vui l??ng ????ng nh???p l???i",
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
  //     // Ch???n OK v?? x??c th???c
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
  // setSdt("");
  setPassword("");
  setPassword_confirm("");
  setEmail("");
  // setAddress("");
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
  //       setVisible(false); //????ng form
  //       message.success(result.message); // success t??? message BE
  //     } else {
  //       message.error(result.message); //  fail! t??? message BE
  //       setConfirmLoading(false); // stop loading
  //     }
  //   } else {
  //     message.error("M?? x??c th???c kh??ng ????ng"); // Add user fail! t??? message BE
  //     setConfirmLoading(false); // stop loading
  //   }
  // }
  //Login
  async function logIn(e) {
    const key = 'loading';
    message.loading({ content: 'Vui l??ng ch???...', key });
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
        Swal.fire('????ng Nh???p Th??nh C??ng', `Ch??o M???ng  ???? ?????n v???i ch??ng t??i `, 'success');
        message.success("????ng nh???p th??nh c??ng");
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
  message.loading({ content: 'Vui l??ng ch???...', key });
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
                Swal.fire('????ng K?? Th??nh C??ng', `Vui l??ng ki???m tra email v?? x??c nh???n!`, 'success');
                 message.success({ content: 'Vui l??ng ki???m tra email v?? x??c nh???n!', key, duration: 2 });
                 changeForm();
                 resetForm(); // reset form
                 clearUseState(); //clear useState
                 setVisible(false); //????ng form
                }
            }, 2500);
       }
       else message.error('Th???t b???i!')

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
                <a onClick={changeForm}>????NG NH???P</a>
              </li>
              <li className="signup-inactive">
                <a onClick={changeForm}>????NG K?? </a>
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
                      message: "?????a ch??? Email kh??ng x??c ?????nh!",
                    },
                    {
                      required: true,
                      message: "H??y nh???p ?????a ch??? Email c???a b???n!",
                    },
                  ]}
                >
                <Input
                    onChange={(e) => setEmailDN(e.target.value)}
                    maxLength="28" allowClear
               />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="M???t kh???u"
                  rules={[
                    {
                      required: true,
                      message: "H??y nh???p m???t kh???u c???a b???n!",
                    },
                    {
                         min:4,
                         message: "Vui l??ng nh???p ??t nh???t 4 ch??? s???!",
                       },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                       onChange={(e) => setPasswordDN(e.target.value)}
                       maxLength="20"
                  />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" disabled={show}>
                    ????ng nh???p
                  </Button>
                </Form.Item>
                </Form>
                    {/* login fb */}
                         <LoginFB/>
                    {/* login gg */}
                         <LoginGG/>
                  {/* <div className="forgot">
                    <a href="#">Qu??n m???t kh???u?</a>
               </div> */}
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
                  label="T??n"
                  tooltip="B???n mu???n ng?????i kh??c g???i b???n l?? g???"
                  rules={[
                    {
                      required: true,
                      message: "H??y nh???p t??n c???a b???n!",
                    //   whitespace: true,
                    },
                    {
                         pattern: /[a-z]{3}/,
                         message: "T??n kh??ng ????ng ?????nh d???ng!"
                    }
                  ]}
                >
                  <Input allowClear  maxLength="30" onChange={(e) => setFullname(e.target.value)} />
                </Form.Item>

                <Form.Item
                  name="emai_dk"
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      message: "?????a ch??? Email kh??ng x??c ?????nh!",
                    },
                    {
                      required: true,
                      message: "H??y nh???p ?????a ch??? Email c???a b???n!",
                    },
                  ]}
                >
                  <Input maxLength="28" allowClear onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                {/* <Form.Item
                  name="phone_dk"
                  label="S??? ??i???n tho???i"
                  rules={[
                    {
                      required: true,
                      message: "H??y nh???p s??? ??i???n tho???i c???a b???n!",
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
                </Form.Item> */}

                <Form.Item
                  name="password_dk"
                  label="M???t kh???u"
                  rules={[
                    {
                      required: true,
                      message: "H??y nh???p m???t kh???u c???a b???n!",
                    },
                    {
                         min:4,
                         message: "Vui l??ng nh???p ??t nh???t 4 ch??? s???!",
                       },

                  ]}
                  hasFeedback
                >
                  <Input.Password
                    maxLength="20"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="confirm_dk"
                  label="Nh???p l???i m???t kh???u"
                  dependencies={["password_dk"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Nh???p l???i m???t kh???u c???a b???n!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password_dk") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("Kh??ng kh???p vui l??ng nh???p l???i!")
                        );
                      },
                    }),
                  ]}
                >
                      <Input.Password onChange={(e) => setPassword_confirm(e.target.value)}/>
                </Form.Item>

                {/* <Form.Item
                  name="address_dk"
                  label="?????a ch???"
                  rules={[{ required: true }]}
                >
                  <Input onChange={(e) => setAddress(e.target.value)} />
                </Form.Item> */}

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" disabled={show2}>
                    ????ng k??
                  </Button>
                  <Button
                    onClick={() => {
                      form.resetFields();
                    }}
                    style={{ margin: "0 8px" }}
                  >
                    ?????t l???i
                  </Button>
                </Form.Item>
                {/* <Modal
                  title="Vui l??ng ki???m tra Email v?? nh???p m?? x??c th???c"
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

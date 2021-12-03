import { List, Typography, Divider } from 'antd';
import { render ,ReactDOM } from 'react-dom';
import React, { useState , createElement } from 'react';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function Demo(props) {
  return (
    <div>
      


ReactDOM.render(
  <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </>,

);

    </div>
  );
}

export default Demo;




// form old
// import React , { useState ,useEffect } from 'react';
// import { faThumbsUp, faThumbsDown } from 'fontawesome';
// import { FontAwesomeIcon } from 'fontawesome';
// import $ from 'jquery'
// import { useHistory } from 'react-router';
// import {
//     Form,
//     Input,
//     InputNumber,
//     Cascader,
//     Select,
//     Row,
//     Col,
//     Checkbox,
//     Button,
//     AutoComplete,
//   } from 'antd';
//   const { Option } = Select;
//   const formItemLayout = {
//     labelCol: {
//       xs: { span: 24 },
//       sm: { span: 8 },
//     },
//     wrapperCol: {
//       xs: { span: 24 },
//       sm: { span: 16 },
//     },
//   };
//   const tailFormItemLayout = {
//     wrapperCol: {
//       xs: {
//         span: 24,
//         offset: 0,
//       },
//       sm: {
//         span: 16,
//         offset: 8,
//       },
//     },
//   };


// $(function() {
//     $(".btn").click(function() {
//         $(".form-signin").toggleClass("form-signin-left");
//         $(".form-signup").toggleClass("form-signup-left");
//         $(".frame").toggleClass("frame-long");
//         $(".signup-inactive").toggleClass("signup-active");
//         $(".signin-active").toggleClass("signin-inactive");
//         $(".forgot").toggleClass("forgot-left");
//         $(this).removeClass("idle").addClass("active");
//     });
// });

// $(function() {
//     $(".btn-signup").click(function() {
//         $(".nav").toggleClass("nav-up");
//         $(".form-signup-left").toggleClass("form-signup-down");
//         $(".success").toggleClass("success-left");
//         $(".frame").toggleClass("frame-short");
//     });
// });   
// function Login(){
    
//         //login
//         const [fullname,setFullname] = useState("");
//         const [email,setEmail] = useState("");
//         const [password,setPassword] = useState("");
//         //register
//         const [sdt,setSdt] = useState("");
//         const [address,setAddress] = useState("");
//         const history = useHistory();
//         useEffect(() => {
//             if (localStorage.getItem('user-info')) {
//                 history.push("/client");
//             }
            
//         }, []);

//         //login
//         async function logIn(e) {
//             e.preventDefault();
//             let item = {fullname,email,password};
//             console.log(item);
//             // let result = await fetch('https://beonlinelibrary.herokuapp.com/users/login', {
//             //     method: 'POST',
//             //     headers: {
//             //         "Content-Type": "application/json",
//             //         "Accept": "application/json"
//             //     },
//             //     body: JSON.stringify(item)
//             // });
//             //     result = await result.json();
//             //     localStorage.setItem('user-info' , JSON.stringify(result));
//             //     history.push("/client");
//         }

//         //register
//         async function register(e) {
//             e.preventDefault();
//             let item = {fullname,email,sdt,address,password};
//             let result = await fetch('https://beonlinelibrary.herokuapp.com/users/register', {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify(item)
//             });
//                 result = await result.json();
//                 alert("Đăng ký thành công")
//                 console.log(result);
//         }
     
//      return (
//         <>
//     <div className="container">
//           <div className="frame">
//             <div className="nav">
//                 <ul className="links">
//                     <li className="signin-active" ><a className="btn">ĐĂNG NHẬP</a></li>
//                     <li className="signup-inactive"><a className="btn">ĐĂNG KÝ </a></li>
//                 </ul>
//             </div>
//             <div ng-app ng-init="checked = false">
//                 <form className="form-signin"  onSubmit={logIn} name="form">
//                     <label for="username">Tên đầy đủ</label>
//                     <input className="form-styling" type="text" name="fullname" onChange={(e)=>setFullname(e.target.value)} placeholder="" />
//                     <label for="username">Email</label>
//                     <input className="form-styling" type="text" name="username" onChange={(e)=>setEmail(e.target.value)} placeholder="" />
//                     <label for="password">Mật khẩu</label>
//                     <input className="form-styling" type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="" />
//                     <input type="checkbox" id="checkbox" />
//                     <label for="checkbox"><span className="ui"></span>Nhớ lần đăng nhập này</label>
//                     <button type="submit" className="btn-animate">
//                         <a  className="btn-signin">Đăng nhập</a>
//                     </button>
//                     <a href='#'>
//                         <div id='facebook' className='button'>Facebook
//                             <div className='cover facebook'>
//                                 <li  className="fa fa-facebook fa-2x"></li>
//                             </div>
//                         </div>
//                     </a>

//                     <a href='#'>
//                         <div id='google' className='button'>Google+
//                             <div className='cover google'>
//                                 <li  className="fa fa-google-plus fa-2x"></li>
//                             </div>
//                         </div>
//                     </a>
//                     <div className="forgot">
//                     <a href="#">Quên mật khẩu?</a>
//                </div>
//                 </form>

//                 <form className="form-signup" onSubmit={register} name="form">
//                     <label for="fullname">Tên đầy đủ</label>
//                     <input className="form-styling" type="text" name="fullname" onChange={(e)=>setFullname(e.target.value)} placeholder="" />
//                     <label for="email">Email</label>
//                     <input className="form-styling" type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="" />
//                     <label for="email">Số điện thoại</label>
//                     <input className="form-styling" type="number" name="sdt" onChange={(e)=>setSdt(e.target.value)} placeholder="" />
//                     <label for="password">Mật khẩu</label>
//                     <input className="form-styling" type="text" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="" />
//                     <label for="confirmpassword">Địa chỉ </label>
//                     <input className="form-styling" type="text" name="address" onChange={(e)=>setAddress(e.target.value)} placeholder="" />
//                     <div className="btn-animate">
//                         <input type="submit" value="Dang ky"/>
//                         <a className="btn-signup">Đăng ký</a>
//                     </div>
//                 </form>

             
//   </div>
//   </div>
//          </div>
//           </>
//      );
   
// }


// export default Login;


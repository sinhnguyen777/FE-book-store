import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import adminApi from '../../../../api/adminApi';
import login from '../../../../Assets/Images/Admin/bg1.jpg'
import logout from '../../../../Assets/Images/Admin/bg2.jpg'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';



const ChangePass = () => {
    const [show, setshow] = useState(false);
    const form = useForm();

    const toggleForm = () => {
        setshow(!show)
    }
    let history = useHistory();

    const setUserSession = (token, data) => {
        localStorage.setItem('token', token);
        localStorage.setItem('admin', JSON.stringify(data));
    }

    const handleLogin = async (values) => {
        try{
        const data ={};
        data.username=values.username;
        data.password=values.password;
        const res = await adminApi.LoginAdmin(data);
        Swal.fire('Đăng Nhập Thành Công', `Chào Mừng ${res.data.data[0].fullName} đên với trang quản trị `, 'success');
        setUserSession(res.data.token, res.data.data[0]);
        history.push('/admin');
        console.log(res.data.data[0].fullName);
        }
        catch(err){
            console.log(1);
            Swal.fire('Đăng Nhập Thất Bại', 'Tên đăng nhập hoặc mật khẩu không chính xác vui lòng kiểm tra lại', 'error');
            console.log(err);
        }
    }

    const handleForgot = async (values)=>{
        try{
            const data={};
            data.email = values.email; 
            console.log(values);
             await adminApi.SendMail(data);
             Swal.fire({
                title: 'Đã gửi mã xác thực vào email của bạn',
                text: "Bạn có muốn chuyển đến trang Email của mình để xác thực tài khoản không ?",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'chuyển đến Email',
                cancelButtonText: 'ở lại trang này'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location="https://mail.google.com/mail/u/0/"
                }
              })
            // Swal.fire('Đã gửi mã xác thực', `vui lòng vào hộp mail của mình để xác thực tài khoản `, 'success');
        }catch(err){
            Swal.fire('Email không tồn tại', 'error');
            console.log(err);
        }
    }
    return (
        <div className="BoxContent">
            <section>
                <div className={show ? "container active" : "container"}>

                    {/* <div className="user signinBx">
                        <div className="imgBx"><img src={login} alt="" /></div>
                        <div className="formBx">
                            <form onSubmit={form.handleSubmit(handleLogin)} >
                                <h2>Đăng Nhập</h2>
                                <input type="text" name="username" id placeholder="Username" ref={form.register} />
                                <input type="password" name="password" id placeholder="Password" ref={form.register} />
                                <button type="submit">Đăng Nhập</button>
                                <p className="signup">Bạn Quên Mật Khẩu? <span onClick={toggleForm}>Lấy Lại Mật Khẩu.</span></p>
                            </form>

                        </div>
                    </div> */}

                    <div className="user signinBx">
                        <div className="formBx">
                            <form onSubmit={form.handleSubmit(handleForgot)}>
                                <h2>Đổi Mật Khẩu</h2>
                                <input type="email" name="email" id placeholder="Nhập Email" ref={form.register} />
                                <button type="submit">Lấy Lại Mật Khẩu</button>
                                {/* <p className="signup">Bạn Đã Có Tài Khoản ? <span onClick={toggleForm}>Đăng Nhập.</span></p> */}
                            </form>

                        </div>
                        <div className="imgBx"><img src={logout} alt="" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChangePass

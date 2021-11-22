import React, { useEffect, useState } from 'react'
import login from '../../../../Assets/Images/Admin/bg1.jpg'
import logout from '../../../../Assets/Images/Admin/bg2.jpg'

const LoginAd = () => {
    const [show, setshow] = useState(false);

    const toggleForm=()=>{
        setshow(!show)
    }

    const [admin, setaAdmin] = useState();

    return (
        <div className="BoxContent">
            <section>
               <div className={show?"container active":"container"}>

                <div className="user signinBx">
                    <div className="imgBx"><img src={login} alt="" /></div>
                    <div className="formBx">
                    <form action>
                        <h2>Đăng Nhập</h2>
                        <input type="text" name id placeholder="Username" />
                        <input type="password" name id placeholder="Password" />
                        <button type="button">Đăng Nhập</button>
                        <p className="signup">Bạn Chưa Có Tài khoản? <span onClick={toggleForm}>Đăng Ký.</span></p>
                    </form>
                      
                    </div>
                </div>

                <div className="user signupBx">
                    <div className="formBx">
                    <form action>
                        <h2>Tạo Tài Khoản</h2>
                        <input type="text" name id placeholder="Nhâp UserName" />
                        <input type="text" name id placeholder="Đia Chỉ Email" />
                        <input type="password" name id placeholder="Mật Khẩu" />
                        <input type="password" name id placeholder="Nhập lại Mật Khẩu" />
                        <button type="submit">Đăng Ký</button>
                        <p className="signup">Bạn Đã Có Tài Khoản ? <span onClick={toggleForm}>Đăng Nhập.</span></p>
                    </form>
                        {/* <GoogleLogin className="BtnLogin"
                            clientId="287127474844-d6cc3k4gkl9pj6ccd8euoirubdk9c8q0.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> */}
                    </div>
                    <div className="imgBx"><img src={logout} alt="" /></div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default LoginAd

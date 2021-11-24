import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import adminApi from '../../../../api/adminApi';
import login from '../../../../Assets/Images/Admin/bg1.jpg'
import logout from '../../../../Assets/Images/Admin/bg2.jpg'



const LoginAd = () => {
    const [show, setshow] = useState(false);

    const toggleForm=()=>{
        setshow(!show)
    }
    let history = useHistory();
    const username = useFormInput('');
    const password = useFormInput('');

    const setUserSession = (token, data) => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('admin', JSON.stringify(data));
    }
    
    const handleLogin = () => {
        adminApi.LoginAdmin({username: username.value, password: password.value })
    .then(res => {
        setUserSession(res.data.token, res.data.data[0]);
        history.push('/admin');
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });
    }
    return (
        <div className="BoxContent">
            <section>
               <div className={show?"container active":"container"}>

                <div className="user signinBx">
                    <div className="imgBx"><img src={login} alt="" /></div>
                    <div className="formBx">
                    <form action="" >
                        <h2>Đăng Nhập</h2>
                        <input type="text" {...username} name id placeholder="Username" />
                        <input type="password" {...password} name id placeholder="Password" />
                        <button type="button" onClick={handleLogin}>Đăng Nhập</button>
                        <p className="signup">Bạn Quên Mật Khẩu? <span onClick={toggleForm}>Lấy Lại Mật Khẩu.</span></p>
                    </form>
                      
                    </div>
                </div>

                <div className="user signupBx">
                    <div className="formBx">
                    <form>
                        <h2>Quên Mật Khẩu</h2>
                        <input type="email" name id placeholder="Nhập Email" />
                        <button type="submit" onClick={handleLogin}>Lấy Lại Mật Khẩu</button>
                        <p className="signup">Bạn Đã Có Tài Khoản ? <span onClick={toggleForm}>Đăng Nhập.</span></p>
                    </form>
                        
                    </div>
                    <div className="imgBx"><img src={logout} alt="" /></div>
                </div>
                </div>
            </section>
        </div>
    )
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
export default LoginAd

import { message } from 'antd';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import userApi from '../../../../api/userApi';
import logoGG from '../../../../Assets/Images/Account/icongg.svg'

function LoginGG() {
  const history = useHistory();
  const dangNhapThatBai = (response) => {
    console.log("Đăng nhập thất bại", response);
  }
  const dangNhhapThanhCong = async (response) => {
    console.log("Đăng nhập thành công", response);
    const data = {
      email: response.profileObj.email,
      fullName: response.profileObj.givenName
    }
    const res = await userApi.LoginGG(data);
    console.log(res);
    if (res.status === 200) {
      message.success("Đăng nhập thành công");
      localStorage.setItem("user-info", JSON.stringify(res.data));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("login", 'login-gg');
      history.push("/");
    }
  }

  return (
    <div>
      <GoogleLogin
        clientId="650061717314-m60a3dm92k0gu990bi0hbiriddmc9etp.apps.googleusercontent.com"
        buttonText="Đăng nhập"
        onSuccess={dangNhhapThanhCong} onFailure={dangNhapThatBai}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} id='google' className='button'>
            Google+
            <div className='cover google'>
              <img src={logoGG} alt="" />
            </div>
          </button>
        )}
      />
    </div>
  );

}

export default LoginGG;
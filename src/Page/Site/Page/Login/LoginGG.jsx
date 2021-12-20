import React from 'react';
import GoogleLogin from 'react-google-login';
import logoGG from '../../../../Assets/Images/Account/icongg.svg'

function LoginGG(props) {
        const dangNhapThatBai = (response) => { 
          console.log("Đăng nhập thất bại", response);  
        }
        const dangNhhapThanhCong = (response) => {
          console.log("Đăng nhập thành công", response);  

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
                                   <img src={logoGG} alt=""/>
                                   </div>
                      </button>
                    )}
                    />
          </div>
     );
}

export default LoginGG;
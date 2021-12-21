import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import logoFB from '../../../../Assets/Images/Account/iconfb.svg'

function LoginFB(props) {
     const responseFacebook = (response) => {
          console.log(response);
        }
        const componentClicked = (data) => {
             console.log(data);
        }
     return (
          <div>
                <FacebookLogin
                    appId="1046843472762294"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    isSignedIn={false}
                    callback={responseFacebook}
                    render={renderProps => (
                         <button id='facebook' className='button' onClick={renderProps.onClick}>
                              Facebook
                                   <div className='cover facebook'>
                                   <img 
                                        style={{
                                        width: "38%",
                                        }} 
                                        src={logoFB} 
                                        alt=""/>
                         </div>
                         </button>
                       )} /> 
          </div>
     );
}

export default LoginFB;
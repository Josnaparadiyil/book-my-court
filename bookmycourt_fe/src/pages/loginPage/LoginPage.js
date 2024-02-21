import React, { useState } from 'react';
import './LoginPage.css';
import SignUp from '../../book my court .f.b end/bookmycourt_fe/src/components/authorization/SignUp.js';
import Login from '../../book my court .f.b end/bookmycourt_fe/src/pages/loginPage/LoginPage.js';

function LoginPage() {
  const [boxType, setBoxType] = useState('signup');

  return (
    <div className='login-container d-flex justify-content-center align-items-center'>
      {boxType === 'signup' && <SignUp toggleBox={setBoxType} />}
      {boxType === 'login' && <Login toggleBox={setBoxType} />}
    </div>
  );
}

export default LoginPage;
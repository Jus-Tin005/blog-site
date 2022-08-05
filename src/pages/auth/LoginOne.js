// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import styles from './Login.module.css';
// function Login() {
//   const [user, setUser] = useState({ username: '', password: '' });
//   let navigate = useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };
//   const auth = useAuth();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     auth.login(user);
//     navigate('/');
//   };
//   return (
//     <div className={styles.container}>
//       <dir className={styles.wrapper}>
//         <span className={styles.header}>Login</span>
//         <form action="" className={styles.loginForm} onSubmit={handleLogin}>
//           <input
//             type="text"
//             name="username"
//             placeholder="User name"
//             className={styles.loginInput}
//             value={user.username}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className={styles.loginInput}
//             value={user.password}
//             onChange={handleChange}
//           />
//           <button className={styles.loginButton}>LOGIN</button>
//         </form>
//       </dir>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from   './LoginOne.module.css';
function LoginOne() {
const navigate = useNavigate();
const [ user, setUser ] = useState({ username:'', password:''});
const handleChange = (e) => {
  const { name,value } = e.target;
  setUser({...user, [name]: value});
};
const auth = useAuth();
const handleSumit = (e) => {
  e.preventDefault();
  auth.login(user);
  navigate('/create');
}

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.header}>Login</span>
        <form action="" className={styles.loginForm} onSubmit={handleSumit}>
              <input type="text" name="username" placeholder="User name" className={styles.loginInput} value={user.username} onChange={(e) => handleChange(e)}/>
              <input type="password" name="password" placeholder="Password" className={styles.loginInput} value={user.password} onChange={handleChange}/>
              <button className={styles.loginButton}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default LoginOne;
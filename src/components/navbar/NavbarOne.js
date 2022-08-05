// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import styles from './Navbar.module.css';
// function Navbar() {
//   let auth = useAuth();
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <h1 className={styles.header}>
//           <Link to="/">Blogs-Site</Link>
//         </h1>
//         <nav className={styles.navbar}>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="about">About</NavLink>
//           <NavLink to="create">Create</NavLink>
//           {auth.user ? (
//             <button
//               onClick={() => auth.logout()}
//               style={{
//                 color: '#fffffe',
//                 background: '#6246ea',
//                 borderRadius: '5px',
//                 padding: '5px 10px',
//                 border: 'none',
//               }}
//             >
//               Logout
//             </button>
//           ) : (
//             <NavLink to="blogs-site-login">Login</NavLink>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Navbar;





import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavbarOne.modules.css';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const auth = useAuth();
  return (
    <div className="container">
      <div className="wrapper">
        <h1  className="header">
            <Link to="/">Blogs-Site</Link>
        </h1>
        <nav className="navbar">

              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/create">Create</NavLink>
              {
                auth.user ? (<button onClick={() => auth.logout()} style={{
                  color: '#fffffe',
                  background: '#6246EA',
                  borderRadius:'6px',
                  padding:'7px 13px',
                  border:'none'

                }}>
                Logout</button>)
                : (<NavLink to="blogs-site-login">Login</NavLink>)

              }

        </nav>
      </div>
    </div>
  );
}

export default Navbar;
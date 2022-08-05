// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/navbar/Navbar';
// import { AuthProvider } from './context/AuthContext';
// import { BlogProvider } from './context/BlogContext';
// import About from './pages/about/About';
// import Login from './pages/auth/Login';
// import Create from './pages/createblog/Create';
// import Home from './pages/home/Home';
// import { ProtectedRoute } from './ProtectedRoute ';
// function App() {
  // return (
    // <BlogProvider>
      // <AuthProvider>
        //  <Navbar />
        // <Routes>
          // <Route path="blogs-site-login" element={<Login />}></Route>
          //  <Route
            // path="create"
            //  element={
              //  <ProtectedRoute>
              //  <Create />
              // </ProtectedRoute>
            //  }
          // />
          // <Route path="about" element={<About />} />
          // <Route path="/" element={<Home />} />
        // </Routes>
      // </AuthProvider>
    // </BlogProvider>
  // );
// }

// export default App;






import { Route, Routes } from 'react-router-dom';
import NavbarOne from './components/navbar/NavbarOne';
import LoginOne from './pages/auth/LoginOne';
import CreateOne from './pages/createblog/CreateOne';
import AboutOne from './pages/about/AboutOne';
import { BlogProvider } from './context/BlogContext';
import Home from './pages/home/Home';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';





function App() {
  return (
    <BlogProvider>
            <AuthProvider>
                                  <div>
                                          <NavbarOne/>
                                          <Routes>
                                                <Route path="blogs-site-login" element={<LoginOne/>}></Route>
                                                <Route path="create" element={<ProtectedRoute>
                                                      <CreateOne/>
                                                </ProtectedRoute>}></Route>
                                                <Route path="about" element={<AboutOne />} />
                                                <Route path="/" element={<Home/>} />


                                          </Routes>
                                </div>
            </AuthProvider>
    </BlogProvider>
  );
}

export default App;

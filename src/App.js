import "./App.css";
import logo from "./logo.svg";

// import ClassCounter from "./components/class/ClassCounter";
import AllPosts from "./components/reactUlbiTv/AllPosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/reactUlbiTv/About";
import Navbar from "./components/UI/navbar/Navbar";
import Home from "./components/reactUlbiTv/Home";
import PostComment from "./components/reactUlbiTv/PostComment";
import PostUserId from "./components/reactUlbiTv/PostUserId";
import PostDetails from "./components/reactUlbiTv/PostDetails";
import Profile from "./components/reactUlbiTv/Profile";
import { AuthProvider } from "./components/context/auth";
import Login from "./components/reactUlbiTv/Login";
import PrivateRoutes from "./HOC/PrivateRoutes";
import Cart from "./components/reactUlbiTv/Cart";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/allposts" element={<AllPosts />} />
              <Route path="/allposts/:id" element={<PostDetails />}>
                <Route path="post-comment/:id" element={<PostComment />} />
                <Route path="post-userId/:id" element={<PostUserId />} />
              </Route>
              <Route
                path="profile"
                element={
                  <PrivateRoutes>
                    <Profile />
                  </PrivateRoutes>
                }
              />
              <Route path="login" element={<Login />} />
              <Route
                path="cart"
                element={
                  <PrivateRoutes>
                    <Cart />
                  </PrivateRoutes>
                }
              />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;

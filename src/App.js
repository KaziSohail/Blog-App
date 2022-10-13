import Home from "./component/home/Home";
import TopBar from "./component/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Setting from "./pages/settings/Settings";
import Single from "./pages/singel/Single";
import Write from "./pages/singel/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Post from "./component/Post/Post";

export default function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes><Route path="/" element={<Home />}></Route></Routes>
      <Routes><Route path="/register" element={user ? <Home/> :<Register />}></Route></Routes>
      <Routes><Route path="/login"    element={ user? <Home/> : <Login /> }></Route></Routes>
      <Routes><Route path="/write"    element={ user? <Write /> : <Register/>}></Route></Routes>
      <Routes><Route path="/settings" element={  user? <Setting /> : <Register/> }></Route></Routes>
      <Routes><Route path="/post/:postId" element={<Single />}></Route></Routes>
    </Router>
  );
}

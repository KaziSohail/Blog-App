import "./home.css";

import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";
import Posts from "../../component/Posts/Posts";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

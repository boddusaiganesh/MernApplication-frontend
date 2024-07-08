import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";

function Layout(props) {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <main style={{height:"80vh"}}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer/Footer";
import { useEffect } from "react";
import Modal from "@/components/Modal/Modal";

const BasePage = () => {
  // window.addEventListener("resize", adjustMainMargins);
  // window.addEventListener("load", adjustMainMargins);
  
  // console.log(footer.offsetHeight);
  
  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");

    let headerHeight = ''
    let footerHeight = ''

    header ? headerHeight = header.offsetHeight + "px" : '0 px'
    footer ? footerHeight = footer.offsetHeight + "px" : '0 px'

    main.style.marginTop = headerHeight;
    main.style.marginBottom = footerHeight;

  },[])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Modal/>
      <Footer />
    </>
  );
};

export default BasePage;

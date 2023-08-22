import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import CounterSection from "../components/CounterSection";
import Features from "../components/Features";
import Home from "../components/Home";
import Partners from "../components/Partners";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Service from "../components/Service";
import Skills from "../components/Skills";
/* import Testimonials from "../components/Testimonials"; */
import Head from "next/head";
import Header from "../layouts/Header";
import Layout from "../layouts/Layout";
import MobileHeader from "../layouts/MobileHeader";
import Mouse from "../layouts/Mouse";
import ScrollTop from "../layouts/ScrollTop";
/* import HomePage from "./home"; */
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  ssr: false,
});
const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Impulso360</title>
        </Head>
        <MobileHeader />
        <Header />
        <Home />
        <Features />
        <Service/>
        <About />
        {/* <CounterSection /> */}
        {/* <Portfolio /> */}
        <Skills />
        <Process />
        <Testimonials />
        <Partners dark />
        <Contact />
        {/* <Blog /> */}
        <Copyright />
        <Mouse />
        <ScrollTop />
      </Layout>
    </>

  );
};
export default Index;

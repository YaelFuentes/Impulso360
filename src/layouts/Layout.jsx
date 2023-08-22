import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import Preloader from "../layouts/Preloader";
import {
  dataImage,
  devman_tm_moving_animation,
  wowJsAnimation,
} from "../utilits";
const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    devman_tm_moving_animation();
  }, []);

  return (
    <Fragment className='font-sans'>
      <Head>
      </Head>
      <Preloader />
      <VideoPopup />
      <ImageView />
      <div className="devman_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};
export default Layout;

import Script from 'next/script';

const LottiePlayer = () => (
  <>
    <Script
      src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      strategy="beforeInteractive"
    />
    <lottie-player
      src="https://assets1.lottiefiles.com/packages/lf20_LTGoWMnMdC.json"
      mode="bounce"
      background="rgba(255, 255, 255, 0)"
      speed="1"
      sizes='(max-width:768px) 500vw,
              (max-width:1200px) 20vm, 20vw'
      /* style={{ width: '500px', height: 'auto' }} */
      loop
      autoplay
    ></lottie-player>
  </>
);

export default LottiePlayer;
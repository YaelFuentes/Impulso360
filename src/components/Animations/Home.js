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
      style={{ width: '800px', height: '800px' }}
      loop
      autoplay
    ></lottie-player>
  </>
);

export default LottiePlayer;
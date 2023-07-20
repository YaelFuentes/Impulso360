import Popup from "./Popup";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const ServicePopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="image">
          <Player
            autoplay
            loop
            priority
            sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vm, 50vw'
            src={data.img}
            className='h-48 w-52 object-none'
          />
        </div>
        <div className="main_title">
          <div className="text-white text-4xl text-center py-4">{data.name}</div>
        </div>
        <div className="descriptions">
          {data &&
            data.description &&
            data.description.map((des, i) => <p key={i}>{des}</p>)}
        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;

import Popup from "./Popup";

const ServicePopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 bg-lightblue relative" >
          <div className="relative">
            <div className="sticky inset-0 h-screen">
              <img src={data.img} alt="image description" className="rounded-lg w-96 h-96 object-cover hover:brightness-50 mt-10" />
            </div>
          </div>
          <div>
            <div className="text-lg m-5 p-2 text-blue">
              {data &&
                data.description &&
                data.description.map((des, i) => <p key={i}>{des}</p>)}
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;

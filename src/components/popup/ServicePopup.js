import Popup from "./Popup";

const ServicePopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="bg-white relative p-4">
          <div className="relative">
            <div className="sticky inset-0">
              <img src={data.img} alt="image description" className="rounded-lg hover:brightness-50 object-top h-4/5 w-full lg:h-[26rem]" />
            </div>
          </div>
          <div>
            <div className="text-lg m-5 p-2 text-blues">
              {data &&
                data.description &&
                data.description.map((des, i) => <p key={i}>{des}</p>)}

              <br /> {/* Agrega un salto de línea entre description y description2 */}

              {data &&
                data.description2 &&
                data.description2.map((des, i) => <p key={i}>{des}</p>)}
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;

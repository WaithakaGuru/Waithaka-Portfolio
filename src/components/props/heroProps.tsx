import lamp from "/images/bluelamp1.png";
import coffee from "/images/coffee1.png";
import phone from "/images/blue_phone.png";

const CoffeeMugVisual = () => (
  <img
    src={coffee}
    alt="Coffee Mug"
    draggable={false}
    className="h-26 w-18 scale-125 dancing-mug select-none"
  />
);
const LampVisual = () => (
  <div className="lamp-container">
    <img
      src={lamp}
      alt="Lamp"
      draggable={false}
      className="lamp-image select-none lg:w-40 sm:w-31 w-21"
    />
  </div>
);
const PhoneVisual = () => (
  <img
    src={phone}
    alt="Phone"
    draggable={false}
    className="object-center object-cover h-25 w-25 scale-180 ringing-phone select-none"
  />
);

export {
  CoffeeMugVisual as CoffeeMug,
  LampVisual as Lamp,
  PhoneVisual as Phone,
};

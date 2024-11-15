import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="font-bold text-xl">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p className="mb-5">
          We're happy to welcome you between {openHour}.00 until {closeHour}.00
        </p>
      )}
    </footer>
  );
}

export default Footer;

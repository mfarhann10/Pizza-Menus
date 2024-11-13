function Footer() {
  const date = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="font-bold text-xl">{date}. We're currently Open</footer>
  );
}

export default Footer;

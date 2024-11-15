/* eslint-disable react/prop-types */
function Order({ closeHour, openHour }) {
  return (
    <div className="mb-5 space-y-3">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="px-2 py-2 rounded-none bg-yellow-200">Order</button>
    </div>
  );
}

export default Order;

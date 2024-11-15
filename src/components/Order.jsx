/* eslint-disable react/prop-types */
function Order(props) {
  return (
    <div className="mb-5 space-y-3">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="px-2 py-2 rounded-none bg-yellow-200">Order</button>
    </div>
  );
}

export default Order;

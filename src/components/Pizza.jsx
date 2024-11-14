/* eslint-disable react/prop-types */
function Pizza(props) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={`/${props.photoName}`} alt={props.name} className="space-y-3" />

      <div className="p-6">
        <h1 className="font-bold text-xl text-gray-800 mb-2">{props.name}</h1>
        <p className="text-gray-700 text-base mb-4">{props.ingredients}</p>
        <p className="text-green-600 font-semibold text-lg">${props.price}</p>
        <p className="font-bold">{props.soldOut ? "Ready" : "Sold Out"}</p>
      </div>
    </div>
  );
}

export default Pizza;

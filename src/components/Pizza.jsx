/* eslint-disable react/prop-types */
function Pizza(props) {
  if (props.pizzaObj.soldOut) return null;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={`/${props.pizzaObj.photoName}`}
        alt={props.pizzaObj.name}
        className="space-y-3"
      />

      <div className="p-6">
        <h1 className="font-bold text-xl text-gray-800 mb-2">
          {props.pizzaObj.name}
        </h1>
        <p className="text-gray-700 text-base mb-4">
          {props.pizzaObj.ingredients}
        </p>
        <p className="text-green-600 font-semibold text-lg">
          ${props.pizzaObj.price}
        </p>
        {props.pizzaObj.soldOut ? (
          <p className="font-bold">Soldout</p>
        ) : (
          <p className="font-bold">Ready</p>
        )}
      </div>
    </div>
  );
}

export default Pizza;

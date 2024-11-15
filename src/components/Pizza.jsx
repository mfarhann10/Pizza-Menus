/* eslint-disable react/prop-types */
function Pizza({ pizzaObj }) {
  const pizzaStyleAvailable =
    "max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out";
  const pizzaStyleSoldout =
    "max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 transform hover:scale-105 transition-transform duration-300 ease-in-out text-gray-500 filter grayscale opacity-80";
  return (
    <div className={pizzaObj.soldOut ? pizzaStyleSoldout : pizzaStyleAvailable}>
      <img
        src={`/${pizzaObj.photoName}`}
        alt={pizzaObj.name}
        className="space-y-3"
      />

      <div className="p-6">
        <h1 className="font-bold text-xl text-gray-800 mb-2">
          {pizzaObj.name}
        </h1>
        <p className="text-gray-700 text-base mb-4">{pizzaObj.ingredients}</p>
        <p className="text-green-600 font-semibold text-lg">
          ${pizzaObj.price}
        </p>
        {pizzaObj.soldOut ? (
          <p className="font-bold">Soldout</p>
        ) : (
          <p className="font-bold">Ready</p>
        )}
      </div>
    </div>
  );
}

export default Pizza;

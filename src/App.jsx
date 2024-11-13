import "../public/css/styles.css";
import Pizza from "./components/Pizza";
import pizzaData from "./data/pizza";
/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {pizzaData.map((pizza, index) => (
        <Pizza
          key={index}
          id={index}
          img={pizza.photoName}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          soldOut={pizza.soldOut}
        />
      ))}
    </div>
  );
}

export default App;

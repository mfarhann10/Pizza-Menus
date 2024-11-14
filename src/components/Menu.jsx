import Pizza from "./Pizza";
import pizzaData from "../data/pizza";

function Menu() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {pizzaData.map((pizza, index) => (
        <Pizza
          key={index}
          id={index}
          photoName={pizza.photoName}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          soldOut={pizza.soldOut}
        />
      ))}
    </main>
  );
}

export default Menu;

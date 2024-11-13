import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import pizzaData from "./data/pizza";
/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="text-center">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {pizzaData.map((pizza, index) => (
          <Menu
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
      <Footer />
    </div>
  );
}

export default App;

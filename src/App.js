import React, { useState } from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const [pizzas, setPizzas] = useState(pizzaData);

  return (
    <main className="menu">
      <h2>Menu</h2>
      {pizzas.length > 0 ? (
        <>
        <p>
          Authentic Italian pizza, ready in 60 seconds. Choose your favorite
        </p>
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.name} {...pizza} />;
          })}
        </ul>
        </>
      ) : (
        <p>Sorry, we are out of pizzas!</p>
      )}
    </main>
  );
};
const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span className="price">{soldOut ? "sold out" : price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer" r>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are closed. We open at {openHour}:00. Come visit us or order
          online!
        </p>
      )}
    </footer>
  );
};
const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come visit us or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
};

export default App;

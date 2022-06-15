import DestinationCard from "./components/DestinationCard";
import Navbar from "./components/Navbar";
import data from "./data.js";
import "./sass/styles.scss";

function App() {
  const cards = data.map((item) => {
    return (
      <div key={item.id} className="card">
        <DestinationCard key={item.id} {...item} />
        {item.id < data.length && <hr />}
      </div>
    );
  });
  return (
    <div className="container">
      <Navbar />
      <section className="destn-list">{cards}</section>
    </div>
  );
}
export default App;

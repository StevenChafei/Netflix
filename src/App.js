import "./App.css";

// DATA
import logo from "./assets/img/logo.jpeg";
import data from "./assets/data/data.json";

// Components

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo netflix" />
      </header>

      {data.map((elem, index) => {
        console.log(elem);
        return (
          <section key={index}>
            <h2>{elem.category}</h2>

            <div className="images-container">
              {elem.images.map((image, num) => {
                return <img key={num} src={image} alt="movie" />;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;

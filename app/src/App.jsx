import "./App.css";
import Books from "./components/Books";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div className="custom-background min-vh-100 py-4">
      <div className="container">
        <div className="row gx-4">
          <div className="col-md-8">
            <h4>Books</h4>
            <div className="bg-light p-4 rounded h-100">
              <Books />
            </div>
          </div>
          <div className="col-md-4">
            <h4>Favourites</h4>
            <div className="bg-light p-4 rounded h-100">
              <Favourites />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

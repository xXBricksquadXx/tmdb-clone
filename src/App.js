import requests from "./requests";
import './App.css';
import Row from "./Row";

function App() {
  return (
    <div className="App">
<h1>Hello  its me</h1>
        <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;

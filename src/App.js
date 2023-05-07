import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2><Link style={{textDecoration:'none'}} to={'/'}>HOME</Link></h2>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


export default App;

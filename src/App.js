import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Home from "./pageContent/home/Home";
import UserList from "./pageContent/userList/UserList";
import ProductList from "./pageContent/ProductList/ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <SideMenu />
        <Switch>
          <Route path="/products" exact component={ProductList} />
          <Route path="/users" exact component={UserList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

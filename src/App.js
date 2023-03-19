import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Home from "./pageContent/home/Home";
import UserList from "./pageContent/userList/UserList";
import User from "./pageContent/users/User";
import NewUser from "./pageContent/newPage/NewUser";
import ProductList from "./pageContent/ProductList/ProductList";
import Product from "./pageContent/Product/Product";
import NewProduct from "./pageContent/newProduct/NewProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <SideMenu />
        <Switch>
          <Route path="/newProduct" exact component={NewProduct} />
          <Route path="/product/:productId" exact component={Product} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/newUser" exact component={NewUser} />
          <Route path="/user/:userId" exact component={User} />
          <Route path="/users" exact component={UserList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddItem from "./components/item/AddItem";
import EditItem from "./components/item/EditItem";
import ViewItem from "./components/item/ViewItem";

import AddPerson from "./components/people/AddPerson";
import EditPerson from "./components/people/EditPerson";
import ViewPerson from "./components/people/ViewPerson";

import AddOrder from "./components/item/AddOrder";
import EditOrder from "./components/item/EditOrder";
import ViewOrder from "./components/item/ViewOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addItem" element={<AddItem />} />
          <Route exact path="/item/:id" element={<EditItem />} />
          <Route exact path="/item/:id" element={<ViewItem />} />
          <Route exact path="/saveOrderDetails" element={<AddOrder />} />
          <Route exact path="/orderDetails/:id" element={<EditOrder />} />
          <Route exact path="/orderDetails/:id" element={<ViewOrder />} />
          <Route exact path="/addperson" element={<AddPerson />} />
          <Route exact path="/editperson/:id" element={<EditPerson />} />
          <Route exact path="/viewperson/:id" element={<ViewPerson />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

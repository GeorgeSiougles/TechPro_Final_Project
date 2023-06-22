import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddItem from "./item/AddItem";
import AddPerson from "./people/AddPerson";
import EditPerson from "./people/EditPerson";
import ViewPerson from "./people/ViewPerson";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addperson" element={<AddPerson />} />
          <Route exact path="/addItem" element={<AddItem />} />
          <Route exact path="/editperson/:id" element={<EditPerson />} />
          <Route exact path="/viewperson/:id" element={<ViewPerson />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

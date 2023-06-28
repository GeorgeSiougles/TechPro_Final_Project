import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";
import ErrorPage from "./pages/Error";

import AddItem from "./components/items/AddItem";
import EditItem from "./components/items/EditItem";
import ViewItem from "./components/items/ViewItem";

import AddPerson from "./components/people/AddPerson";
import EditPerson from "./components/people/EditPerson";
import ViewPerson from "./components/people/ViewPerson";

import AddOrder from "./components/orders/AddOrder";
import EditOrder from "./components/orders/EditOrder";
import ViewOrder from "./components/orders/ViewOrder";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/addItem" element={<AddItem />} />
//           <Route exact path="/editItem/:id" element={<EditItem />} />
//           <Route exact path="/viewItem/:id" element={<ViewItem />} />
//           <Route exact path="/addOrder" element={<AddOrder />} />
//           <Route exact path="/editOrder/:id" element={<EditOrder />} />
//           <Route exact path="/viewOrder/:id" element={<ViewOrder />} />
//           <Route exact path="/addperson" element={<AddPerson />} />
//           <Route exact path="/editperson/:id" element={<EditPerson />} />
//           <Route exact path="/viewperson/:id" element={<ViewPerson />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/addItem", element: <AddItem /> },
      { path: "/editItem/:id", element: <EditItem /> },
      { path: "/viewItem/:id", element: <ViewItem /> },
      { path: "/addOrder", element: <AddOrder /> },
      { path: "/editOrder/:id", element: <EditOrder /> },
      { path: "/viewOrder/:id", element: <ViewOrder /> },
      { path: "/addperson", element: <AddPerson /> },
      { path: "/editperson/:id", element: <EditPerson /> },
      { path: "/viewperson/:id", element: <ViewPerson /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

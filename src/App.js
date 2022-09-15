import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

/*__________________________________________________________________________________________________*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Product />} />
    </Routes>
  );
}

export default App;

/*__________________________________________________________________________________________________*/

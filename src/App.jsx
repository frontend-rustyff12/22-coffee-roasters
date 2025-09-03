import { Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import Error from "./pages/Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

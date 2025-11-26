import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Login from "./Login";
import NavScrollExample from "./NavScrollExample"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {

  return (
    <>


<Router>

<NavScrollExample />

<Routes>

<Route path="/" element={<Login />} />

<Route path="/Home" element={<Home />} />

<Route path="/About" element={<About />} />

<Route path="/Contact" element={<Contact />} />

</Routes>

</Router>

    </>
  )
}

export default App

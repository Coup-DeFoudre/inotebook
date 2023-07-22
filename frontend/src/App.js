import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Notes from "./Components/Notes";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NoteContext from "./context/notes/NoteState";
import NoteState from "./context/notes/NoteState";
// import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    
    <NoteContext>
      <NoteState>
      <BrowserRouter>
        <Navbar />
        {/* TODO: <Alert message="You're Successfully Logged In" type="error" /> */}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </NoteContext>
  );
}

export default App;

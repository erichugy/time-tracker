import './App.css';
import React from 'react'; //! Need to remove this line once you put back the components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// import Footer from './components/Footer';
// import Day from './components/Day';
// import Home from './views/Home';
// import About from './views/About';
// import NavBar from './components/NavBar';
import { Navbar, Nav } from 'react-bootstrap';
//

import { Table } from 'react-bootstrap';


export default function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div className='container'>
      <h1>Home Page</h1>
      <Day />
    </div>
  );
}

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <a className="navbar-brand" href="/">
          <img src="$PLACEHOLDER$" alt="Logo" style={{ margin: "0 auto" }} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" activeClassName="active">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2022 Your Company. All rights reserved.</p>
          <p>Contact: your-email@example.com</p>
        </div>
      </footer>
    </div>
  );
}


function Day() {
  const [highlightedTimes, setHighlightedTimes] = useState([]);

  const handleMouseDown = (time) => {
    setHighlightedTimes([time]);
  };

  const handleMouseUp = () => {
    setHighlightedTimes([]);
  };

  const handleMouseEnter = (time) => {
    if (highlightedTimes.length === 1) {
      setHighlightedTimes([highlightedTimes[0], time]);
    }
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    const startTime = new Date().setHours(0, 0, 0, 0);
    const endTime = new Date().setHours(23, 59, 59, 999);

    for (let time = startTime; time <= endTime; time += 1800000) { // 1800000 ms = 30 minutes
      const formattedTime = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const isActive = highlightedTimes.length === 2 && time >= highlightedTimes[0] && time <= highlightedTimes[1];

      timeSlots.push(
        <tr
          key={time}
          onMouseDown={() => handleMouseDown(time)}
          onMouseUp={handleMouseUp}
          onMouseEnter={() => handleMouseEnter(time)}
          className={isActive ? 'table-active' : ''}
        >
          <td>{formattedTime}</td>
        </tr>
      );
    }

    return timeSlots;
  };

  return (
    <div className='container'>
      <Table striped bordered hover>
        <tbody>
          {renderTimeSlots()}
        </tbody>
      </Table>
    </div>
  );
}
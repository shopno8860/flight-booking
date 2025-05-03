import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import FlightList from './components/flight/FlightList'
import SeatSelection from './components/seat/SeatSelection.jsx'
import Payment from './components/payment/Payment'
import Confirmation from './components/confirmation/Confirmation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flights" element={<FlightList />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  )
}

export default App

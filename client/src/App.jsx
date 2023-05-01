import { useEffect, useState } from 'react'

import './App.css'
import {Container, Wrap} from "@chakra-ui/react"
import Topcontainer from './components/Topcontainer'
import MiddleContainer from './components/MiddleContainer'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Wrap border={"100%"}>
              <Topcontainer />
              <MiddleContainer />
              <Footer />
            </Wrap>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App

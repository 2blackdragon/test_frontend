import React from "react"
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Book from "./components/Book"
import PrintBook from "./components/PrintBook"
import FindBookOnName from "./components/FindBookOnName"

function App() {
  return(
    <Router>
      <Routes>
          <Route path='/' element={<Book />}/>
          <Route path='/find_book_on_name' element={<FindBookOnName/>}/>
          <Route path='/print_books' element={<PrintBook/>}/>
      </Routes>
    </Router>
  )
};

export default App;
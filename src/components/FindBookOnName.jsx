import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import api from ".//Api"

const FindBookOnName = () => {
    const navigate = useNavigate();

    const navigatePrintBooksPage = () => {
    navigate('/print_books');
    };

    const navigateHomePage = () => {
    navigate('/');
    };

    const [message2, setMessage2] = useState([]);
    const fetch_data_to_find = async (name) => {
      if (name !== ""){
        const response = await api.get(`/find_book_on_name/${name}`);
        setMessage2(response.data);
        console.log(message2);
      }
  
    }
    const [value, setValue] = useState("")
    function handleChange(e) {
      setValue(e.target.value);
      fetch_data_to_find(value);
    }
  
  return (
    <div>
        <h2>Введите название книги:</h2>
        <input value={value} onChange={handleChange}></input>
        <div className='db_elements_search'>
            {message2.map((element) => {
            return (
                <p>{element.name} {element.author} {element.year}<br /></p>
            )
            })}
        </div>
        <button onClick={navigateHomePage}>Home Page</button>
        <button onClick={navigatePrintBooksPage}>See all books</button>
    </div>
  )
}

export default FindBookOnName
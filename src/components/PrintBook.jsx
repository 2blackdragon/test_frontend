import { useEffect, useState } from "react"
import api from ".//Api"
import {useNavigate} from 'react-router-dom';

const PrintBook = () => {
    const navigate = useNavigate();

    const navigateFindBookOnNamePage = () => {
        navigate('/find_book_on_name');
    };

    const navigateHomePage = () => {
    navigate('/');
    };

    const fetch_data = async () => {
        const response = await api.get("/");
        setMessage(response.data);
        console.log(message);
      }
      const [message, setMessage] = useState([]);
      useEffect(() => {
        fetch_data();
      }, []);
  
  return (
    <div className='db_elements'>
        <h2>Books:</h2>
        {message.map((element) => {
            return (
            <p>Name: {element.name} Author: {element.author} Year: {element.year}<br /></p>
            )
        })}
        <button onClick={navigateHomePage}>Home Page</button>
        <button onClick={navigateFindBookOnNamePage}>Find book</button>
    </div>
  )
}

export default PrintBook
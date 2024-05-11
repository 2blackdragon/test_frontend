import api from "./Api"
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom';

const Book = () => {

  const navigate = useNavigate();

  const navigateFindBookOnNamePage = () => {
    navigate('/find_book_on_name');
  };

  const navigatePrintBooksPage = () => {
    navigate('/print_books');
  };

  const post_func = async (event) => {
    event.preventDefault();
    await api.post("/", {name: input_ref1.current.value, 
                   author: input_ref2.current.value,
                   year: parseInt(input_ref3.current.value)}).then(function (response) {
                    console.log(response);
                  })
  }
  const input_ref1 = useRef();
  const input_ref2 = useRef();
  const input_ref3 = useRef();
  return (
    <div>
        <form onSubmit={post_func}>
            <p>Название</p>
            <input className='Inp1' ref={input_ref1}></input>
            <p>Автор</p>
            <input className='Inp2' ref={input_ref2}></input>
            <p>Год</p>
            <input className='Inp3' ref={input_ref3}></input>
            <button type="submit">submit</button>
        </form>
        <button onClick={navigateFindBookOnNamePage}>Find Book</button>
        <button onClick={navigatePrintBooksPage}>See all books</button>
    </div>
  )
}

export default Book
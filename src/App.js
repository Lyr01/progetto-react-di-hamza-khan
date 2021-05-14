import React, {useState, useEffect} from "react";
import './App.css';
import Book from "./components/Book";
import defaultImage from "./images/defaultImage.png"






const App = ()=>{

  
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [query, setQuery] = useState("harry potter");
  const [isLoading, setIsLoading]= useState(false);
  
  
  useEffect(()=>{
    setIsLoading(true);
    getBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);
  
  const getBooks = async ()=>{
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    setBooks(data.items);
    setIsLoading(false);
  }

  if (isLoading){
    return <p>The Data is loading...</p>
  }
  
  const handleBookName = e => {
    setBookName(e.target.value);
  }
  
  const submit = e =>{
    e.preventDefault();
    setQuery(bookName);
  }

  if (isLoading===false){
  return(
    <div className="App">
      <form className="search-form" onSubmit={submit}>
        <input className="search-bar" type="text" onChange={handleBookName} value={bookName} />
        <button className="search-botton">Cerca</button>
      </form>
      <div className="books">
        {books.map(book=>(       
          <Book
          key={book.id}
          id={book.id}
          title={book.volumeInfo.title} 
          authors={book.volumeInfo.authors} 
          img={book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.thumbnail:defaultImage}/>
        ))}
      </div>
    </div>
  )
 }
}

export default App;


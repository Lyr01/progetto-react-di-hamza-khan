import React from "react"
import { Link } from "react-router-dom"
import style from "../book.module.css"

const Book = ({title, authors, img, id}) => {
    return(
        <div className={style.book}>

            <Link style={{ textDecoration: 'none' }} to={`/Book/${id}`}><h1 className={style.title}>{`${title.substring(0, 20)}...`}</h1></Link>
            <Link to={`/Book/${id}`}><img className={style.image} src={img} alt={title} /></Link>
            <p>By- {authors}</p>
            
            
        </div>
    );
}



export default Book


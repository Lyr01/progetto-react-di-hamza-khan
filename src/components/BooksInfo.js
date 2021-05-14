import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import defaultImage from "../images/defaultImage.png"
import style from "../booksinfo.module.css"

let info;

const BooksInfo = () => {


    const [isLoading, setIsLoading]= useState(true);
    


    // eslint-disable-next-line no-unused-vars

    const {id} = useParams();


      useEffect(()=>{
        setIsLoading(true);
        getInfo();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[id]);
      
      const getInfo = async ()=>{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        info = data;    
        setIsLoading(false);
      }

      if (isLoading){
        return <p>The Data is loading...</p>
      }

      if (isLoading===false){
    return(
        <div className={style.main}> 
            <h1 className={style.title}>{info.volumeInfo.title}</h1>
            <img src={info.volumeInfo.imageLinks?info.volumeInfo.imageLinks.thumbnail:defaultImage} alt={info.volumeInfo.title} />
            <p>By- {info.volumeInfo.authors}</p>
            <div className={style.info}>
              <p>Generi: {info.volumeInfo.categories?info.volumeInfo.categories:"non disponibili."}</p>
              <a href={info.volumeInfo.canonicalVolumeLink}>Per maggiori informazioni andare qui</a>
              <p>{info.saleInfo.listPrice?info.saleInfo.listPrice.amount + info.saleInfo.retailPrice.currencyCode:""}</p>
              <p>Il libro ha {info.volumeInfo.pageCount} pagine.</p>
              <p>Il libro è stato pubblicato da {info.volumeInfo.publisher} il {info.volumeInfo.publishedDate}.</p>
              <p>{info.accessInfo.pdf.isAvailable?"Questo libro lo puoi trovare anche in pdf.":"Questo libro non è disponibile in pdf."}</p>
              <a href={info.accessInfo.pdf.downloadLink}>{info.accessInfo.pdf.downloadLink?"Ecco il Link del pdf":""}</a>
              <p>{info.saleInfo.isEbook?"Questo libro lo puoi trovare anche in formato Ebook.":"Questo libro non è disponibile in formato Ebook."}</p>
            </div>
            <p className={style.description}>{info.volumeInfo.description}</p>
            
            
            
            
        </div>
    
    
    )
    } 
}

export default BooksInfo
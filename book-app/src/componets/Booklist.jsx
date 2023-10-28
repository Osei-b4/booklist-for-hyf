import {useState, useEffect } from 'react';
import React from 'react';
import '../App'; 
import { API_URL } from '../hooks/useBooks';
import axios from 'axios';

  const [books, setBooks] = useState([])

useEffect(() =>{
    axios.get(API_URL).then(res =>{
     console.log(res.data)
        setBooks(res.data)
    }).catch(err=>console.log(err))

},[]);


const Booklist = () => {
  
        <div className='book-list'>
           {books.map((book) => {
            <>
                <div key={book.id} className='book'>
                    <div>
                        <h4>{book.title}</h4>
                    </div>
                </div>
                <Booklist.img variant='top'src={book.formats["image/jpeg"]} alt='book.title'/>
            </>})}
        </div>
}

export default Booklist; 

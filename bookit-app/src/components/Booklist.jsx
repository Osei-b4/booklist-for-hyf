
import {useState, useEffect } from 'react';
import React from 'react';
import '../App'; 
import { API_URL } from '../hooks/useBooks';
import axios from 'axios';



const Booklist = () => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        axios.get(API_URL).then(res =>{
         console.log(res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err))

    },[]);
    return(
        <div className='book-list'>

            {Array.from(books).map((book) => {

                console.log(book)
                <div key={book.id} className='book'>
                    <><div>
                        <h4>{book.title}</h4>
                    </div><div>
                            <img src {...book.formats[]} alt='#' />
                        </div></>
                </div>
            })}
            <book.formats variant="top" src={book.formats[""]} />

           
            
        </div>
    )
   
}

export default Booklist; 

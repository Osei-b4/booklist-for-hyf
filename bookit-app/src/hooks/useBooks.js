import { useEffect, useState } from "react";

export const API_URL ="https://gutendex.com/books";














// let URL = "https://gutendex.com/books";
// if(page > 1 ){
//     URL += '/?page=${page}';
// }

// function useBooks(page) {
//   const [data, setData] = useState([]);
//   const [Read] = useState(false);
//   const [View] = useState(false);

//   useEffect(() => {
//     fetch(URL)
//       .then((apiRes) => apiRes.json())
//       .then((resJson) => setData(resJson.results))
//       .catch((err) => console.log(err));
//   }, [page]);

//   return {
//     data,
//     Read,
//     View
//   };
// }

// export default useBooks;

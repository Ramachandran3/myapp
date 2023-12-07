// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Api.css";

// const Photos = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/photos`)
//       .then((res) => {
//         console.log(res.data);
//         setPhotos(res.data);
//       })
//       .catch((error) => {
//         console.log(error.data);
//       });
//   }, []);

//   return (
//     <div className="api-main ">
//       <table className="users-table">
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Comments</th>
//         </tr>
//         {photos.map((item) => {
//           return (
//             <tr>
//               <td>{item.title} </td>
//               <td>{<img src={item.url} alt="" />}</td>
//               <td>{<img src={item.thumbnailUrl} alt="" />}</td>
//             </tr>
//           );
//         })}
//       </table>
//     </div>
//   );
// };

// export default Photos;

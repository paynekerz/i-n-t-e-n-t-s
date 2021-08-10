// import React, { useState, useEffect } from "react";
// import "./style.css";

// const heroImage = [
// "./img/damian-markutt-Dhmn6ete6g8-unsplash.jpg", 
// "./img/denys-nevozhai-63Znf38gnXk-unsplash.jpg",
// "./img/levi-jones-ZHfmZ7Sk-0s-unsplash.jpg",
// ];

// export default function Background() {
//   const [activeIndex, setactiveIndex] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       currentImageIndex === 0 ? setactiveIndex(1) : setactiveIndex(0);
//     }, 3000);
//   });

//   return (
//     <div>
//       <img
//         className={styles.featureImage}
//         src={"img/" + heroImage[activeIndex]}
//         alt={"imageTitle"}
//       />
//     </div>
//   );
// }
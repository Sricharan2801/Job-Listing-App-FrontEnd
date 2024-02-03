// import React, { useState, useEffect } from 'react'
// import { Navigate } from 'react-router-dom'

// const ProtectedRoute = (props) => {
//     const { Component } = props
//     const [isUserLoggedIn, setIsUserLoggedIn] = useState()



//     useEffect(() => {
//         checkToken()
//     }, [])

//     const checkToken = async () => {
//         const token = localStorage.getItem("token");
//         console.log("inside");
//         setIsUserLoggedIn((prevIsUserLoggedIn) => {
//             return token ? true : false;
//         });
//     };
//     console.log(isUserLoggedIn);


//     return (
//         <div>
//             {
//                 isUserLoggedIn ? <Component /> : <Navigate to={"/register"} />
//             }

//         </div>
//     )
// }

// export default ProtectedRoute

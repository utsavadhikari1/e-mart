// import { Routes } from "react-router";

// export const cart = [];

// const handleCart = (state = cart, action) => {
//   const product = action.payload;

//   const handleCart = (state = cart, action) => {
//     const product = action.payload;
//     switch (action.type) {
//       case ADDITEM:
//         const exist = state.find((x) => x.id === product.id);
//         break;
//       case DELITEM:
//         break;
//       default:
//         return state;
//     }
//   };

//   Routes (action.type) {
//     case ADDITEM:
//       const exist =  state.find((x)=> x.id === product.id);
//       if(exist){
//         return state.map((x) =>
//         x.id === product.id ? {...x, qty: x.qty + 1} : x
//          );
//       }else{
//         const product = action.payload;
//         return [
//           ...state,
//           {
//             ...product,
//             qty: 1,
//           }
//         ]
//       }
//       break;

//     default:
//       break;
//   };
// };

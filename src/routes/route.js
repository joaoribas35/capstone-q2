// import { Redirect, Route as RouterDOM } from "react-router-dom";

// //Caso a rota for privada e o usuário não estiver logado > HOME
// //Caso a rota for privada e o usuário estiver logado > DASHBOARD
// //Caso a rota não for privada e o usuário não estiver logado > CRIE O SEU PORTIFÓLIO > REGISTER|| LOGIN
// //Caso a rota não for privada e o usuário estiver logado > ROTA

// export const Route = ({ isPrivate, component: Component, ...rest }) => {
//   return (
//     <RouterDOM
//       {...rest}
//       render={() => {
//         return !!token || !isPrivate ? (
//           <Component />
//         ) : (
//           <Redirect to={{ pathname: "/register" }} />
//         );
//       }}
//     />
//   );
// };

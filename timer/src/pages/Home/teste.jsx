import React from "react";

export function Teste() {
  const [value, setValue] = React.useState(0);
  console.log(value);
  function handleClick() {
    setValue((state) => {
     return state + 1;
    });
    setValue(value + 1)
    setValue((state) => {
        console.log('dentro',value);
        return state + 1;
       });
  }
  return (
    <div>
      <div>{value}</div>
      <button onClick={handleClick}></button>
    </div>
  );
}

// export function Teste() {
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     function puxarDados() {
//       fetch("https://pokeapi.co/api/v2/pokemon/")
//         .then((response) => response.json())
//         .then((response) => {
//           const results = response.results;
//           setData(results);
//         });
//     }
//     puxarDados();
//   }, []);
//   return (
//     <ul>

//     </ul>
//   );
// }

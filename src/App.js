import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App(){

  const [nayoks, setNayoks] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))

  }, [])

  // const nayoks = [{name: 'josim', age: 56}, {name: 'Diipjol', age: 56}, {name: 'Misha_saodagor', age: 56}]

  return(
    <div className="App">
      <MovieCounter></MovieCounter>

    {
      nayoks.map(nk => <Nayok name = {nk.name} key={nk.id} age = {nk.age}></Nayok>)
    }

      <header className="App-header">
      </header>

    </div>
  );
}
 

function MovieCounter(){
  let [count, setCount] = useState(0);
  const handelClick = () => count = setCount(count + 1);

  return(
    <div>
      <button onClick={handelClick}>add movies</button>
      <h5>Number of movies:{count}</h5>

      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count + 5}></MovieDisplay>
      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count + 10}></MovieDisplay>
      <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies i have acted:{props.movies}</h4>
}


function Nayok(props){
  const nayokStyle={
    border:'2px solid gray',
    margin:'20px',
    borderRadius: '20px',
    padding:'5px',
    color: 'orange'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami nayok: {props.name}</h1>
      <p>i have some movies in {props.age || 50} years</p>
    </div>
  )
}


export default App;


//   function App() {

//    const players = ['Riyad', 'Sakib', 'Mushi', 'Cutter Master', 'Shaifuddin']

//   const products = [
//     {name:'Uniforms', price:'$600'},
//     {name:'shows', price:'$230'},
//     {name:'sunglass', price:'$60'}
//   ]

//   // const productName = products.map(pd => pd.name)
//   // const playerName = players.map(player => player)
  
  

//   return (
//     <div className="App">
//       <header className="App-header">
//     <p>I am a react person</p>
//     <Users></Users>

//     <Counter></Counter>

//     <ul>
//       {
//         players.map(player => <li>{player}</li>)
//       }
//       {
//         products.map(pd => <li>{pd.name}</li>)
//       }
//     </ul>
//       {
//         products.map(pd => <Product product = {pd}></Product>)
//       }
   
//     <Person name = 'Munna' job = 'Foodballer'></Person>
//     <Person name = 'Masud Rana' job = 'Player'></Person>
//       </header>
//     </div>
//   );
// }

// function Counter(){
//   const [count, setCount] = useState(0)
//   const handleIncrease = () => setCount(count +1);
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick ={() => setCount (count -1)}>decrease</button>
//       <button onClick={handleIncrease}>increase</button>
//     </div>
//   )
// }

//   function Users(){
//     const [users, setUsers]= useState([]);
//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data));
//     }, [])

//     return(
//       <div>
//         <h3>Dynamic User: {users.length}</h3>
//         <ul>
//           {
//             users.map(user => <li>{user.name}</li>)
//           }
//         </ul>
//       </div>
//     )
//   }

// function Product(props){
//   const productStyle ={
//     border:'1px solid red',
//     borderRadius:'5px',
//     backgroundColor:'gray',
//     height:'200px',
//     width:'200px',
//     color: 'black'
//   }
//   const {name, price} = props.product;

//   return(
//     <div style = {productStyle}>
//       {/* <h2>{props.product.name}</h2> */}
//       <h2>{name}</h2>
//       <h2>{price}</h2>
//       {/* <h2>{props.product.price}</h2> */}
//       <button>Buy now</button>
//     </div>
//   )
// }

// function Person(props){
//   return(
//     <div style = {{border:'2px solid yellow', margin: '10px', padding:'10px', width:'400px'}}>
//       <h3>My name : {props.name}</h3>
//       <p>Profession: {props.job}</p>
//     </div>
//   )
// }

// export default App;
// -->
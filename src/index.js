import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Apifetch(){
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
useEffect(()=>{
  fetch('https://fakestoreapi.com/users')
  .then(res => res.json())
  .then(data=>{
      setUsers(data);
      setLoading(false);
  })
  .catch(error=>{
       console.log("if it is not loading,there will be a error message");
       setLoading(false);

  });
},[]);

if(loading){
  return(
       <p>loading</p>
  )
}

return(
  <div>
       <h2>List of the Users</h2>
       <ul>
            {users.map(user=>(
                 <div>
                 <li key={user.id}>{user.id}.{user.name.firstname} {user.name.lastname}</li>
                <li class="zipcode"> zipcode:{user.address.zipcode}</li>
                </div>
            ))}
       </ul>
  </div>
)

 
}
ReactDOM.render(<Apifetch />,document.getElementById("root"))

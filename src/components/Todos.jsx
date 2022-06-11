import React ,{useEffect,useState} from 'react'
import "../App.css"
import axios from "axios"
const Todos = () => {
  const [page,setPage]= useState(1);
  const [todos,setTodos]=useState([]);
  const [totalcount,setTotalcount]=useState(0);
const [limit,setLimit]= useState(5);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/todo?_page=${page}&_limit=${limit}`)
    .then((r)=>{
      console.log(r.data)
      setTodos(r.data);
 setTotalcount(Number(r.header["x-total-count"]))
    },[page,limit]);
  })
  return (
    <div className='App'>
      {todos.map((todo)=>(
       <div >
         {todo.value}

       </div>
     ))}
     <button disabled={page<=1}
     onClick={()=>{
       if(page>1){
         setPage(page-1);
       }
     }}
     >{"<"}</button>
     <select onChange={(e)=>setLimit(Number(e.target.value))}>
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={20}>20</option>
     </select>
     
     <button disabled={totalcount< page*5}
     onClick={()=>{ setPage(page+1)

     }}
     >{">"}</button>
      
      
      </div>
  )
}

export default Todos
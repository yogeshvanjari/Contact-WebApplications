import { useState } from "react"

export default function Loginx(){

 const [name,setName]= useState('');

 const ename=(e)=>{

    setName(e.target.value)
 }

const api=()=>
{
  if(name=="1432"){
     alert("Login Suceess")
  }
  else{
    alert("Login Failed")
  }
}

  return(
  <>
  <center>
    
<pre></pre>
<label htmlFor="">Enter Number :{name} </label>
 <input type="Text" onChange={ename} />

 <input type="button" value="Login" onClick={api}/>

 </center>


  
  
  </>
  )

}
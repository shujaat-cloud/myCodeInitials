import logo from './logo.svg';
import './App.css';
import React, {act, useState} from 'react'

function App() {
  const [activity, setActivity] = useState("")
  const [addtoList, setAddtoList] =useState([])
  const [bgColor, setbgColor]=useState("")
  function addingfunction(){
    if(activity!="")
    // setAddtoList([...addtoList, activity])
    // console.log(addtoList)
      setAddtoList((addtoList)=>{
        const updateList = [...addtoList, activity]
        console.log(updateList)
        return updateList
      })
      setActivity("")
    } 
    function removeAll(){
      setAddtoList([])
    }
   
    function removeItem(i){
    const filterItems  =addtoList.filter((item,ind)=>{
    if(i!=ind)
    return(   item   )
      })
      setAddtoList(filterItems)
    }

    
   
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Todo Items</h1>
      {/* <h1> {activity}    </h1> */}
      <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=>setActivity(e.target.value)} />
      <button onClick={addingfunction}>Click to add</button>
      <div  >
        {
        addtoList.map((item,i)=>{
          return(
            <p key={i}  className='List-items'>{i+1+".   "+item}
            <button onClick={()=>removeItem(i)} >Remove(-)</button>            
            </p>
          )
        })
      }
      {

     (addtoList!="")&&<button onClick={()=>removeAll()}>Remove all</button>
      }
        
      </div>




      
        
      </header>
    </div>
  );
}

export default App;

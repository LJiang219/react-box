import React from 'react'
import { useState } from "react";
import   "./index.css";


// function handleChange(){
//  console.log(1)
// }

export default function FilterPerson(props) {
  const personArr = props.personArr;
  const genders = ['male', 'female', 'all'];

  const [activeIdx, setActiveIdx] = useState(2);
  const [filterKey, setFilterKey] = useState('')
  const [filterList, setFilterList] = useState([...personArr]);


  return (
    <div className="person-box">
      <div className="control">
        <input type="text" className="search" value={filterKey} 
          onChange={(e) => {
            setFilterKey(e.target.value);
            // console.log(filterKey)
            let tmpList = personArr.filter(item => item.name.includes(filterKey));
            // console.log(tmpList)
            // setFilterList([...personArr, ...tmpList])
            setFilterList(tmpList)
            console.log(filterList)
          }}  />
        <div>
          {genders.map((item, idx) =>  (
          <span className={['option', activeIdx===idx ? 'active':''].join(' ')} key={idx} 
            onClick={()=> {
              setActiveIdx(idx);
              // setFilterList();
            }
          }>{item}</span>) 
          )}
        </div>
      </div>
      <ul>
         
        {
          
          filterList.map((item, idx) => (
            <li className="person" key={idx}>
              <div className="avatar">
                <img src={item.src} alt={item.name}/>
              </div>
              <div className="content">
                <span className="name">{item.name}</span>
                <span className="des">{item.des}</span>
              </div>
          </li>))
        }
       
      </ul>
    </div>
  )
}

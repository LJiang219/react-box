import React from 'react'
import { useState , useEffect} from "react";
import   "./index.css";


// function useResp(filterKey, personArr){
//   const [filterList, setFilterList] = useState([...personArr]);
//   useEffect(() => {
//     let tmpList = personArr.filter(item => item.name.includes(filterKey));
//     setFilterList(tmpList)
//   }, [filterKey]);
//   return filterList;
// }

function getFilterList(filterKey, personArr, sex){
  // console.log(sex)
  const [filterList, setFilterList] = useState([...personArr]);
  useEffect(() => {
    let tmpList = personArr.filter(item => item.name.includes(filterKey) && sex.includes(item.sex));
    setFilterList(tmpList)
  }, [filterKey, sex]);
  return filterList;
}


export default function FilterPerson(props) {
  const personArr = props.personArr;
  const genders = ['male', 'female', 'all'];
  const sexOptions = ['m','f'];

  const [activeIdx, setActiveIdx] = useState(2);
  const [filterKey, setFilterKey] = useState('');
  const [sex, setSex] = useState(sexOptions)

  const filterList = getFilterList(filterKey, personArr, sex);

  return (
    <div className="person-box">
      <div className="control">
        <input type="text" className="search" value={filterKey} 
          onChange={(e) => {
            setFilterKey(e.target.value);
          }}  />
        <div>
          {genders.map((item, idx) =>  (
          <span className={['option', activeIdx===idx ? 'active':''].join(' ')} key={idx} 
            onClick={()=> {
              setActiveIdx(idx);

              switch (genders[idx]){
                case 'male':
                  let ss1 = sexOptions.filter((s, i) => i===idx);
                  setSex([...ss1]);
                  console.log("male", sex); //竟然是上次点击的性别的值, sex确实是更新了
                  break;
                case 'female':
                  let ss2 = sexOptions.filter((s, i) => i===idx);
                  setSex([...ss2]);
                  console.log("female",sex)
                  break;
                case 'all':
                  setSex([...sexOptions]);
                  console.log("all",sex)
                  break;
              }
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

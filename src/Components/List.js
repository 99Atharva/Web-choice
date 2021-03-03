import db from '../firebaseconfig';
import React,{useState,useEffect} from 'react';
import Card from './Card';

function List() {
    const [list,setList]=useState([])
    const fetchList=async()=>{
      const response=db.collection('list');
      const data=await response.get();
      data.docs.forEach(item=>{
       setList([...list,item.data()])
      })
    }
    useEffect(() => {
      fetchList();
    }, [])
    return (
      <div className="List">
        {
          list && list.map(list=>{
            return(
              <div className="list-container">
                
                <Card card={list} />
                    <h4>{list.title}</h4>
              </div>
            )
          })
        }
      </div>
    );
  }
  
  export default List;
  
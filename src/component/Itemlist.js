import React from 'react';
import { useHistory,useParams } from 'react-router-dom';


function ItemList(props){
  let history = useHistory(); 
  
  return(
      <div className="col-md-4">
        <img className="item-image" src={props.item.url} alt="123" width="100%" 
        onClick={()=>{history.push(`/detail/${props.item.id}`)}}/>
        <h4>{props.item.title}</h4>
        <p>{props.item.content} {props.item.price}원</p>
      </div>
  )
  
    }

export default ItemList;
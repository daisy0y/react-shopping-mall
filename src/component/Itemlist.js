import React, { useContext } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import {stockContext} from '../App.js'

function ItemList(props){
  let history = useHistory(); 
  let stock = useContext(stockContext);
  
  return(
    <stockContext.Provider value={stock}>
      <div className="col-md-4">
        <img className="item-image" src={props.item.url} alt="123" width="100%" 
        onClick={()=>{history.push(`/detail/${props.item.id}`)}}/>
        <h4>{props.item.title}</h4>
        <p className="list-price">{props.item.content} {props.item.price}원</p>
        <p> 재고가 <span className="item-stock">{stock[props.item.id]}</span>개 남았어요!! </p>
      </div>
      </stockContext.Provider>
  )
  
    }

export default ItemList;
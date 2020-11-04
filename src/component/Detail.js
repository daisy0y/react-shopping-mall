import React, { useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';

import '../assets/Detail.scss'

function Detail(props) {
    let { id } = useParams();
    let history = useHistory();
    let [none,setNone] = useState(true)
    let [input,setInput] = useState('');

    useEffect(()=>{
        let timer = setTimeout(()=>{
           setNone(false)
           return ()=>{clearTimeout(timer)}
        },5000)
    },[])

    let DetailAlert = <div id="a" className="detail-alert">재고가 얼마 남지 않았습니다!</div>
            
    return(
    <div className="container">
            <div>
                <h4 className="detail-header">Detail</h4>
             
                {none ? DetailAlert : null}
            </div>
        <div className="row">
            <div className="col-md-6">
                <img src={props.item[id].url} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.item[props.item[id].id].title}</h4>
                <p>{props.item[id].content}</p>
                <p>{props.item[id].price}</p>
               <Info stock={props.stock[id]} setStock={props.setStock}></Info>
                <button className="btn btn-danger" onClick={()=>{
                    let a = [...props.stock];
                    a[id] = a[id]-1
                    props.setStock(a)
                
                }}>주문하기</button> 
                <button onClick={()=>{
                    history.goBack();
                }} className="btn btn-danger">뒤로가기</button> 
            </div>
        </div>
    </div>  
    )
}


function Info(props){
    return(
        <p>재고 : {props.stock}</p>
    )
}


export default Detail;
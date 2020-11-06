import React, { useEffect, useState } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { Nav} from 'react-bootstrap'
import '../assets/Detail.scss'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux';


function Detail(props) {
    let { id } = useParams();
    let history = useHistory();
    let [none,setNone] = useState(true);
    let [tab,setTab] = useState(0);
    let [tabSwitch,setTabSwitch] = useState(false);
    useEffect(()=>{
        let timer = setTimeout(()=>{
           setNone(false)
           return ()=>{clearTimeout(timer)}
        },4000)
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
                <p>{props.item[id].price}원</p>

               <Info stock={props.stock[id]} setStock={props.setStock}></Info>

                <button className="btn btn-success" onClick={()=>{
                    let stockCount = [...props.stock];
                    stockCount[id] = stockCount[id]-1
                    props.setStock(stockCount);
                    props.dispatch({type:'addCart',
                    payload:{id:props.store[id].id+1,name:props.item[props.item[id].id].title,quan:1}})
                    history.push('/cart')
                    
                }}>주문하기</button> 
                <button onClick={()=>{
                    history.goBack();
                }} className="btn btn-success">뒤로가기</button> 
            </div>
        </div>

       <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{setTabSwitch(false); setTab(0)}}>상세정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{setTabSwitch(false); setTab(1)}}>리뷰</Nav.Link>
            </Nav.Item>
      </Nav>
    
         <CSSTransition in={tabSwitch} classNames="tabs" timeout={1000}>
             <TabContent setTabSwitch={setTabSwitch} tab={tab}></TabContent>
         </CSSTransition>

    </div>  
    )
}

function TabContent(props){
    useEffect(()=>{
        props.setTabSwitch(true)
    })
    if(props.tab === 0){
        return <div>상품설명란입니다</div>
    } else if(props.tab === 1){
        return <div>리뷰란입니다</div>
    }
}

function Info(props){
    return(
        <p>재고 : {props.stock}</p>
    )
}


function storeToProps(state){
    return {
        store:state.reducer,
        alertState:state.reducer2

    }
}

export default connect(storeToProps)(Detail)



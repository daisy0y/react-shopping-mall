import React from "react";
import { Table } from 'react-bootstrap'
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom'
import  '../App.css'
function Cart(props){
let history = useHistory();
let BannerClose = function(){
    props.dispatch({type:'close'})
}
    return(
    <>{ 
        props.alertState ? 
     <div onClick={BannerClose} className="cart-alert">
            <p>
                지금 구매시 봉구 싸인을 보내드려요!<br></br>
                <em>클릭하면 배너가 사라집니다.</em>
            </p>
            
        </div>
        :
        null
        }
    <Table responsive="sm">
        <thead>
        <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>

        </tr>
        </thead>
        <tbody>
            {props.store.map((cart,i)=>{
                return(
                       <tr key={i}>
                        <td>{i+1}</td>
                        <td>{cart.name}</td>
                        <td className="cart-count">
                            <span onClick={()=>{props.dispatch({
                                type:'decrease',
                                payload:i
                            })}}
                                className="cart-decrease"> - </span>
                            {cart.quan}
                            <span onClick={()=>{props.dispatch({
                                type:'increase',
                                payload:i
                                })}} 
                                className="cart-increase"> + </span></td>
                        <td>여기뭐넣지</td>
                       </tr>
                       )
            })}
        </tbody>
        
    </Table>
    <div className="cart-back">
        <button className="btn btn-success"
         onClick={()=>{
             history.goBack();
        }}>
            쇼핑 계속하기
        </button>
        </div>
</>
    )

}



function storeToProps(state){
    return {
        store:state.reducer,
        alertState:state.reducer2

    }
}

export default connect(storeToProps)(Cart)

// export default Cart;

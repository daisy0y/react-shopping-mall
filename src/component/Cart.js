import React from "react";
import { Table } from 'react-bootstrap'
import { connect } from "react-redux";


function Cart(props){

    return(
    <>{ 
        props.alertState ? 
     <div onClick={()=>{props.dispatch({type:'close'})}} className="cart-alert">
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
                        <td>
                            <span onClick={()=>{props.dispatch({type:'decrease',payload:cart.id})}} className="cart-sign"> - </span>
                            {cart.quan}
                            <span onClick={()=>{props.dispatch({type:'increase',payload:cart.id})}} className="cart-sign"> + </span></td>
                        <td>여기뭐넣지</td>
                       </tr>
                       )
            })}
        </tbody>
    </Table>
  
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

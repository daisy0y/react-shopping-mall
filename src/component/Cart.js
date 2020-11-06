import React from "react";
import { Table } from 'react-bootstrap'
import { connect } from "react-redux";


function Cart(props){

    return(
    <>
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
                        <td>{cart.id+1}</td>
                        <td>{cart.name}</td>
                        <td>
                            <span onClick={()=>{props.dispatch({type:'decrease'})}} className="cart-sign"> - </span>
                            {cart.quan}
                            <span onClick={()=>{props.dispatch({type:'increase'})}} className="cart-sign"> + </span></td>
                        <td>Table cell</td>
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
        store:state
    }
}

export default connect(storeToProps)(Cart)

// export default Cart;

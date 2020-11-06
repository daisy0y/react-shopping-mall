import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let baseState =  [{
  id:0,
  name:'ABKO(앱코) 오엘라 자동급식기 PF01',
  quan:2
},{
  id:1,
  name:'윈코 코펫 반영구 반려동물 털빠짐 털제거돌돌이',
  quan:1
},{
  id:2,
  name:'브라운포 초경량 휴대용 반려동물 애견 유모차',
  quan:1
}]


function reducer(state = baseState , action){
  if( action.type==='increase'){
    let copy = [...state];
    copy[0].quan++;
    return copy
  }else if(action.type==='decrease'){
    let copy = [...state];
    copy[0].quan--;
    if(copy[0].quan < 0 ){
      alert('최소 갯수 입니다.')
      copy[0].quan++;
    }

    return copy
  }
    else{
    return state
  }
}

let store = createStore(reducer);
ReactDOM.render(
  
    <BrowserRouter>
      <Provider store={store}>
       <App />
      </Provider>
    </BrowserRouter>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

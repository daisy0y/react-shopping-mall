import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


function reducer2(state = true , action){
  if( action.type === 'close'){
    
    return false;
  }else{
    return state;
  }
}

let baseState =  [{
  id:9999,
  name:'봉구 간식 사주기',
  quan:1
}]


function reducer(state = baseState , action){
  if(action.type === 'addCart'){
    let foundIndex = state.findIndex((a)=>{return a.id === action.payload.id});
    console.log(foundIndex)    

    if( foundIndex >= 0){
      let copy = [...state];
      copy[foundIndex].quan++;
      return copy


    }else{
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    }
  
  }else if( action.type==='increase'){
    let copy = [...state];
    copy[action.payload].quan++;
    return copy
  }else if(action.type==='decrease'){
    let copy = [...state];
    copy[action.payload].quan--;
    if(copy[action.payload].quan < 0 ){
      alert('최소 갯수 입니다.')
      copy[action.payload].quan++;
    }
    return copy
  }  
    else{
    return state
  }
}

// 여러개의 reducer 추가시 combineReducers import 후 아래와 같이 등록
let store = createStore(combineReducers({reducer,reducer2}));

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

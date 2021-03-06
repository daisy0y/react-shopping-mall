/*eslint-disable*/
import React, { useState , useContext , lazy,Suspense} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {Navbar,NavDropdown,Nav,Button,Jumbotron} from 'react-bootstrap'
import './App.css';
import Item from './item.js'
import ItemList from "./component/Itemlist"
import Detail from "./component/Detail.js"
import axios from "axios"

let Cart = lazy(()=>{return import('./component/Cart.js')})
export let stockContext = React.createContext();

function App() {
  
  let [item,setItem] = useState((Item));
  let [stock,setStock] = useState([10,11,5,5,12,9,10,3,9]);
  let [more,setMore] = useState(0);

  return (
    <div className="App">
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/react-shopping-mall">봉구의 간식</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/react-shopping-mall">Home</Nav.Link>
            <Nav.Link as={Link} to="/Detail/0">Detail</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Navbar>
      
  <Switch>
        
      <Route exact path="/react-shopping-mall"> 
            <Jumbotron className="background">
              <h1>귀여운 , 댕댕이 봉구</h1>
              <p>
                봉구가 직접 운영하는 애견용품점입니다
              </p>
              {/* <p>
                <Button variant="primary">Learn more</Button>
              </p> */}
            </Jumbotron>
            <stockContext.Provider value={stock}>
            <div className="container">
              
              <div className="row">
                { 
                  item.map((item)=>{
                  return <ItemList key={item.id} item={item}/>
                })}
              
              </div>
              
          
            { more < 1 ? <button onClick={()=>{
            setMore(more+1)
            axios.get('https://daisy0y.github.io/more.json')
            .then((result)=>{
           setItem([...item ,...result.data])

            })
            .catch(()=>{})


              }} className="btn btn-primary">더보기</button>
              : null

            }
            </div>
            </stockContext.Provider>
            </Route>
            <Route path="/detail/:id">
                <Detail item={item} stock={stock} setStock={setStock}/>
            </Route>
            
            <Route path="/cart">
              <Suspense fallback={<div>로딩중입니다.</div>}>
              <Cart></Cart>
              </Suspense>
            </Route>

  </Switch>
  

    </div>
  );
}




export default App;

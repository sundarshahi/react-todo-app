import React, {Component} from 'react';
import uuid from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
class App extends Component{
  render(){
    return (
      <div className=" container">
        <div className="row" >
          <div className="col-10 mx-auto col-md-8 mt-5 ">
            <h3 className="text-capitalize text-centre ">todo Input
            </h3>
            <TodoList/>
            <TodoInput/>
            <TodoItem/>
          </div>
        </div>
      </div>
    );
  }
  
}
export default App;

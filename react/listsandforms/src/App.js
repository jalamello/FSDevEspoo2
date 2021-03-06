import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';
import MyList from './MyList';
class App extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  list:[],
		  id:100,
		  mode:"Add",
		  editItem:{}
	  }
  }
  
  addToList = (item) => {
	if(this.state.mode === "Add") {
	  item.id = this.state.id;
	  let tempId = this.state.id+1;
	  let tempList = []
	  for(let i=0;i<this.state.list.length;i++) {
		  tempList.push(this.state.list[i]);
	  }
	  tempList.push(item);
	  this.setState({
		  list:tempList,
		  id:tempId
	  })
	  console.log(tempList)
  }
	else {
	  let tempList = []
	  for(let j=0;j<this.state.list.length;j++) {
		  if(item.id !== this.state.list[j].id) {
			  tempList.push(this.state.list[j])
		  } else {
			  tempList.push(item)
		  }
	  }
	  this.setState({
		  list:tempList,
		  mode:"Add",
		  editItem:{}
	  })
	}
  }
  
  toEditMode = (id) => {
	  let tempItem = {}
	  let tempId = parseInt(id,10);
	  for(let i=0;i<this.state.list.length;i++) {
		  if(tempId === this.state.list[i].id) {
			  tempItem = this.state.list[i]
		  }
	  }
	  this.setState({
		  mode:"Edit",
		  editItem:tempItem
	  })
  }
  
  removeFromList= (id) => {
	  let tempId = parseInt(id,10);
	  let tempList = [];
	  for(let i=0;i<this.state.list.length;i++) {
		  if(this.state.list[i].id !== tempId) {
			  tempList.push(this.state.list[i])
		  }
	  }
	  this.setState({
		  list:tempList
	  })
  }
  
  render() {
    return (
      <div className="App">
			<MyForm addToList={this.addToList}
			        mode={this.state.mode}
					item={this.state.editItem}/>
			<hr/>
			<MyList list={this.state.list}
					removeFromList={this.removeFromList}
					toEditMode={this.toEditMode}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Jumbotron, Input, Button, Table, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: '',
      items: [],
      filterArr: [],
      modal: false

    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    
  }

  onChange = (e) => {
    this.setState({ task: e.target.value });
  }

  add = (e) => {
    e.preventDefault()
    if (this.state.task != "") {
      this.setState({
        task: '',
        items: [this.state.task, ...this.state.items]
      })
    } else {
      alert("emty Filed")
    }
  }

  removeItem = (e) => {
    var itemsArray = (this.state.items).filter((fe) => {
      return fe !== e.target.value
    })
    this.setState({
      items: itemsArray
    })
  }

  search = (e) => {
    let { items, task } = this.state
    let searchText = task;
    let searchArr = items.filter((sf) => {return sf.indexOf(searchText) !== -1})
    this.setState({filterArr: searchArr})
    this.toggle()
  }

  update = (e) => {
    let changeText = prompt("use text")
    if (changeText !== "") {
      let { items } = this.state;
      let index = e.target.value;
      let done = items[index] = changeText;
      this.setState({ done: changeText })
    } else {
      alert('Emty Field')
    }

  }

  render() {
    return (
      <div className="App">
       
        <div className="App-container ">
        <header className="App-header">
          TODO List Application
        </header>
       
                    <Jumbotron className="App-editor App">
            <div className="App-section-head">
              <Input value={this.state.task} onChange={this.onChange} placeholder="here Type Your Tasks" bsSize="lg" className="App-takeInput" />
              <Button onClick={this.add} className="App-add-btn" color="primary"><i class="fas fa-plus-square"></i> ADD</Button>
              <Button onClick={this.search} className="App-search-btn" color="primary"><i class="fas fa-search"></i> search</Button>

            </div>
          </Jumbotron>

          {/* table start here TODO list Render */}
          {/* {console.log(this.state.items)} */}
    
          <Table className="App-table-data">
            <thead>
              <tr>
                <th><center>Task Discription</center></th>
                <th><center>Delete / Edit</center></th>
              </tr>
            </thead>
            <tbody>
              {(this.state.items).map((el, index) => {
                return <tr key={index.toString()}>
                  <td >{el}</td>
                  <td>
                    <center>
                      <ButtonGroup className="App-edit-del">
                        <Button onClick={this.update} value={index} color="primary" >{this.props.buttonLabel}<i class="fas fa-edit"></i> Edit</Button>
                        <Button onClick={this.removeItem} value={el} color="danger"><i class="fas fa-trash-alt"></i> Delete</Button>
                      </ButtonGroup>
                    </center>
                  </td>
                </tr>
              })}
            </tbody>
          </Table>

        </div>
        {/* bootstrap Modual */}
        <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Search Data</ModalHeader>
          <ModalBody>
            {/* {this.state.searchArr} */}
            <ListGroup>
              {(this.state.filterArr).map((el, index) => {
                return <ListGroupItem>{el}</ListGroupItem>
              })}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>
      

    );
  }
}

export default App;


// <img id="Image" src="https://cdncontribute.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" />
// <img id="Image" src="https://cdncontribute.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg" />
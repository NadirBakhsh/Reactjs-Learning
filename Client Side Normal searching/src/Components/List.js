import React, { Component } from 'react';

class List extends Component {
    constructor() {
        super()
        this.state = {
            list: ['Pakistan', "India", 'Austrial', 'Newland','Pik'],
            result: [],
            text: ''
        }
    }

    search(e) {
        const { list } = this.state;
        const text = e.target.value;
        const result = list.filter((elem) => {
        return elem.substring(0,text.length).toLowerCase() == (text.toLowerCase())
        })

        this.setState({result, text});
    }

    render() {
        const { list, result, text } = this.state;
        const arr = text.length ? result : list;
       
        return (     
            <div>
            <input placeholder="Search..." onChange={this.search.bind(this)}/>
            {arr.map((elem, index) => {
                return <p>{index + 1}) {elem}</p>
            })}
        </div>
        
      )
    }
}

export default List;
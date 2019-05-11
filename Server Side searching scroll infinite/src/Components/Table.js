import React, { Component } from 'react';
import "./Table.css";
export default class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataGet: [],
            headingValue: "",
            result: [],
            text: ''
        }

        this.searching = this.searching.bind(this) // searching function bind
    }

    // i am getin data from getDerivedStateFromProps set in state 
    static getDerivedStateFromProps(props, state) {
        state.dataGet = props.result
        if (props.value === "forces") {
            state.headingValue = 'id';
        } else {
            state.headingValue = 'url';
        }


    }

    // searching function its getting value from input field
    searching(e) {
        const { dataGet } = this.state;
        const text = e.target.value;
        const result = dataGet.filter((element) => {
            return element.name.substring(0, text.length).toLowerCase() === (text.toLowerCase())

        })

        this.setState({ result, text }); // setstate new Data in After searching

    }

    render() {
        const { dataGet, headingValue, result, text } = this.state;
        const arr = text.length ? result : dataGet; // this is condition when searchin variable length 0 display data esle newdate
        return (
            <div>
                {/* this is Input For searching */}
                <input placeholder="Search" onChange={this.searching} className="search-input" />


                <table class="zebra">
                    <thead>
                        <tr>
                            <th><center>S.NO</center></th>
                            <th><center>{headingValue}</center></th>
                            <th>Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* Finally date Render */}
                        {arr.map((e, i) => {
                            return (
                                <tr key={1 + i} >
                                    <td><center>{1 + i}</center></td>
                                    {/* this condition use data rendring forces , crime-categories  */}
                                    {headingValue === "id" ? <td>{e.id}</td> : <td>{e.url}</td>}
                                    <td>{e.name}</td>
                                </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

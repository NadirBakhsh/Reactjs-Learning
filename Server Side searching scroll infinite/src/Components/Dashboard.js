import React, { Component } from 'react';
import swal from 'sweetalert';
import './Table.css'
import './dashboard.css';
import { searchDataCrime, searchDataFroces, screenData } from '../config/api'




export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            crimeList: [],
            forcesList: [],
            crimeCategory: '',
            forcelocation: '',
            finalList: [],
            limit: 15
        }

        this.finalSearchCrime = this.finalSearchCrime.bind(this);
        this.finalSearchFroce = this.finalSearchFroce.bind(this);
        this.searchFinally = this.searchFinally.bind(this);
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {

        try {
            const resultDashBoardCrime = await searchDataCrime();
            const resultDashBoardForces = await searchDataFroces();
            //console.log(resultDashBoard)
            this.setState({
                crimeList: resultDashBoardCrime,
                forcesList: resultDashBoardForces,
            })
        } catch (e) {

            console.log('somevent wrong')
        }
    }

    finalSearchCrime(e) {

        console.log(e.target.value + "<=====c")
        this.setState({ crimeCategory: e.target.value })

    }

    finalSearchFroce(e) {

        console.log(e.target.value + "<=====f")
        this.setState({ forcelocation: e.target.value })
    }

    async  searchFinally() {
        const { crimeCategory, forcelocation } = this.state;

        console.log(crimeCategory, forcelocation)
        const screenResult = await screenData(crimeCategory, forcelocation);
        console.log("screnn =======>", screenResult)
        if (screenResult.length > 0 && (crimeCategory !== "" && forcelocation !== "")) {
            this.setState({ finalList: screenResult })
        } else {
            this.setState({ finalList: [], })
            swal({
                title: "Result Not Found",
                buttons: false,
                text: "",
                timer: 1500,
            });
        }

    }

 onScroll(e) {
    if(e.target.scrollHeight === Math.ceil(e.target.clientHeight + e.target.scrollTop)) {
        this.loadMore();
    }
}

loadMore() {
    console.log('loadmore ==>')
    this.setState({
        limit: this.state.limit + 15
    })
}

    render() {
        const { crimeList, forcesList, finalList } = this.state;
        const { limit } = this.state;
        const temp = [...finalList];
        temp.length = limit;

        return (
            <div className="selectBarHeader">
                <div className="selectBar">
                    <select className="selectDesign" onChange={this.finalSearchCrime}>
                        <option value="">select Category</option>
                        {crimeList.map(item => {
                            return (<option key={item.url} value={item.url}>{item.name}</option>)
                        })}

                    </select>

                    <select className="selectDesign" onChange={this.finalSearchFroce}>
                        <option value="">Select Force</option>
                        {forcesList.map(item => {
                            return (<option key={item.id} value={item.id}>{item.name}</option>)
                        })}
                    </select>
                    <button className='searchBtn' onClick={this.searchFinally} >Search</button>
                    <hr />
                </div>

                <div className="scrollingDiv" onScroll={this.onScroll.bind(this)}>
                    <table>
                        <thead>
                            <tr>
                                <th><center>S.No</center></th>
                                <th><center>Category</center></th>
                                <th><center>Month</center></th>
                                <th><center>Outcome</center></th>

                            </tr>
                        </thead>
                        <tbody>

                            {temp.map((items, index) => {
                                return (
                                    <tr key={`${index}`}>
                                        {console.log(items)}
                                        <td><center>{1 + index}</center></td>
                                        <td>{items.category}</td>
                                        <td>{items.month}</td>
                                        <td>{items.outcome_status.category}</td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>

                </div>
            </div>



        );
    }
}


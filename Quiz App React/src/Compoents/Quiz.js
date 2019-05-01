import React from 'react';


export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getData: "",
            index: 0,
            optionSlected: "",
            result: 0,
            resultShow: false,
            questionShow: true,
            resetBtn : false
       

        }

        this.reset = this.reset.bind(this)
    }

    reultsshow() {
        const { optionSlected, index, result, getData } = this.state;
        if (optionSlected == 3) {
            this.setState({ result: result + 1*100/10 })
            console.log('optin', optionSlected, result);
            //console.log(getData[0].results)
        }
       // console.log((getData[0].results))
        this.setState({ index: index + 1 })
       
        if (index == 9) {
            this.setState({ resultShow: true,
            questionShow: false,
             resetBtn: true, 
            })
        }
    }

    

    reset(){
        this.setState({
             resultShow: false,
             questionShow: true,
             resetBtn: false,
             index: 0,
             result: 0, 
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.quizArr.length) {
            return {
                getData: props.quizArr
            }
        }

    }



    render() {
        const { getData, index, result, resultShow, questionShow,resetBtn } = this.state;
        //console.log(getData)
        //setInterval((e)=>{ this.reultsshow() }, (1000*60));
        return (
            <div className='qwrapper'>

               <center> {resultShow && 'Score ' + result + '%'}</center>

                {questionShow &&
                    getData.map((e,i) => {
                        // console.log(e.results[0].category)
                        return (
                            <div key={i}>
                                <div onChange={(v) => { this.setState({ optionSlected: v.target.value }) }}>
                                    <li>Q.No : {1 + index} . {e.results[index].question}</li>
                                    <li> <input type='radio' name='quiz' value={0} />{e.results[index].incorrect_answers[0]}<br /></li>
                                    <li> <input type='radio' name='quiz' value={1} />{e.results[index].incorrect_answers[1]}<br /></li>
                                    <li> <input type='radio' name='quiz' value={2} />{e.results[index].incorrect_answers[2]}<br /></li>
                                    <li> <input type='radio' name='quiz' value={3} />{e.results[index].correct_answer}<br /></li>
                                </div><br />
                                <button onClick={() => { this.reultsshow() }}>Next</button>
                            </div>
                        )
                    })}

<center><br /><br /> {resetBtn && <button onClick={this.reset}>Reset</button>}</center>
            </div>


        );
    }


}
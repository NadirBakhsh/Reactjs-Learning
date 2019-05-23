import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import FacebookEmoji from 'react-facebook-emoji';
import FbImageLibrary from 'react-fb-image-grid'
import * as moment from 'moment';




class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hover : false,
            timerValue : 0,
        }

        this.onhover = this.onhover.bind(this)
        this.onleave = this.onleave.bind(this)
       this.countLike = this.countLike.bind(this)
    }


onhover(){
    this.setState({hover : true})
}

onleave(){
    this.timer()   
}

timer(){
    setTimeout(() => {
        this.setState({hover : false})
    }, 2500);
}

countLike(){
    this.props.likeCounterFun();
}




    render() { 
        const {hover} = this.state;
        return (
            <div className="PostDiv">
                <Row>
                    <Col className="PostCol" lg="6" sm="12">
                        <Card body>
                            <Row>
                                <Col lg="1" sm="1">
                                    <img src='https://www.gstatic.com/webp/gallery/1.jpg' className="imageSiz" />
                                </Col>
                                <Col lg="6" sm="6" className="userInfo">
                                    <h4>{this.props.userName}</h4>
                                    <p>{moment(this.props.postTime, "YYYYMMDD").fromNow()} <i class="fas fa-globe-asia"></i></p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col lg="12" sm="12">
                                    <p>
                                        {this.props.describe}
                                    </p>
                                </Col>
                            </Row>

                            <div className="imageCollection">
                                
                                <FbImageLibrary countFrom={5} images={this.props.images}/>

                            </div>

                            <hr />
                            <div className="counterDiv">
                                <div>Likes {this.props.likeCounter}</div>
                                <div>{this.props.commentCounter} Comment </div>
                            </div>
                            <hr />
                            <Row className="LikeCommentRow">
                                <div onMouseEnter={this.onhover} onMouseLeave={this.onleave} className="displayReaction" ><i className="far fa-thumbs-up"></i> Like</div>
                                <div><i class="far fa-comment-dots"></i> Comments</div>
                            </Row>
                      { hover &&   <div className="reaction"  >
                                <hr />
                                <Row >
                                   <span onClick={this.countLike}><FacebookEmoji   type="like" size="sm" /></span>
                                    <FacebookEmoji type="love" size="sm" />
                                    <FacebookEmoji type="wow" size="sm" />
                                    <FacebookEmoji type="yay" size="sm" />
                                    <FacebookEmoji type="angry" size="sm" />
                                    <FacebookEmoji type="haha" size="sm" />
                                    <FacebookEmoji type="sad" size="sm" />
                                </Row>
                        </div>}

                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Post;
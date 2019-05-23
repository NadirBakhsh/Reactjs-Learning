import React, { Component } from 'react';
import HomeNav from './HomeNav'
import PostForm from './PostForm'
import Post from '../components/Post'
import { getData,userGetName } from '../config/firebase'


class Wellcomeboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postForm: false,
            postDiv: true,

        }

        this.createPostfun = this.createPostfun.bind(this)
        this.upLoadfun = this.upLoadfun.bind(this)
        this.fetchData = this.fetchData.bind(this)

    }

    createPostfun() {
        this.setState({
            postForm: true,
            postDiv: false,
        })
    }

    upLoadfun() {
        this.setState({
            postForm: false,
            postDiv: true,
        })
    }

    componentWillMount() {
        this.fetchData()
    }

    async fetchData() {
        try {
            const getingData = await getData();
            const userInfo = await userGetName();
            const postStore = [];
            for (var k in getingData) {
                postStore.push(getingData[k])
            }

            this.setState({
                printPost: postStore,
                userInfo : userInfo
            })

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { postForm, postDiv, printPost,userInfo } = this.state

        return (
            <div>
                <div>
                    <HomeNav
                     createPostFun={this.createPostfun}
                      unMountWellcomeBoard={this.props.unMountWellcomeBoard} 
                      upLoadfun={this.upLoadfun}
                      />
                </div>

                {postDiv && printPost && <div className="postDiv">
                    {printPost.map(item => {
                        return (<div>   
                            {
                                <Post
                                key={item.userId}
                                    userName={userInfo[item.userId].name}
                                    postTime={new Date(item.createdAt)}
                                    describe={item.describe}
                                    images={item.imagesArray}
                                    likeCounter={15}
                                    commentCounter={27}
                                />
                            }
                        </div>)
                    })}
                </div>}

                {postForm && <div className="postForm">
                    <PostForm  />
                </div>}
            </div>


        );
    }
}

export default Wellcomeboard;
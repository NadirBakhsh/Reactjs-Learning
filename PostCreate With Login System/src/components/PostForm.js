import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {addPost} from '../config/firebase'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile : null,
        }
        this.onupLoadfun = this.onupLoadfun.bind(this);
        this.fileSelectHandler = this.fileSelectHandler.bind(this);

    }

  onupLoadfun() {
        const {selectedFile,describe} = this.state;
     addPost(selectedFile,describe)
        
        
    }

    fileSelectHandler(e){
       let fileInfo = e.target.files;
        this.setState({
            selectedFile : fileInfo,
        })
    }

    render() {
        const {selectedFile,describe} = this.state;
          
        
        return (
            <div> 
                <br/><br/><br/><br/>    
                <textarea  value={describe} onChange={(e) =>{this.setState({describe : e.target.value})}} placeholder="Type here discripction"></textarea>
                <input style={{display: 'none',}} 
                ref={fileInput => this.fileInput = fileInput}
                type="file" multiple
                 onChange={this.fileSelectHandler} />
                 <center>
                 <br/>
                 <br />
                <Button color="primary" onClick={() => this.fileInput.click() }>Select Images</Button>
                <br />
                <br />
                <Button color="success" onClick={this.onupLoadfun}>Upload</Button>
                </center>
            </div>
        );
    }
}

export default PostForm;
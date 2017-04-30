import React, {Component} from 'react';
import Comment from "./components/Comment";

class App extends Component {
    state = {
        comments: [
            "here is a test comment1",
            "here is a test comment2",
            "here is a test comment3"
        ]
    };

    updateComment = (newText, i) => {
    let arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments: arr});
};
    removeComment = (i) => {
        let arr = this.state.comments;
        arr.splice(i,1);
        this.setState({comments: arr});
    };
        render()
        {
            return (
                <div>
                    {this.state.comments.map((text, i) =>{
                            return (<Comment key={i} index={i} updateComment={this.updateComment} removeComment={this.removeComment}  >{text}</Comment>)
                        })}
                </div>
            );
        }
    }

    export default App;

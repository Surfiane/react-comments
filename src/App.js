import React, {Component} from 'react';
import Comment from "./components/Comment";

class App extends Component {

    state = {
        isNewComment: false,
        comments: []
    };

    updateComment = (newText, i) => {
        let arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr});
    };
    removeComment = (i) => {
        let arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr});
    };

    addComment = (newComment) => {
        let arr = this.state.comments;
        arr.push(newComment);
        this.setState({comments: arr});
    };
    newComment = () => {
        this.setState(prevState => ({
            isNewComment: true
        }))
    };
    saveComment = () => {
        let newTextValue = this.refs.newText.value;
        this.addComment(newTextValue);
        this.setState(prevState => ({
            isNewComment: false
        }))
    };

    addNewCommentForm = () => {
        return (
            <div>
                <div >
                    <textarea ref="newText" defaultValue="Add new Comment"/>
                    <button onClick={this.saveComment}>save</button>
                </div>
                <div>
                    {this.state.comments.map((text, i) => {
                        return (<Comment key={i} index={i} updateComment={this.updateComment}
                                         removeComment={this.removeComment}>{text}</Comment>)
                    })}
                </div>
            </div> )
    };
    normalCommentForm = () => {
        return ( <div>
            <button onClick={this.newComment}>New Comment</button>
            <div>
                {this.state.comments.map((text, i) => {
                    return (<Comment key={i} index={i} updateComment={this.updateComment}
                                     removeComment={this.removeComment}>{text}</Comment>)
                })}
            </div>
        </div> )
    };


    render() {
        if (this.state.isNewComment) {
            return this.addNewCommentForm();
        } else {
            return this.normalCommentForm();
        }
    }
}

export default App;

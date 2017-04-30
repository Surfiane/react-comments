import React, {Component} from 'react';

class Comment extends Component {
    state = {
        isEditing: false,
    };
    editComment = () => {
        this.setState(prevState => ({
            isEditing: true
        }))
    };
    removeComment = () => {

    };

    render() {
        return (
            <div >
                <div>here is the comment</div>
                <button onClick={this.editComment}>Edit</button>
                <button onClick={this.removeComment}>Remove</button>
            </div>
        );
    }
}

export default Comment;


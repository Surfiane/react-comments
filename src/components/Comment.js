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
    this.props.removeComment(this.props.index)
    };

    saveComment = () => {
        let newTextValue = this.refs.newText.value;
        this.props.updateComment(newTextValue,this.props.index);
        this.setState(prevState => ({
            isEditing: false
        }))
    };

    renderNormal = () => {
        return (
            <div >
                <div>{this.props.children}</div>
                <button onClick={this.editComment}>Edit</button>
                <button onClick={this.removeComment}>Remove</button>
            </div>
        )
    };

    renderForm = () => {
        return (
            <div >
                <textarea ref="newText" defaultValue={this.props.children} />
                <button onClick={this.saveComment}>save</button>
            </div>
        )
    };

    render() {
        if (this.state.isEditing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
}

export default Comment;


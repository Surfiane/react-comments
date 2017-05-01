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
            <div className="container" >
                <li className="list-group-item">
                <div>{this.props.children}</div>
                <button type="button"
                        className="btn btn-primary btn-xs"
                        title="Edit"
                        onClick={this.editComment}>
                    <span className="glyphicon glyphicon-pencil"/>
                </button>
                <button type="button"
                        className="btn btn-danger btn-xs"
                        title="Delete" onClick={this.removeComment}>
                    <span className="glyphicon glyphicon-trash"/>
                </button>
                </li>
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


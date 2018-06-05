import React from 'react';
import { connect } from 'react-redux';
import { addTodo , removeTodo , sortTodo } from '../actions';
import './style.css';

class DisplayList extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        var text = this.getText.value;
        this.isRepeat(text) ? alert('shit! repeat') : this.props.add(text);
        this.getText.value = '';
    }

    isRepeat = (text) =>{
        var check = this.props.todos.find((todo) => {
            return (todo.text.indexOf(text) === 0)
        })
        return check == null ? false : true;
    }
    
    handleRemove = (text) => {
        this.props.remove(text);
    }

    sorting = (todos) => {
        this.props.sort(todos)
    }

    render(){
        return(
            <div>
                <button type="button" className="button is-dark sort" onClick={() => this.sorting(this.props.todos)}>sort</button>
                <form onSubmit={this.handleSubmit}>
                    <div className="field has-addons ">
                        <div className = "control" >
                            <input type="text" className="input" ref={(input)=> this.getText = input } placeholder="text"/>
                        </div>
                         <div className = "control" >
                            <button type="submit" className="button is-primary">add</button>
                        </div>
                    </div>
                </form>
                <br />
                <div className="panel">
                    { this.props.todos.map((todo, key) => {
                            return (<div className = "panel-block" key = { key }> 
                                { todo.text } 
                            <div className="button is-small is-danger remove " onClick={()=>this.handleRemove(todo.text)}>remove</div>
                        </div>) 
                    }) }
                </div>
            </div>
        )
    }
} 

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    add: addTodo,
    remove: removeTodo,
    sort: sortTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
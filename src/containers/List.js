import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../containers/ItemList';
import SearchBar from '../containers/SearchBar';
import './style.css';
import { addTodo, removeTodo } from '../actions';

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            sortType: 'default',
            searchInput: ''
        }
    }

    isRepeat = (text) => {
        return this.props.datas.todos.every((todo) => {
            return todo.text.toLowerCase() !== text.toLowerCase()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var text = this.state.input
        if (this.isRepeat(text)) {
            console.log(typeof (text))
            this.props.add(text)
            this.setState({ input: '' })
        } else {
            alert('Repeat')
            this.setState({ input: '' })
        }
    }

    handleOnchange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleOnchangeSearch = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    handleRemove = (text) => {
        this.props.remove(text)
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <form onSubmit={this.handleSubmit}>
                            <div className="field has-addons ">
                                <div className="control" >
                                    <input type="text" className="input" value={this.state.input} onChange={this.handleOnchange} placeholder="text" />
                                </div>
                                <div className="control" >
                                    <button type="submit" className="button is-primary">add</button>
                                </div>
                            </div>
                        </form>
                        <br />
                    </div>
                    <div className="column">
                        <SearchBar value={this.state.searchInput} onChange={this.handleOnchangeSearch} />
                    </div>
                </div>
                <ItemList datas={this.props.datas} searchInput={this.state.searchInput} handleRemove={this.handleRemove} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        datas: state.datas
    }
}

const mapDispatchToProps = {
    remove: removeTodo,
    add: addTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
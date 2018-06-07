import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../containers/ItemList';
import './style.css';
import { addTodo, removeTodo } from '../actions';

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            sortType: 'default',
            datasUpdate: []
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
            this.props.add(text)
            this.setState({ input: '', datasUpdate: [...this.props.datas.todos, { text }] }) // initail state
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
        const update = this.props.datas.todos.filter((todo) =>
            (todo.text.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
        this.setState({ datasUpdate: update })
    }

    handleRemove = (text) => {
        this.setState({ datasUpdate: this.props.datas.todos })
        this.props.remove(text)
    }

    sorting = () => {
        const { datasUpdate } = this.state
        this.setState({
            sortType: 'asc'
            , datasUpdate: datasUpdate.sort((a, b) => (a.text > b.text))
        }) // asc
        if (this.state.sortType === 'asc') {
            this.setState({
                sortType: 'desc'
                , datasUpdate: datasUpdate.sort((a, b) => (a.text < b.text))
            }) // desc
        }
    }

    render() {
        const { sortType, datasUpdate } = this.state
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
                        <div className="control" >
                            <input type="text" className="input" placeholder="search" value={this.state.searchInput} onChange={this.handleOnchangeSearch} />
                        </div>
                        <br />
                    </div>
                    <div className="column">
                        <button type="button" className="button is-dark" onClick={this.sorting}>sort : {sortType}</button>
                    </div>
                </div>
                <ItemList datas={datasUpdate} title="List of todos" hasButton={true} handleRemove={this.handleRemove} />
                <ItemList datas={this.props.datas.history} title="List of history" hasButton={false} />
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
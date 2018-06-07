import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../containers/ItemList';
// import Search from '../containers/Search';
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

    handleSubmit = (e) => {
        e.preventDefault();
        var text = this.state.input
        var check = this.isRepeat(text) === undefined
        if (check && text !== '') {
            this.props.add(text)
            this.setState({ input: '' })
        } else {
            alert('shit! repeat/null')
            this.setState({ input: '' })
        }
    }

    handleOnchange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleOnchangeSearch = (e) => {
        const update = this.props.datas.todos.find((todo) =>
            todo.text === e.target.value)
        this.setState({ datasUpdate: update === undefined ? [] : [update] })
    }

    handleRemove = (text) => {
        this.props.remove(text)
        this.setState({ datasUpdate: [] })
    }


    isRepeat = (text) => {
        return this.props.datas.todos.find((todo) => {
            return todo.text === text
        })
    }

    sorting = () => {
        this.setState({ sortType: 'asc' })
    }

    getSort = (todo) => {
        return todo.sort((a, b) => (a.text > b.text)) // asc
    }

    render() {
        const { datas } = this.props
        const { sortType, datasUpdate } = this.state
        const todosSorted = this.state.sortType !== 'default' ? this.getSort(datas.todos) : datas.todos
        return (
            <div>
                <div>
                    <div className="control" >
                        <input type="text" className="input" placeholder="search" value={this.state.searchInput} onChange={this.handleOnchangeSearch} />
                    </div>
                    <br />
                </div>
                <button type="button" className="button is-dark sort" onClick={this.sorting}>sort : {sortType}</button>
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
                <ItemList datas={datasUpdate.length > 0 ? datasUpdate : todosSorted} title="List of todos" hasButton={true} handleRemove={this.handleRemove} />
                <ItemList datas={datas.history} title="List of history" hasButton={false} />
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
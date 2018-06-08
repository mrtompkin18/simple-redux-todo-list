import React from 'react';
import PropTypes from 'prop-types'

const ItemsPropTypes = PropTypes.shape({
    text: PropTypes.string.isRequired
})

const propTypes = {
    datas: PropTypes.shape({
        todos: PropTypes.arrayOf(ItemsPropTypes).isRequired
    })
}

class ItemList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortType: 'default'
        }
    }

    sorting = () => {
        this.setState({ sortType: 'asc' })
        if (this.state.sortType === 'asc') {
            this.setState({ sortType: 'desc' })
        }
    }


    getSort = (datas) => {
        if (this.state.sortType === 'asc') {
            return datas.sort((a, b) => a.text > b.text)
        } else if (this.state.sortType === 'desc') {
            return datas.sort((a, b) => a.text < b.text)
        } else {
            return datas
        }
    }

    renderSearchItemList = (datas, searchInput) => {
        const searchList = this.getSort(datas).filter((data) => {
            return (data.text.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
        })

        if (searchList.length > 0) {
            return searchList.map((data, key) => {
                return (<div className="panel-block" key={key}>
                    {data.text}
                    <div className="button is-small is-danger remove " onClick={() => { this.props.handleRemove(data.text) }}>remove</div>
                </div>)
            })
        } else {
            return (<div className="panel-block title is-4"> Not found datas </div>)
        }
    }

    renderHistory = (datas) => {
        if (datas.length > 0) {
            return datas.map((data, key) => {
                return (<div className="panel-block" key={key}>
                    {data.text}
                </div>)
            })
        } else {
            return (<div className="panel-block title is-4"> Not found datas </div>)
        }
    }

    render() {
        return (
            <div>
                <div className="panel">
                    <div className="panel-heading" > List of todos
                        <button type="button" className="button is-dark  is-normal sort" onClick={this.sorting}>sort : {this.state.sortType}</button>
                    </div>
                    {this.renderSearchItemList(this.props.datas.todos, this.props.searchInput)}
                </div>
                <div className="panel">
                    <div className="panel-heading" > List of history </div>
                    {this.renderHistory(this.props.datas.history)}
                </div>
            </div>
        )
    }
}


export default ItemList;
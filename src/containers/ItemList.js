import React from 'react';
class ItemList extends React.Component {

    hasButton = (text) => {
        if (this.props.hasButton) {
            return (
                <div className="button is-small is-danger remove " onClick={() => { this.props.handleRemove(text) }}>remove</div>
            )
        }
    }

    renderItemList = () => {
        const { datas } = this.props
        if (datas.length > 0) {
            return datas.map((data, key) => {
                return (<div className="panel-block" key={key}>
                    {data.text}
                    {this.hasButton(data.text)}
                </div>)
            })
        } else {
            return (
                <div className="panel-block title is-4" > Not have data.</div>
            )
        }

    }

    render() {
        return (
            <div className="panel">
                <p className="panel-heading" > {this.props.title} </p>
                {this.renderItemList()}
            </div>
        )
    }
}


export default ItemList;
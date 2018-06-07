import React from 'react';
class ItemList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        this.setState({ datas: this.props.datas })
    }

    hasButton = (text) => {
        if (this.props.hasButton) {
            return (
                <div className="button is-small is-danger remove " onClick={() => { this.props.handleRemove(text) }}>remove</div>
            )
        }
    }

    renderItemList = () => {
        const { datas } = this.state
        return datas.map((data, key) => {
            return (<div className="panel-block" key={key}>
                {data.text}
                {this.hasButton(data.text)}
            </div>)
        })
    }

    render() {
        console.log(this.state.datas)
        return (
            <div className="panel">
                <p className="panel-heading" > {this.props.title} </p>
                {this.renderItemList()}
            </div>
        )
    }
}


export default ItemList;
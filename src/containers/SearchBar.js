import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { value, handleOnChange } = this.props
        return (
            <div>
                <div className="control" >
                    <input type="text" className="input" placeholder="search" value={value} onKeyUp={handleOnChange} />
                </div>
                <br />
            </div>
        )
    }
}
export default SearchBar;
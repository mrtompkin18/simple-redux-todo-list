import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onChange: PropTypes.func
}

const defaultProps = {
    onChange: () => { }
}

class SearchBar extends React.Component {
    render() {
        const { onChange } = this.props
        return (
            <div>
                <div className="control" >
                    <input type="text" className="input" placeholder="search" onChange={onChange} />
                </div>
                <br />
            </div>
        )
    }
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
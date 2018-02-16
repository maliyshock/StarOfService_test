import React, { Component, PropTypes } from 'react'

export default class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'Choose wisely',
            open: false,
        };
    }

    handleItem(event) {
        const name = this.props.name;
        const value = event.target.innerText;

        this.hideDropdown();

        this.setState({value: value});

        this.props.handler(
            {name: name, value: value}
        );
    }

    showDropdown() {
        this.setState({open: true});
    }

    hideDropdown() {
        this.setState({open: false});
        document.activeElement.blur();
    }


    render() {
        let options = [];
        const value = this.state.value;
        const selectClassNames = this.state.open ? 'select opened' : 'select';
        this.props.options.forEach(
            (currentValue) => {options.push(<li onClick={::this.handleItem} key={currentValue} className='select__item'>{currentValue}</li>)}
        );

        return (
            <div
                className={selectClassNames}
                onBlur={() => this.hideDropdown()}
                onFocus={() => this.showDropdown()}
                tabIndex={this.props.tabIndex}
            >
                <div className='select__value'>{value}</div>
                {this.state.open &&
                    <ul className='select__droplist'>
                        {options}
                    </ul>
                }
            </div>
        )
    }
}

Select.propTypes = {
    handler: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
}


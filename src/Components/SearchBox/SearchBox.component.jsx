import { Component } from 'react';
import './SearchBox.styles.css'

class SearchBox extends Component {
	render() {
		const { className, placeholder, onChangeHandler } = this.props;
		return (
			<input type="search" className={className} placeholder={placeholder} onChange={onChangeHandler} />
		)
	}
}

export default SearchBox;
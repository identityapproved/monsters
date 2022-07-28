import { ChangeEvent, /* ChangeEventHandler */ } from 'react';
import './SearchBox.styles.css';

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	/* onChangeHandler: ChangeEventHandler<HTMLInputElement>; */
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
	<input
		type="search"
		className={`search-box ${className}`}
		placeholder={placeholder}
		onChange={onChangeHandler} />
);

export default SearchBox;
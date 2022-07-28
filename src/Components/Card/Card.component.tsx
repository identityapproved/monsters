import { Monster } from '../../App';
import './Card.styles.css';

type CardProps = {
	monster: Monster;
};

const Card = ({ monster }: CardProps) => {
	const { id, name, email } = monster;

	return (
		<div key={id} className='card-container'>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=123x123`}

			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};


export default Card;
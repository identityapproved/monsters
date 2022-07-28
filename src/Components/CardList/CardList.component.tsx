import Card from '../Card/Card.component';
import './CardList.styles.css';
import { Monster } from '../../App';

type CardListProps = {
	monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
	return (
		<div className='card-list'>

			{monsters.map((monster) => {
				return <Card monster={monster} />;
			}
			)}
		</div>
	);
};

export default CardList;
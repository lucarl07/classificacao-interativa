/* eslint-disable react/prop-types */
import Icon from '../Icon/Icon';
import './Card.css'

const Card = ({title, value}) => {
  return (
    <>
      <section className='card'>
        <Icon/>
        <h1>{title}</h1>
        <p>{value}</p>
      </section>
    </>
  );
}

export default Card;
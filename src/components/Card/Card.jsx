/* eslint-disable react/prop-types */
import Icon from '../Icon/Icon';
import ModalRating from '../ModalRating/ModalRating';
import './Card.css'

const Card = ({title, value}) => {
  return (
    <>
      <section className='card'>
        <Icon/>
        <h1>{title}</h1>
        <p>{value}</p>
        <ModalRating/>
      </section>
    </>
  );
}

export default Card;
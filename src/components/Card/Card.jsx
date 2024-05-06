/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({title, value}) => {
  return (
    <>
      <section className='card'>
        <h1>{title}</h1>
        <p>{value}</p>
      </section>
    </>
  );
}

export default Card;
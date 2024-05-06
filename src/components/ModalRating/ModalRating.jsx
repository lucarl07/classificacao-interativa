import ModalButton from '../ModalButton/ModalButton';
import './ModalRating.css'

const ModalRating = () => {
  const preventSubmit = (event) => {
    event.preventDefault()
    console.log(event);
  }

  return (
    <form onSubmit={preventSubmit}>
      <ModalButton value='1' />
      <ModalButton value='2' />
      <ModalButton value='3' />
      <ModalButton value='4' />
      <ModalButton value='5' />
    </form>
  );
}

export default ModalRating;
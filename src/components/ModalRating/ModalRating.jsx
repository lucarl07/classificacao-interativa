import ModalButton from '../ModalButton/ModalButton';
import Submit from '../Submit/Submit';
import './ModalRating.css'

const ModalRating = () => {
  const preventSubmit = (event) => {
    event.preventDefault()
    console.log(event);
  }

  return (
    <form onSubmit={preventSubmit}>
      <div>
        <ModalButton value='1' />
        <ModalButton value='2' />
        <ModalButton value='3' />
        <ModalButton value='4' />
        <ModalButton value='5' />
      </div>
      <Submit />
    </form>
  );
}

export default ModalRating;
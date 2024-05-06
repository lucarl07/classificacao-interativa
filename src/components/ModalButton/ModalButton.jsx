/* eslint-disable react/prop-types */
import React from 'react';
import './ModalButton.css'

const ModalButton = ({value}) => {
  const [active, setActive] = React.useState(false)
  const bgColor = active === true? 'var(--orange)' : 'hsl(216, 12%, 20%)'
  const fontColor = active === true? 'var(--white)' : 'var(--medium-grey)'

  return (
    <>
      <button
        className='modalBtn'
        style={{ 
          backgroundColor: bgColor,
          color: fontColor
        }}
        onClick={() => setActive(!active)}
      >
        {value}
      </button>
    </>
  );
}

export default ModalButton;
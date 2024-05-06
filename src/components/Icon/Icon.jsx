import starSvg from '../../assets/images/icon-star.svg';
import './Icon.css'

const Icon = () => {
  return (
    <div className='icon'>
      <img src={starSvg} alt="Star icon for the avaliation page" />
    </div>
  );
}

export default Icon;
import css from './Loader.module.css';
import { useSelector } from 'react-redux';
import { selectLoader } from 'redux/selectors';

const Loader = () => {
  const loader = useSelector(selectLoader);

  return loader ? <div className={css.loader}></div> : null;
};

export default Loader;

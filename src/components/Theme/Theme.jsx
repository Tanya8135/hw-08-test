import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/themeSlice';
import { selectTheme } from 'redux/selectors';
import { useEffect } from 'react';

import css from './Theme.module.css';

const Theme = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectTheme);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('darkTheme');
      document.body.classList.remove('lightTheme');
    } else {
      document.body.classList.remove('darkTheme');
      document.body.classList.add('lightTheme');
    }
  }, [darkTheme]);

  return (
    <div>
      <button className={css.btnTheme} onClick={() => dispatch(toggleTheme())}>
        Theme: {darkTheme ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default Theme;

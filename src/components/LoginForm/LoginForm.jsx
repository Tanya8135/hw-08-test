import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import InputAdornments from 'components/InputLibStyle';

import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <p>Email</p>
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        <p>Password</p>
        <InputAdornments>
          <input type="password" name="password" className={css.int} required />
        </InputAdornments>
      </label>
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;

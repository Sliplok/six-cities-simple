import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFound() : JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <h1>404. Page not found</h1>
          <div className="locations">
            <Link className="locations__item-link" to="/">
              <span>Вернуться на главную</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;

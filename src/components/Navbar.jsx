import React from 'react';
import { Link } from 'react-router-dom';
import LanguageChoice from './Language/LanguageChoice';
import { FormattedMessage } from 'react-intl';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <FormattedMessage id="Navbar.home" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              <FormattedMessage id="Navbar.agency" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Works" className="nav-link">
              <FormattedMessage id="Navbar.works" />
            </Link>
          </li>
        </ul>
        <LanguageChoice />
      </div>
    </nav>
  </>
);

export default Navbar;

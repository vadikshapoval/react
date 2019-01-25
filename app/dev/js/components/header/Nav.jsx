import React from 'react';

export class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return <React.Fragment>
      <button className="nav-trigger" type="button">
        menu
      </button>
      <nav className="nav">
        <a className="nav__link">Home</a>
        <a className="nav__link">About</a>
      </nav>
      <div className="nav-overlay"></div>
    </React.Fragment>;
  }
}

export default Nav;

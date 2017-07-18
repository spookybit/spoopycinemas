import React from 'react';
import { Link } from 'react-router-dom';

class Heading extends React.Component {
  constructor(props){
    super(props);

  }

  logStatus() {
    const {currentUser} = this.props;
    return currentUser ? this.signedIn(currentUser) : this.signedOut();
  }

  signedIn() {
    return (
      <div>
        <button>Logout</button>
      </div>
    );
  }

  signedOut() {
    return (
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    );
  }

  render() {
    return(
      <div>
        <Link to="/">
          <p>LogoImg</p>
        </Link>
        {this.logStatus()}
      </div>
    );
  }
}

export default Heading;

import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userId: null,
    }

    this.login = this.login.bind(this);
  }

  login() {
    window.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        const userId = response.authResponse.userID;
        this.setState({isLoggedIn: true});
        window.FB.api('/me', (response) => {        
          axios.post('/users/signin', {
            userId: userId
          });
        });
      } else {
        this.setState({isLoggedIn: false});
      }

      console.log(this.state.isLoggedIn);
    });
  }

  componentDidMount() {
    document.addEventListener('FBObjectReady', this.login);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.login);
  }

  logout() {
    window.FB.logout((response) => {
      if (response.status === 'unknown') {
        this.setState({isLoggedIn: false});
      }
    });
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="fb-login-button" data-max-rows="1" data-size="large"
          data-button-type="continue_with" data-show-faces="false"
          data-auto-logout-link="false" data-use-continue-as="false"></div>
      );
    } else {
      return (
        <Button variant="contained"
          color="secondary"
          onClick={() => this.logout()}>
          Logout
        </Button>
      )
    }
  }
}

export default Auth;

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
  }

  componentDidMount() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId      : process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie     : true,
        xfbml      : true,
        version    : process.env.REACT_APP_FACEBOOK_APP_VERSION
      });

      window.FB.AppEvents.logPageView();

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
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
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

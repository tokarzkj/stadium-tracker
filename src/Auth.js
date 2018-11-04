import React, {Component} from 'react'

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
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
          this.setState({isLoggedIn: true});
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
    debugger;
    window.FB.logout(function (response) {
      console.log('logged out');
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
        <div target="_top" onClick={() => this.logout()}>log out</div>
      )
    }
  }
}

export default Auth;

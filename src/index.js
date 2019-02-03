import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';

window.fbAsyncInit = () => {
  window.FB.init({
    appId      : process.env.REACT_APP_FACEBOOK_APP_ID,
    cookie     : true,
    xfbml      : true,
    version    : process.env.REACT_APP_FACEBOOK_APP_VERSION
  });

  const fbInitEvent = new Event('FBObjectReady');
  document.dispatchEvent(fbInitEvent);
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

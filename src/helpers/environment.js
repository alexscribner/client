let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1': 
        APIURL = 'http://localhost:3001';
        break;
    case 'was-pawsagram-client.herokuapp.com':
        APIURL = 'https://was-pawsagram.herokuapp.com';
}
export default APIURL;
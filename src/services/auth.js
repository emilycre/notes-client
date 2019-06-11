import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-jcagc64z.auth0.com',
  clientID: '7cRwH4Qiw4YLvT1YCu4b1Ht3iyfQxn6T',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Unable to get user profile.');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Unable to log in.');
      }
    });
  });
};

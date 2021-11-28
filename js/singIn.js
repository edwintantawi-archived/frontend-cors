import { server_origin } from './config.js';

const placeholder = document.getElementById('placeholder');
const getToken = document.getElementById('get-token');

getToken.addEventListener('click', async () => {
  const response = await fetch(`${server_origin}/api/auth/login`, {
    mode: 'cors', // [accept cors] [cors is default]
    credentials: 'include', // [allowed cookie and Auhorization]
  });

  const { message } = await response.json();

  placeholder.innerText = message;
});

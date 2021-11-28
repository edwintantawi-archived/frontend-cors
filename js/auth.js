import { server_origin } from './config.js';

const auth = async () => {
  const placeholder = document.getElementById('placeholder');
  const response = await fetch(`${server_origin}/api/auth`, {
    mode: 'cors', // [accept cors] [cors is default]
    credentials: 'include', // [allowed cookie and Auhorization]
  });

  const responseJson = await response.json();

  let template = '';
  for (const [key, value] of Object.entries(responseJson)) {
    template += `<li>${key} = <b>${value}</b></li>`;
  }

  placeholder.innerHTML = template;
};

auth();

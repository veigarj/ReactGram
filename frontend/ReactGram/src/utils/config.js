export const api = 'http://localhost:5000/api';
export const uploads = 'http://localhost:5000/uploads';

// token = null para começar sem user autenticado
// image = null para começar comimagem vazia e configurar pelo envio
export const requestConfig = (method, data, token = null, image = null) => {
  // variavel config vai mudar baseado na requisiçao
  let config;

  // se vem imagem vem os dados como (form data)
  if (image) {
    config = {
      method: method,
      body: data,
      headers: {},
    };
    // se o method vem DELETE ou nao vem dados
  } else if (method === 'DELETE' || data === null) {
    config = {
      method: method,
      headers: {},
    };
    // quando vem dados - vem os dados como json
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  // verifica se veio o tokem e configura o header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

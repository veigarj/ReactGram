import { api, requestConfig } from '../utils/config';

// Register an user
const register = async (data) => {
  const config = requestConfig('POST', data);

  try {
    const res = await fetch(api + '/users/register', config)
      // recebe dados e coverte para json
      .then((res) => res.json())
      // se der erro retorna o erro
      .catch((err) => err);

    // se o res for true, salva o user no localstorage,
    if (res) {
      localStorage.setItem('user', JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
};

export default authService;

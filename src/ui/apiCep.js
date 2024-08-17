export const ApiCep = async (cep) => {
  return await fetch(`https://viacep.com.br/ws/${cep}/json/`);
};

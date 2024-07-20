export const FooterUl = ({ lista, titulo, classe, address, contato }) => {
  if (address) {
    return (
      <div className={classe}>
        <h2>{titulo}</h2>
        <address>{address}</address>
        <p>{contato}</p>
      </div>
    );
  }

  return (
    <div className={classe}>
      <h2>{titulo}</h2>
      <ul>
        {lista.map((nome) => (
          <li>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

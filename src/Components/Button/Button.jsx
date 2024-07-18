import "./button.css"
export const Button = ({nome, link}) => {
  return (
    <> 
      <div className="button-container">
         <a href={link}><button className="main-button">{nome}</button></a> 
      </div>
    </>
  );
};
import "./button.css"
export const Button = ({nome, style, type}) => {
  return (
    <> 
      <div className="button-container">
         <button className={"main-button " + style} type={type}>{nome}</button>
      </div>
    </>
  );
};
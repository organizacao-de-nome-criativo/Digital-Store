import "./button.css"
export const Button = ({nome, link, style}) => {
  return (
    <> 
      <div className="button-container">
         <a href={link}><button className={"main-button " + style}>{nome}</button></a> 
      </div>
    </>
  );
};
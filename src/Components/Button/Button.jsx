import "./button.css"
export const Button = ({nome, link, style, type, remove}) => {
  // console.log(remove)
  // if(!remove){
  //   localStorage.removeItem('auth')
  // }
  console.log(typeof remove)

  return (
    <> 
      <div className="button-container">
         <button className={"main-button " + style} type={type}>{nome}</button>
      </div>
    </>
  );
};
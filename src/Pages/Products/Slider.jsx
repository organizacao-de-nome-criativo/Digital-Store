
import "./Slider.css"
export const Slider = ({imagem,classe, }) => {
   
    return(
        <div className="imagens">
            {imagem.map((imagem,index)=> (
               
              <div className={`imagem-card ` + classe[index]} >
                  <img src={`/${imagem}`} alt="" />
                
              </div>
            )

            )}
        
        </div>
    )

}
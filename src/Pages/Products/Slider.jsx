
import "./Slider.css"
export const Slider = ({imagem,classe}) => {
    console.log(imagem)
    return(
        <div className="imagens">
            {imagem.map((imagem,index)=> (
               
              <div className={classe[index]}>
                  <img src={`/${imagem}`} alt="" />

              </div>
            )

            )}
        
        </div>
    )

}
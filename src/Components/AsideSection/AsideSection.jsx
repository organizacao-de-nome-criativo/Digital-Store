import "./aside.css"
export const AsideSection = () => {
    const titulos  = [
        'Marca' ,
        'Categoria',
        'Gênero',
        'Estado'

    ]
    return (
       <aside className="side-bar-body">
        {titulos.map((item) => (
            <div className="container-aside">
                <h2>{item}</h2>
                <ul>
                    
                </ul>
                <span className="paragraph"></span>
            </div>
        ))}
       </aside>
    );
};
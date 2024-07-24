import "./aside.css";

export const AsideSection = () => {
  return (
    <aside className="aside-bar-body">
      <div>
        <div className="aside-title-container">
          <h2>Filtrar por</h2>
        </div>
        <div>
          <h3 className="aside-subtitle">Marca</h3>
          <div>
            <input type="checkbox" />
            <span>Adidas</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Balenciaga</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>K-Swiss</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Nike</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Puma</span>
          </div>
        </div>
        <div>
          <h3 className="aside-subtitle">Categoria</h3>
          <div>
            <input type="checkbox" />
            <span>Esporte e Lazer</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Casual</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Utilitário</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Corrida</span>
          </div>
        </div>
        <div>
          <h3 className="aside-subtitle">Gênero</h3>
          <div>
            <input type="checkbox" />
            <span>Masculino</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Feminino</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Unisex</span>
          </div>
        </div>
        <div>
          <h3 className="aside-subtitle">Estado</h3>
          <div>
            <div>
              <input type="checkbox" className="aside-estado-input"/>
              <span>Novo</span>
            </div>
            <div>
              <input type="checkbox" className="aside-estado-input"/>
              <span>Usado</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

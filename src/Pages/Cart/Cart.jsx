import "./Cart.css";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { Count } from "../../Components/Count/Count";
import { useEffect, useState } from "react";
import { RotaSegura } from "../../services/AuthUser";
import { useParams } from "react-router-dom";
import { Pedidos } from "../../services/Pedidos";

let carrinho1 = [
  {
    id: 1,
    imgUrl:
      "https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9",
    titulo: "Tênis Nike Revolution 6 Next Nature Masculino",
    cor: "Vermelho",
    tamanho: "42",
    preco: 119.0,
  },
  {
    id: 2,
    imgUrl:
      "https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9",
    titulo: "Tênis Nike Revolution 6 Next Nature Masculino",
    cor: "Azul",
    tamanho: "43",
    preco: 219.0,
  },
  {
    id: 3,
    imgUrl:
      "https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9",
    titulo: "Tênis Nike Revolution 6 Next Nature Masculino",
    cor: "Azul",
    tamanho: "43",
    preco: 319.0,
  },
  {
    id: 4,
    imgUrl:
      "https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9",
    titulo: "Tênis Nike Revolution 6 Next Nature Masculino",
    cor: "Azul",
    tamanho: "43",
    preco: 79.0,
  },
];

export const Cart = () => {
  const [carrinhoBanco, SetCarrinhoBanco] = useState([]);
  const { Id } = useParams();

  const { Auth } = RotaSegura();
  useEffect(() => {
    Auth().then(async (data) => {
      const { id } = data;
      const ProductID = parseInt(Id);
      const pedido = new Pedidos(id, ProductID, "");
      const carrinho = await pedido.RenderOrders();
    });
  }, []);
  console.log(carrinhoBanco);

  const [newPrice, setNewPrice] = useState(
    carrinho1.map((produto) => produto.preco)
  );
  console.log(newPrice);
  const [showTotal, setShowTotal] = useState(0);

  useEffect(() => {
    const total = () => {
      const totalOrder = [...newPrice];
      console.log(`o valor depois da mudança`, newPrice);

      const totalValue = totalOrder.reduce(
        (acc, currentValue) => currentValue + acc,

        0
      );
      setShowTotal(totalValue.toFixed(2));
    };
    total();
  }, [newPrice]);

  const handleNewCount = async (index, newCount) => {
    Auth()
      .then(async (data) => {
        const { id } = data;
        const pedido = new Pedidos(id, index, newCount);
        await pedido.ReplaceOrders();
      })
      .catch((err) => console.log(err));
    const newCarrinho = [...newPrice];
    console.log(`o valor antes da mudança`, newPrice);
    newCarrinho[index] = newCount * carrinho1[index].preco;

    setNewPrice(newCarrinho);
    return newCount;
  };

  return (
    <>
      <Header />
      <div className="main-cart ">
        <div className="data-cart container">
          <div className="card-sell">
            <table className="customTable ">
              <thead>
                <tr>
                  <th>Meu carrinho</th>
                  <th>Quantidade</th>
                  <th>Unitario</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {carrinho1.map((produto, index) => (
                  <tr key={index}>
                    <td>
                      <img src={produto.imgUrl} alt="" />
                      <div className="data-product">
                        <h5 className="product-name">{produto.titulo}</h5>
                        <p>Cor: {produto.cor}</p>
                        <p>Tamanho: {produto.tamanho}</p>
                      </div>
                    </td>
                    <td>
                      <Count
                        onChange={(newCount) => handleNewCount(index, newCount)}
                      />
                    </td>
                    <td>
                      <p>{produto.preco.toFixed(2)}</p>
                    </td>
                    <td>
                      <p>{newPrice[index].toFixed(2)}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="addictionais-informations container">
              <div className="discount-cep">
                <h5>Cupom de desconto</h5>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Insira o seu código"
                />
                <button>ok</button>
              </div>
              <div className="discount-cep">
                <h5>Calcular Frete</h5>
                <input type="text" name="" id="" placeholder="Insira seu CEP" />
                <button>ok</button>
              </div>
            </div>
          </div>
        </div>
        <div className="asside">
          <h3>Resumo</h3>
          <div className="order-summary">
            <p>Subtotal</p>
            <p>R$ 219,00</p>
          </div>
          <div className="order-summary">
            <p>Frete</p>
            <p>R$ 0,00</p>
          </div>
          <div className="order-summary">
            <p>Desconto</p>
            <p>R$ 0,00</p>
          </div>
          <div className="total">
            <div className="value-order">
              <h4>Total</h4>
              <h4>R$ {showTotal}</h4>
            </div>
            <button>Continuar</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

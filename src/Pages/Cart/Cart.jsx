import './Cart.css'
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { Count } from '../../Components/Count/Count'
import { useState } from 'react'

const carrinho = [
    {
        id: 1,
        imgUrl: 'https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9',
        titulo: 'Tênis Nike Revolution 6 Next Nature Masculino',
        cor: 'Vermelho',
        tamanho: '42',
        preco: 119.00
    },
    {
        id: 2,
        imgUrl: 'https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9',
        titulo: 'Tênis Nike Revolution 6 Next Nature Masculino',
        cor: 'Azul',
        tamanho: '43',
        preco: 219.00
    },
    {
        id: 3,
        imgUrl: 'https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9',
        titulo: 'Tênis Nike Revolution 6 Next Nature Masculino',
        cor: 'Azul',
        tamanho: '43',
        preco: 319.00
    }
]


export const Cart = () => {
    const [newPrice, setNewPrice] = useState(carrinho.map(produto => produto.preco))
    
    
    const handleNewCount = (index, newCount) =>{
        const newCarrinho = [...newPrice]
        newCarrinho[index] = newCount * carrinho[index].preco
        setNewPrice(newCarrinho)
    }


    return (
        <>
            <Header />
            <div className="main-cart ">
                <div className="data-cart container">
                    <div className='card-sell'>
                        <table className='customTable '>
                            <thead>
                                <tr>
                                    <th>Meu carrinho</th>
                                    <th>Quantidade</th>
                                    <th>Unitario</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrinho.map((produto, index) => (
                                <tr key={index}>
                                    <td >
                                        <img src={produto.imgUrl} alt="" />
                                        <div className='data-product'>
                                            <h5 className='product-name'>{produto.titulo}</h5>
                                            <p>Cor: {produto.cor}</p>
                                            <p>Tamanho: {produto.tamanho}</p>
                                        </div>
                                    </td>
                                    <td><Count onChange={(newCount) => handleNewCount(index, newCount)}/></td>
                                    <td><p>{produto.preco.toFixed(2)}</p></td>
                                    <td><p>{newPrice[index].toFixed(2)}</p></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="addictionais-informations container">
                            <div className="discount-cep">
                                <h5>Cupom de desconto</h5>
                                <input type="text" name="" id="" placeholder='Insira o seu código'/>
                                <button>ok</button>
                            </div>
                            <div className="discount-cep">
                                <h5>Calcular Frete</h5>
                                <input type="text" name="" id="" placeholder='Insira seu CEP'/>
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
                        <div className='value-order'>
                            <h4>Total</h4>
                            <h4>219,00</h4>
                        </div>
                        <button>Continuar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
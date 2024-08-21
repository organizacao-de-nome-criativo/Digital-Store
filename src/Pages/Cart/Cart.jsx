import './Cart.css'
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { Count } from '../../Components/Count/Count'


export const Cart = () => {
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
                                <tr>
                                    <td>
                                        <img src="https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9" alt="" />
                                        <div className='data-product'>
                                            <h5 className='product-name'>Tênis Nike Revolution 6 Next Nature Masculino</h5>
                                            <p>Cor: Vermelho</p>
                                            <p>Tamanho: 42</p>
                                        </div>
                                    </td>
                                    <td><Count /></td>
                                    <td><p>219,00</p></td>
                                    <td><p>219,00</p></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="https://github.com/user-attachments/assets/ac4f9e8a-399b-4563-b9a5-bc8b674364e9" alt="" />
                                        <div className='data-product'>
                                            <h5 className='product-name'>Tênis Nike Revolution 6 Next Nature Masculino</h5>
                                            <p>Cor: Vermelho</p>
                                            <p>Tamanho: 42</p>
                                        </div>
                                    </td>
                                    <td><Count /></td>
                                    <td><p>219,00</p></td>
                                    <td><p>219,00</p></td>
                                </tr>
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
            </div>
            <Footer />
        </>
    )
}
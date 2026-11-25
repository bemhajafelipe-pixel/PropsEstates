import Viagem from "../viagem";
import { useState } from "react";

const Container = () => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarCarrinho = (viagem) => {
        setCarrinho([...carrinho, viagem]);
    };

    let total = 0;

    carrinho.forEach((viagem) => {
        total += viagem.subtotal;
    });
    return(
        <>
        <section>
            <Viagem nome="Rio de Janeiro" valor={499.50} quandoAdicionarCarrinho={adicionarCarrinho} />
            <Viagem nome="Salvador" valor={999.50} quandoAdicionarCarrinho={adicionarCarrinho} />
        </section>
        <section>
            <h2>Carrinho</h2>
            {carrinho.map(viagem => {
                <div style={{backgroundColor: "lightgray"}}>
                    <h3>{viagem.nome}</h3>
                    <h3>Quantidade: {viagem.quantidade}</h3>
                    <h3>Total da viagem: R$ {viagem.subtotal}</h3>

                </div>
            })}
            <h2> quantidade de viagens: {carrinho.length} </h2>
            <h2>Total: R$ {total.toFixed(2)}</h2>
        </section>
        </>
    )
}

export default Container;
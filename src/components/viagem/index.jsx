import { useState } from "react";
import "../botao"

const viagem = (props) => {
    const [quantidade, setQuantidade] = useState(1);
    const valortotal = props.valor * quantidade;

    const adicionar = () => {
        setQuantidade(quantidade + 1);
    }

    const remover = () => {
        if(quantidade > 1){
            setQuantidade(quantidade - 1);
        }

        const comprar = () => {
            const viagem = {
                nome: props.nome,
                quantidade: quantidade,
                subtotal: subtotal
            }
            props.quandoAdicionarCarrinho(viagem);
            alert("Viagem adicionada ao carrinho!");
        }
    return(
        <div>
            <h2>{props.nome}</h2>
            <p>Valor unitario: R$ {props.valor.toFixed(2)}</p>
            <div classname="quantidade">
                <botao clique={remover}> - </botao>
                <span> {quantidade} </span>
                <botao clique={adicionar}> + </botao>
            </div>
            <h3>Valor total: R$ {valortotal.toFixed(2)}</h3>
            <botao clique={comprar}>Comprar</botao>
        </div>
    )
}

export default Viagem;
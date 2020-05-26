import React, {useState} from "react";
import Axios from "axios";
import {Column, Row} from "../Formulario";
import Uf from "../UF";
import {useForm} from "react-hook-form";



function Cep () {

    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.cidade);
            document.getElementById('uf').value=(conteudo.uf);

        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";


                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };

    const [cep, setCep] = useState("");




    return(
        <form method="get" action=".">

            <Column>
            <label>Cep </label>
                <input onChange={e => setCep(e.target.value)} name="cep" type="text" id="cep" value={cep} size="10" maxLength="9"
                       onBlur="pesquisacep(target.value)"/>
            </Column>
            <Column>
            <label> Cidade </label>
                <input name="cidade" type="text" id="cidade" size="40" />
            </Column>
            <Column>
                <label>Estado </label>
                <Uf id="uf"/> </Column>
            <Column>
                <label> Bairro </label>
                <input name="bairro" type="text" id="bairro" size="40" />
            </Column>
        </form>)
}

export default Cep;
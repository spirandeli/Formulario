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


                Axios.get('https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback')
                    .then(function meu_callback(response) {
                        if (!("erro" in response)) {
                            //Atualiza os campos com os valores.
                            document.getElementById('bairro').value=(response.bairro);
                            document.getElementById('cidade').value=(response.cidade);
                            document.getElementById('uf').value=(response.uf);
                            document.getElementById('rua').value=(response.rua);

                        } //end if.
                        else {
                            //CEP não Encontrado.
                            limpa_formulário_cep();
                            alert("CEP não encontrado.");
                        }
                    });


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

            <Column mobile='6' tablet='12' desktop='6'>
            <label>Cep </label>
                <input onChange={e => setCep(e.target.value)} name="cep" type="text" id="cep" value={cep} size="10" maxLength="9"
                       onBlur={o => pesquisacep(o.target.value)}/>
            </Column>
            <Column mobile='6' tablet='12' desktop='6'>
            <label> Cidade </label>
                <input name="cidade" type="text" id="cidade" size="40" />
            </Column>
            <Column mobile='6' tablet='12' desktop='6'>
                <label>Estado </label>
                <Uf id="uf"/> </Column>
            <Column mobile='6' tablet='12' desktop='6'>
                <label> Bairro </label>
                <input name="bairro" type="text" id="bairro" size="40" />
            </Column>
        </form>)
}

export default Cep;
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


                Axios.get('https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback')
                    .then(function meu_callback(response) {
                        if (!("erro" in response)) {

                            document.getElementById('rua').value=(rua)
                            document.getElementById('bairro').value=(bairro)
                            document.getElementById('cidade').value=(cidade)
                            document.getElementById('uf').value=(estado)



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

    let [cep, setCep, bairro, setBairro, rua, setRua, cidade, setCidade, estado, setEstado] = useState("");




    return(
        <form>
        <Row>
            <Column mobile='6' tablet='12' desktop='6'>
                <label>Cep </label>
                <input onChange={e => setCep(e.target.value)} name="cep" type="text" id="cep" value={cep} size="10" maxLength="9"
                   onBlur={o => pesquisacep(o.target.value)}/>
           </Column>

            <Column mobile='6' tablet='12' desktop='6'>
                <label> Bairro </label>
                <input name="bairro" onChange={l => setBairro(l.target.value)} value={bairro} type="text" id="bairro" size="40" />
            </Column>


            <Column mobile='6' tablet='12' desktop='6'>
                <label> Cidade </label>
                <input onChange={p => setCidade(p.target.value)} name="cidade" value={cidade} type="text" id="cidade" size="40" />
            </Column>
        </Row>
        <Row>
            <Column mobile='6' tablet='12' desktop='6'>
                <label>Estado </label>
                <Uf id="uf" onChange={q => setEstado(q.target.value)} value={estado} /> </Column>

            <Column mobile='6' tablet='12' desktop='6'>
                <label> Rua </ label>
                <input onChange={p => setRua(p.target.value)} value={rua} id="rua" name="rua"/>
            </Column>
        </Row>
        </form>
    )
}

export default Cep;
import React, {useState, version} from "react";
import Axios from "axios";
import {Column, Row, Container} from "../Formulario";
import {useForm} from "react-hook-form";




function Cep () {


    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        setRua("...");
        setEstado("...");
        setCidade("...");
        setBairro("...");
    }




    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        let cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            let validacep = /^[0-9]{8}$/;



            //Valida o formato do CEP.
            if(validacep.test(cep)) {


                Axios.get('https://viacep.com.br/ws/'+ cep + '/json')
                    .then(function (data) {
                        if (!("erro" in data)) {

                            setCep(data.data.cep)
                            setRua(data.data.logradouro)
                            setBairro(data.data.bairro)
                            setCidade(data.data.localidade)
                            setEstado(data.data.uf)



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

    const [bairro, setBairro] = useState("");

    const [rua, setRua] = useState("");

    const [cidade, setCidade] = useState("");

    const [estado, setEstado] = useState("");

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
                    <select id="uf" name="uf" onChange={q => setEstado(q.target.value)} value={estado}>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                </Column>

                <Column mobile='6' tablet='12' desktop='6'>
                    <label> Rua </ label>
                    <input onChange={p => setRua(p.target.value)} value={rua} id="rua" name="rua"/>
                </Column>
            </Row>
        </form>
    )
}

export default Cep;
import React,{useState} from 'react';
import InputMask from 'react-input-mask';
import  {Container, Row, Column} from "./Component/Formulario";
import './App.css'
import Cep from "./Component/Cep";
import useForm from "./Hooks/useForm";
import Cpf from "./Component/ValidadorCpf";
import mascaraDeTelefone from "./Component/Mascaras";


function App() {

    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
        console.log(values);
    }
    const [nome, setNome] = useState("")

    const verificarNome = () => {
        if(nome == "" || nome.length < 3){
            alert("Preencha novamente seu nome")
        }
    }

    return (
        <form method="get" action="." onSubmit={handleSubmit(enviarContato)}>
            <div>
                <Container />
                <Row>
                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Nome </ label>
                        <input onChange={e => setNome(e.target.value)} name = "nome" value={nome}
                               onBlur={e => verificarNome(e.target.value)}
                               className = "controle de formulário"
                               id = "nome" placeholder = "Nome Completo"/>
                    </Column>

                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Data de Nascimento </ label>
                        <input onChange={handleChange} type="date" id="start" name="dataNascimento"
                                min="1910-01-01" max="2005-01-01"/>
                    </Column>

                    <Cpf/>

                </Row>


                <Cep />

                <Row>
                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Complemento </ label>
                        <input onChange={handleChange} id="complemento" name="complemento"/>
                    </Column>

                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Numero </ label>
                        <input onChange={handleChange} type="number" name = "numero" id = "numero"/>
                    </Column>
                </Row>
                <Row>


                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Telefone Celular </ label>
                        <InputMask onChange={handleChange} type="tel" name="telefone" id="telefone"  mask="(99) 99999-9999"  /></Column>

                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Telefone Residencial </ label>
                        <InputMask onChange={handleChange} type="tel" name = "numeroResidencial" id = "numeroResidencial" mask="(99)9999-9999"/></Column>
                </Row>
                <input type="submit" name="Enviar"/>
            </div>
        </form>
    );
}

export default App;
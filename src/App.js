import React,{useState} from 'react';
import Uf from "./Component/UF"
import  {Container, Row, Column} from "./Component/Formulario";
import './App.css'
import Cep from "./Component/Cep";
import useForm from "./Hooks/useForm";


function App() {

    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
        console.log(values);
    }


    return (
        <form method="get" action="." onSubmit={handleSubmit(enviarContato)}>
        <div>
            <Container />
              <Row>
                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Nome </ label>
                        <input onChange={handleChange} name = "name" className = "controle de formulário"
                               id = "name" placeholder = "Nome Completo"/>
                    </Column>

                    <Column mobile='6' tablet='12' desktop='6'>
                          <label> Data de Nascimento </ label>
                        <input onChange={handleChange} type="date" id="start" name="dataNascimento"
                        value="1998-03-14" min="1910-01-01" max="2005-01-01"/>
                    </Column>

                  <Column mobile='6' tablet='12' desktop='6'>
                      <label> Cpf </ label>
                      <input onChange={handleChange} type="number" name = "cpf" id = "cpf" placeholder = "Digite o seu cpf"/>
                  </Column>
                  </Row>

                <Row>
                <Cep />
                </Row>
                <Row>

                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Rua </ label>
                        <input onChange={handleChange} id="rua" name="rua"/>
                    </Column>

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
                        <input onChange={handleChange} type="number" name = "numeroCelular" id = "numeroCelular"/></Column>

                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Telefone Residencial </ label>
                        <input onChange={handleChange} type="number" name = "numeroResidencial" id = "numeroResidencial"/></Column>
                </Row>
                <input type="submit" name="Enviar"/>
        </div>
        </form>
  );
}

export default App;

import React,{useState} from 'react';
import Uf from "./Component/Cep"
import  {Container, Linha, Coluna} from "./Component/Formulario";


function App() {
  return (
      <div id="form">
        <Container>
          <Linha>
            <Coluna mobile='6' tablet='12' desktop='6'>
                <label> Nome </ label>
                <input name = "name" className = "controle de formulário"
                       id = "name" placeholder = "Nome Completo"/> </Coluna>

              <Coluna mobile='6' tablet='12' desktop='6'>
                  <label> Data de Nascimento </ label>
                  <input type="date" id="start" name="dataNascimento"
                value="1998-03-14" min="1910-01-01" max="2005-01-01"/></Coluna>

              <Coluna mobile='6' tablet='12' desktop='6'>
                  <label> Cpf </ label>
                  <input type="number" name = "cpf" id = "cpf" placeholder = "Digite o seu cpf"/></Coluna>
          </Linha>
            <Linha>
                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Cep </ label>
                    <input type="number" name = "cep"
                           id = "cep" placeholder = "Cep"/> </Coluna>
                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Estado </ label>
                    <Uf /></Coluna>

                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Cidade </ label>
                    <input name = "cidade" id = "cidade" /></Coluna>
            </Linha>
            <Linha>
                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Bairro </ label>
                    <input name = "bairro" id = "bairro" /> </Coluna>

                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Complemento </ label>
                    <input id="complemento" name="complemento"/></Coluna>

                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Numero </ label>
                    <input type="number" name = "numero" id = "numero"/></Coluna>
            </Linha>
            <Linha>
                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Telefone Celular </ label>
                    <input type="number" name = "numeroCelular" id = "numeroCelular"/></Coluna>

                <Coluna mobile='6' tablet='12' desktop='6'>
                    <label> Telefone Residencial </ label>
                    <input type="number" name = "numeroResidencial" id = "numeroResidencial"/></Coluna>
            </Linha>
        </Container>
      </div>
  );
}

export default App;

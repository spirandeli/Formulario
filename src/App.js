import React,{useState,useContext} from 'react';
import InputMask from 'react-input-mask';
import  {Container, Row, Column} from "./Component/Formulario";
import './App.css'
import Cep from "./Component/Cep";
import useForm from "./Hooks/useForm";
import Cpf from "./Component/ValidadorCpf";
import mascaraDeTelefone from "./Component/Mascaras"; 
import {ThemeContext} from "./Component/Temas/ThemeContext";
import {AppTheme} from "./Component/Temas/Themes";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function App() {

    const [cep, setCep] = useState("");

    const [bairro, setBairro] = useState("");

    const [rua, setRua] = useState("");

    const [cidade, setCidade] = useState("");

    const [estado, setEstado] = useState("");

    const [cpf, setCpf] = useState("");

    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
        console.log(values);
    }
    const [nome, setNome] = useState("")
    const [dataNascimento, setdataNascimento] = useState("")
    const [complemento, setComplemento] = useState("")
    const [celular, setCelular] = useState("")
    const [residencial, setResidencial] = useState("")

    const verificarNome = () => {''
        if(nome == "" || nome.length < 3){
            alert("Preencha novamente seu nome")
        }
    }

    const verificarDataNascimento = () => {''
        if(dataNascimento == "" || dataNascimento.length < 8){
            alert("Preencha novamente sua idade")
        }
    }
    
    const verificarCelular = () => {''
        if(celular == "" || celular.length < 11){
            alert("Preencha novamente seu celular")
        }
    }

    const verificarTelefone = () => {''
        if(residencial == "" || residencial.length < 3){
            alert("Preencha novamente seu telefone")
        }
    }

    function resultado(){
        alert(`${nome}, ${cpf}, ${dataNascimento}, ${celular}, ${residencial}, ${cep}, ${estado}, 
                ${cidade}, ${bairro}, ${rua}, ${complemento} `)
    }


    const themeHook = useContext(ThemeContext);
    const[themeMode, setThemeMode] = useState("light")


    return (
        <ThemeContext.Provider value = {themeHook}>
        <header>
            <Router>
            <ul>
                <li>
                    <Link to="/Pages/home/index.js">Home</Link>
                </li>
                <li>
                    <Link to="/">Formulario</Link>
                </li>
                <li>
                    <Link to="/Pages/sobre/index.js">Sobre</Link>
                </li>
            </ul>
            </Router>

        </header>
       <form  method="get" action="." onSubmit={handleSubmit(enviarContato)}>
            <div style={AppTheme[themeMode+"Container"]}>
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
                        <input onChange={e => setdataNascimento(e.target.value)} value={dataNascimento} type="date" id="start" name="dataNascimento"
                                min="1910-01-01" max="2005-01-01" onBlur={e => verificarDataNascimento(e.target.value)}/>
                    </Column>

                    <Cpf cpf={cpf} setCpf={setCpf}/>

                </Row>


                <Cep cep={cep} setCep={setCep} bairro={bairro} setBairro={setBairro}
                 cidade={cidade} setCidade={setCidade} rua = {rua} setRua={setRua} estado={estado} setEstado={setEstado} />

                <Row>
                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Complemento </ label>
                        <input onChange={handleChange} id="complemento" name="complemento"/>
                    </Column>

                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Numero </ label>
                        <input onChange={e => setComplemento(e.target.value)} value={complemento} type="number" name = "numero" id = "numero"/>
                    </Column>
                </Row>
                <Row>


                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Telefone Celular </ label>
                        <InputMask onChange={e => setCelular(e.target.value)} value={celular} type="tel" name="telefone" id="telefone"  mask="(99) 99999-9999"  /></Column>

                    <Column mobile='6' tablet='12' desktop='6'>
                        <label> Telefone Residencial </ label>
                        <InputMask onChange={e => setResidencial(e.target.value)} value={residencial} type="tel" name = "numeroResidencial" id = "numeroResidencial" mask="(99)9999-9999"/></Column>
                </Row>
                <input type="submit" name="Enviar"  onClick={() => resultado()}/>
            </div>
            <button type="button"
                style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                value={themeMode === "light" ? false : true}
                onClick={() => setThemeMode(themeMode === "light"? "dark": "light")}
            >Modo Escuro </button>  
        </form>
        </ThemeContext.Provider>
        
    );
}



export default App;
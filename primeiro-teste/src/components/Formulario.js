import { useState } from "react"

function Formulario(){

    function Cadastrar(e){
        e.preventDefault()
        //console.log(nome)
        //console.log('Cadastrou um usuario')
        console.log(`Usuario ${nome} cadastrado com a senha:`)
    }

    const [nome, setNome] = useState('Victor')
    const [senha, setSenha] = useState()
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={Cadastrar}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" onChange={(e)=> setNome(e.target.value)} value={nome} placeholder="Digite seu nome"/>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" onChange={(e)=> setSenha(e.target.value)} placeholder="Digite sua senha"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Formulario
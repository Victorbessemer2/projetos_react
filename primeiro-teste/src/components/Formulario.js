function Formulario(){

    function Cadastrar(e){
        e.preventDefault()
        console.log('Cadastrou um usuario')
    }
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={Cadastrar}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Formulario
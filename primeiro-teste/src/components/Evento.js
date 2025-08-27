function Evento(){

    function meuEvento(){
        console.log('Opa, eu fui ativado!')
    }

    return(
        <div>
            <p>Clique abaixo para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
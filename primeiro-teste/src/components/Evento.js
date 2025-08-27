function Evento({numero}){

    function meuEvento(){
        console.log(`Opa, eu fui ativado! ==> ${numero}`)
    }

    return(
        <div>
            <p>Clique abaixo para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
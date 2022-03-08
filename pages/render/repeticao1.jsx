export default function repeticao1() {
  const listaAprovados = [
    'Elton', 
    'Rebeca',
    'Maria',
    'Vitória'
  ]

  function rederizarLista() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
  }
  // function rederizarLista() {
  //   const itens = []

  //   for (let i = 0; i < listaAprovados.length; i++) {
  //     itens.push(<li>{listaAprovados[i]}</li>)
  //   }

  //   return itens
  // }

  return(
    <ul>
      {rederizarLista()}
    </ul>
  )
}
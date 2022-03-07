export default function jsx4() {
  const subtitulo = 'Estou no JS'
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{entre(3, 1, 10)}</h3>
    </div>
  )
}

function entre(valor, min, max) {
  if(valor >= min && valor <= max) {
    return "Sim"
  } 
  else{
    return "Não"
  }
}
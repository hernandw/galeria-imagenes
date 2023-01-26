

const Card = ({titulo, imagen, descripcion}) => {
  return (
    <div className="images">
<img src={imagen} alt={titulo}/>
<h3>{titulo}</h3>
<p>{descripcion}</p>

    </div>
  )
}

export default Card
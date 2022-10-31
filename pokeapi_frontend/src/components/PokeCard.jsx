import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
const PokeCard = ({pokemon}) => {
  return (
    <Col>
    <Card border='light' style={{minWidth:"20rem", maxWidth:'21rem', margin:'1rem auto 0.5rem auto'}}>
      <Card.Body>
        <Card.Img style={{height:'14rem'}} variant="top" src={pokemon.image} />
        <Card.Title className='text-center text-capitalize'>{pokemon.name}</Card.Title>
        <Card.Text>
         {pokemon.description}
        </Card.Text>
        <div className="text-center" >
        <Link className="bg-dark text-light text-decoration-none py-2 px-3 rounded" to={`/${pokemon.name}`}>
          Mas detalles
        </Link>

        </div>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default PokeCard
import "./Card-Services.css";
import { Card, Button } from "react-bootstrap";

const CardServices = (props) => {
  return (
<Card border="light" style={{ width: "20rem", borderRadius: "10px", maxHeight: "600px", height: "500px"}} className="mx-auto"> 
    
    <Card.Img variant="top" 
    src={props.src} 
    alt="card image" 
    style={{maxWidth: "400px"}}
    />
      
      <Card.Body>
        <Card.Title style={{color: "black"}}>{props.title}</Card.Title>
        <Card.Text style={{color: "black"}}> <small>{props.text}</small></Card.Text>
        <Button className="button" variant="info">{props.btnText}</Button>
      </Card.Body>
    </Card>
  );
};

export default CardServices;

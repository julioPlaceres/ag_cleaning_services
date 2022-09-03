import Alert from 'react-bootstrap/Alert';

const Alerts = (props) => {
  return (
    <Alert key={props.variant} variant={props.variant} show={props.show}>
      {props.text}
    </Alert>
  );
};

export default Alerts;

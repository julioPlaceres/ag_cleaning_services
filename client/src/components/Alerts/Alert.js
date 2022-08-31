import Alert from 'react-bootstrap/Alert';

const Alerts = (props) => {
  return (
    <Alert key="secondary" variant="secondary" show={props.show}>
      {props.text}
    </Alert>
  );
};

export default Alerts;

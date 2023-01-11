import Alert from 'react-bootstrap/Alert';

function Error(props) {
  return (
        <Alert key="danger" variant="danger">
          {props.message}
        </Alert>
  );
}

export default Error;
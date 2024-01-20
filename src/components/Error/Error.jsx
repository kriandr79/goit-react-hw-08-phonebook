import { useSelector } from 'react-redux';
import { selectGlobalError } from '../../redux/root/selectors';

const Error = () => {
  const error = useSelector(selectGlobalError);

  return error ? <div>ERROR!!!</div> : <></>;
};

export default Error;

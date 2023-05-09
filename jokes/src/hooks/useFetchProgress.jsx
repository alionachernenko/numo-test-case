import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';

const useFetchProgress = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {isLoading, error}
};

export default useFetchProgress
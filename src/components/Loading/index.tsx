import { ILoader } from '../../types';
import { Loader } from './styles';

const Loading: React.FC<ILoader> = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader>
          <div className="loader">Loading...</div>
        </Loader>
      ) : (
        <span></span>
      )}
    </>
  );
};

export default Loading;

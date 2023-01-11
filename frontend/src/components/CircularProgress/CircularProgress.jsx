import { LoaderContainer, Loader } from './CircularProgress.styles.jsx';

export const CircularProgress = (props) => {
  return (
    <LoaderContainer data-testid="circularProgress">
      <Loader />
    </LoaderContainer>
  );
};

import { useMutation } from 'react-query';
import { useServices } from '../../../hooks/useServices';

const useCreateArray = (params: { onSuccess: (data: any) => void, onError: () => void }) => {
  const { onSuccess, onError } = params;
  const {
    arrays: { createArray },
  } = useServices();


  const {
    data, isLoading, isError, mutate,
  } = useMutation<any, Error, any>(
    (params: any) => createArray(params),
    {
      onSuccess,
      onError,
    },
  );

  return {
    data,
    isLoading,
    isError,
    mutate,
  };
};

export default useCreateArray;

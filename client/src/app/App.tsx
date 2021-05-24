import React from 'react';
import Axios from 'axios';

import { ServicesProvider } from '../core/hooks/useServices';
import { createServices } from '../core/services';
import { QueryClient, QueryClientProvider } from 'react-query';
import Form from '../form';


const api = Axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});
const services = createServices(api);
const queryClient = new QueryClient();


const App = () => (
    <ServicesProvider services={services}>
      <QueryClientProvider client={queryClient}>
        <Form />
      </QueryClientProvider>
    </ServicesProvider>
  );


export default App;

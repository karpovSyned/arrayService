import React from 'react';
import { IServices } from '../services';

interface IServicesProviderParams {
  children: React.ReactNode;
  services: IServices;
}

export const ServicesContext = React.createContext<IServices>({} as IServices);

export function  ServicesProvider({ children, services }: IServicesProviderParams): JSX.Element {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices(): IServices {
  return React.useContext(ServicesContext);
}

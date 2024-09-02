import { Collection } from 'mongodb';

export interface ICustomerRepository {
  getCustomersCollection(): Collection;
  getAnonymizedCustomersCollection(): Collection;
}
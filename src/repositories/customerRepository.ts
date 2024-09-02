import { ICustomerRepository } from '../interfaces/customerRepository';
import { Collection } from 'mongodb';
import { getCollection } from '../database';

export class CustomerRepository implements ICustomerRepository {
  getCustomersCollection(): Collection {
    return getCollection('customers');
  }

  getAnonymizedCustomersCollection(): Collection {
    return getCollection('customers_anonymised');
  }
}
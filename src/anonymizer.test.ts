import { CustomerAnonymizer } from './anonymizer';

describe('CustomerAnonymizer', () => {
  let anonymizer: CustomerAnonymizer;

  beforeEach(() => {
    anonymizer = new CustomerAnonymizer();
  });

  test('anonymizes a customer object', () => {
    const customer = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: {
        line1: '123 Main St',
        line2: 'Apt 4B',
        postcode: '12345',
        city: 'Metropolis',
        state: 'CA',
        country: 'US'
      }
    };

    const anonymizedCustomer = anonymizer.anonymize(customer);

    expect(anonymizedCustomer.firstName).not.toBe(customer.firstName);
    expect(anonymizedCustomer.lastName).not.toBe(customer.lastName);
    expect(anonymizedCustomer.email.split('@')[0]).not.toBe(customer.email.split('@')[0]);
    expect(anonymizedCustomer.address.line1).not.toBe(customer.address.line1);
    expect(anonymizedCustomer.address.line2).not.toBe(customer.address.line2);
    expect(anonymizedCustomer.address.postcode).not.toBe(customer.address.postcode);
    expect(anonymizedCustomer.address.city).toBe(customer.address.city);
    expect(anonymizedCustomer.address.state).toBe(customer.address.state);
    expect(anonymizedCustomer.address.country).toBe(customer.address.country);
  });
});

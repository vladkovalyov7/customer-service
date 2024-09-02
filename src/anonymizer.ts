import { IAnonymizer } from './interfaces/anonymizer';
import { faker } from '@faker-js/faker';

export class CustomerAnonymizer implements IAnonymizer {
  anonymize(data: any): any {
    return {
      ...data,
      firstName: this.anonymizeString(data.firstName),
      lastName: this.anonymizeString(data.lastName),
      email: this.anonymizeEmail(data.email),
      address: {
        ...data.address,
        line1: this.anonymizeString(data.address.line1),
        line2: this.anonymizeString(data.address.line2),
        postcode: this.anonymizeString(data.address.postcode),
      },
    };
  }

  private anonymizeString(original: string): string {
    return faker.random.alphaNumeric(8);
  }

  private anonymizeEmail(original: string): string {
    const [name, domain] = original.split('@');
    return `${this.anonymizeString(name)}@${domain}`;
  }
}

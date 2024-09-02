import { ICustomerRepository } from './interfaces/customerRepository';
import { IAnonymizer } from './interfaces/anonymizer';
import { ChangeStream } from 'mongodb';

export class CustomerService {
  constructor(private customerRepository: ICustomerRepository, private anonymizer: IAnonymizer) {}

  public async startListeningForChanges() {
    const customersCollection = this.customerRepository.getCustomersCollection();
    const anonymizedCollection = this.customerRepository.getAnonymizedCustomersCollection();

    const changeStream: ChangeStream = customersCollection.watch();

    changeStream.on('change', async (change) => {
      if (change.operationType === 'insert' || change.operationType === 'update') {
        const newDocument = change.fullDocument;
        const anonymizedDocument = this.anonymizer.anonymize(newDocument);
        await anonymizedCollection.insertOne(anonymizedDocument);
        console.log('Inserted anonymized document:', anonymizedDocument);
      }
    });
  }
}

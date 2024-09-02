import { connectToDatabase } from './database';
import { CustomerRepository } from './repositories/customerRepository';
import { CustomerAnonymizer } from './anonymizer';
import { CustomerService } from './customerService';

async function startApp() {
  await connectToDatabase();

  const customerRepository = new CustomerRepository();
  const customerAnonymizer = new CustomerAnonymizer();
  const customerService = new CustomerService(customerRepository, customerAnonymizer);

  await customerService.startListeningForChanges();
}

startApp().catch(console.error);

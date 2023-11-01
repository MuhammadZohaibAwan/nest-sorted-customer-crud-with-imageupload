import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAllCustomers(sort?: string): Promise<Customer[]>;
    viewCustomer(id: number): Promise<Customer>;
    updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer>;
    removeCustomer(id: number): Promise<{
        affected?: number;
    }>;
}

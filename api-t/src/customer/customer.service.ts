import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) { }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async findAllCustomers(sort?: string): Promise<Customer[]> {
    const options: FindManyOptions<Customer> = {};

    if (sort) {
      switch (sort) {
        case 'name':
          options.order = { name: 'ASC' };
          break;
        case 'nameDesc':
          options.order = { name: 'DESC' };
          break;
        case 'email':
          options.order = { email: 'ASC' };
          break;
        case 'emailDesc':
          options.order = { email: 'DESC' };
          break;
        case 'username':
          options.order = { username: 'ASC' };
          break;
        case 'usernameDesc':
          options.order = { username: 'DESC' };
          break;
      }
    }
    return this.customerRepository.find(options);
  }


  async viewCustomer(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) {
      throw new HttpException(`Customer with ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return this.customerRepository.findOneBy({ id });
  }


  updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    return this.customerRepository.update(id, updateCustomerDto).then(() => {
      return this.customerRepository.findOneBy({ id });
    });
  }

  async removeCustomer(id: number): Promise<{ affected?: number }> {
    const deleteResult = await this.customerRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new HttpException(`Customer with ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return this.customerRepository.delete(id);
  }
}



// Clients can make GET requests like:

// /customers?sort=name to sort by name in ascending order.
// /customers?sort=nameDesc to sort by name in descending order.
// /customers?sort=email to sort by email in ascending order.
// /customers?sort=emailDesc to sort by email in descending order.
// /customers?sort=username to sort by username in ascending order.
// /customers?sort=usernameDesc to sort by username in descending order.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("./entities/customer.entity");
let CustomerService = class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    createCustomer(createCustomerDto) {
        const customer = this.customerRepository.create(createCustomerDto);
        return this.customerRepository.save(customer);
    }
    async findAllCustomers(sort) {
        const options = {};
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
    async viewCustomer(id) {
        const customer = await this.customerRepository.findOneBy({ id });
        if (!customer) {
            throw new common_1.HttpException(`Customer with ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return this.customerRepository.findOneBy({ id });
    }
    updateCustomer(id, updateCustomerDto) {
        return this.customerRepository.update(id, updateCustomerDto).then(() => {
            return this.customerRepository.findOneBy({ id });
        });
    }
    async removeCustomer(id) {
        const deleteResult = await this.customerRepository.delete(id);
        if (deleteResult.affected === 0) {
            throw new common_1.HttpException(`Customer with ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return this.customerRepository.delete(id);
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerService);
//# sourceMappingURL=customer.service.js.map
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createCustomerDto: CreateCustomerDto,
    @UploadedFile() file: Express.Multer.File) {
    console.log(file)
    // i am not storing the uploaded file somewhere,
    // just to show image funcationality working fine doing log here
    const customer = {
      ...createCustomerDto,
      image: file ? file.filename : null
    };

    return this.customerService.createCustomer(customer);
  }

  @Get()
  findAll(@Query('sort') sort: string): Promise<Customer[]> {
    return this.customerService.findAllCustomers(sort);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.viewCustomer(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.removeCustomer(+id);
  }
}

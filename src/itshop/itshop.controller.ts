import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Header,
  UseFilters,
} from '@nestjs/common';
import { ITShopService } from './itshop.service';
import { CreateITShopDto } from './dto/create-itshop.dto';
import { UpdateITShopDto } from './dto/update-itshop.dto';
import { itExceptionFilter } from './filter/note-exception/it-exception.filter';

@Controller('itshop')
@UseFilters(new itExceptionFilter())
export class ITShopController {
  constructor(private readonly ITShopService: ITShopService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() shop: CreateITShopDto) {
    return this.ITShopService.create(shop);
  }

  @Get()
  findAll() {
    return this.ITShopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ITShopService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateITShopDto: UpdateITShopDto) {
    return this.ITShopService.update(id, UpdateITShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ITShopService.remove(id);
  }
}

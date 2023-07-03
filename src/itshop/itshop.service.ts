import { Injectable } from '@nestjs/common';
import { CreateITShopDto } from './dto/create-itshop.dto';
import { UpdateITShopDto } from './dto/update-itshop.dto';
import { itException } from '../itshop/exception/note.exception/it.exception';
import { uuid } from 'uuidv4';

@Injectable()
export class ITShopService {
  private shop: CreateITShopDto[] = [];

  create(createMonDto: CreateITShopDto): CreateITShopDto {
    createMonDto.id = uuid();
    this.shop.push(createMonDto);
    return createMonDto;
  }

  findAll() {
    if (this.shop.length == 0) {
      throw new itException('There are no shop');
    }
    return this.shop;
  }

  findOne(id: string) {
    for (const item of this.shop) {
      if (item.id == id) return item;
      throw new itException('Such id does not exist');
    }
  }
  update(id: string, UpdateITShopDto: UpdateITShopDto): void {
    const pid = this.shop.findIndex((p) => p.id == id);
    this.shop[pid] = {
      ...this.shop[pid],
      ...UpdateITShopDto,
    };
  }

  remove(id: string) {
    const result: CreateITShopDto[] = this.shop.filter((c) => c.id !== id);
    if (result.length === this.shop.length) {
      throw new itException('Such id does now exist');
    }

    this.shop = result;
  }
}

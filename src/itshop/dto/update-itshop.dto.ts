import { PartialType } from '@nestjs/mapped-types';
import { CreateITShopDto } from './create-itshop.dto';

export class UpdateITShopDto extends PartialType(CreateITShopDto) {
  public id: string;
  public Name: string;
  public Price: string;
  public arendTime: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class BillDto {
  @ApiProperty()
  orderId: number;

  @ApiProperty()
  validTillDate: Date;

  @ApiProperty()
  items: BillItem[];

  @ApiProperty()
  createdUserId: number;
}

export class BillItem {
  @ApiProperty()
  itemId: number;

  @ApiProperty()
  unitPrice: number;

  @ApiProperty()
  quantity: number;
}

export class SelectBillDto {
  @ApiProperty()
  orderId: number;

  @ApiProperty()
  billId: number;
}

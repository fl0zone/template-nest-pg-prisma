import {ApiProperty} from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, default: false })
  isCompleted: boolean;
}

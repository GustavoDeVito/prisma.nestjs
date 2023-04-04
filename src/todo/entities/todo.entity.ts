import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Todo } from '@prisma/client';

export class TodoEntity implements Todo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional({ default: false })
  completed: boolean;

  @ApiProperty()
  user: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

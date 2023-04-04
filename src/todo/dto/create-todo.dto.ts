import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ default: false })
  completed?: boolean = false;

  @IsNotEmpty()
  @ApiProperty()
  user: string;
}

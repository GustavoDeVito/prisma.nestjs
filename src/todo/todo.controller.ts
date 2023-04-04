import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TodoEntity } from './entities/todo.entity';

@Controller('todo')
@ApiTags('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiCreatedResponse({ type: TodoEntity })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOkResponse({ type: TodoEntity, isArray: true })
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TodoEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TodoEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TodoEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.remove(+id);
  }
}

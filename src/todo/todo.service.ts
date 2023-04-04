import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    return this.prismaService.todo.create({ data: createTodoDto });
  }

  findAll() {
    return this.prismaService.todo.findMany();
  }

  async findOne(id: number) {
    const todo = await this.prismaService.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.prismaService.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return this.prismaService.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  remove(id: number) {
    const exist = this.prismaService.todo.findUnique({ where: { id } });

    if (!exist) {
      throw new NotFoundException('Todo not found');
    }

    return this.prismaService.todo.delete({ where: { id } });
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopCasesService } from './top-cases.service';
import { CreateTopCaseDto } from './dto/create-top-case.dto';
import { UpdateTopCaseDto } from './dto/update-top-case.dto';

@Controller('top-cases')
export class TopCasesController {
  constructor(private readonly topCasesService: TopCasesService) {}

  @Post()
  create(@Body() createTopCaseDto: CreateTopCaseDto) {
    return this.topCasesService.create(createTopCaseDto);
  }

  @Get()
  findAll() {
    return this.topCasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topCasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopCaseDto: UpdateTopCaseDto) {
    return this.topCasesService.update(+id, updateTopCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topCasesService.remove(+id);
  }
}

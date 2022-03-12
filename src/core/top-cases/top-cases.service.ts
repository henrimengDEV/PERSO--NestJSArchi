import { Injectable } from '@nestjs/common';
import { CreateTopCaseDto } from './dto/create-top-case.dto';
import { UpdateTopCaseDto } from './dto/update-top-case.dto';

@Injectable()
export class TopCasesService {
  create(createTopCaseDto: CreateTopCaseDto) {
    return 'This action adds a new topCase';
  }

  findAll() {
    return `This action returns all topCases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topCase`;
  }

  update(id: number, updateTopCaseDto: UpdateTopCaseDto) {
    return `This action updates a #${id} topCase`;
  }

  remove(id: number) {
    return `This action removes a #${id} topCase`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateTopCaseDto } from './create-top-case.dto';

export class UpdateTopCaseDto extends PartialType(CreateTopCaseDto) {}

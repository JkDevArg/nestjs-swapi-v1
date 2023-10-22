import { Injectable } from '@nestjs/common';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';
import { dynamoDBClient } from 'src/aws-config/dynamoDBClient';
import { v4 as uuid } from 'uuid';
import 'dotenv/config';

const { TABLE_NAME } = process.env;

@Injectable()
export class SpeciesService {
  async create(createSpeciesDto: CreateSpeciesDto) {
    return await dynamoDBClient()
      .put({
        TableName: TABLE_NAME,
        Item: {
          specieId: uuid(),
          name: createSpeciesDto.name,
          skin_colors: createSpeciesDto.skin_colors,
          language: createSpeciesDto.language,
          homeworld: createSpeciesDto.homeworld,
          eye_colors: createSpeciesDto.eye_colors,
          designation: createSpeciesDto.designation,
          average_lifespan: createSpeciesDto.average_lifespan,
          average_height: createSpeciesDto.average_height,
          classification: createSpeciesDto.classification,
          url: createSpeciesDto.url,
        },
      })
      .promise();
  }

  async findAll() {
    const results = await dynamoDBClient()
      .scan({
        TableName: TABLE_NAME,
      })
      .promise();

    return results.Items;
  }

  async findOne(id: number) {
    const result = await dynamoDBClient()
      .get({
        TableName: TABLE_NAME,
        Key: { id },
      })
      .promise();

    return result.Item;
  }

  update(id: number, updateSpeciesDto: UpdateSpeciesDto) {
    return `This action updates a #${id} species`;
  }

  remove(id: number) {
    return `This action removes a #${id} species`;
  }
}

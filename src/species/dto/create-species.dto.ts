import { IsString } from 'class-validator';

export class CreateSpeciesDto {

    @IsString()
    average_height: string;

    @IsString()
    average_lifespan: string;

    @IsString()
    classification: string;

    @IsString()
    designation: string;

    @IsString()
    eye_colors: string;

    @IsString()
    hair_colors: string;

    @IsString()
    homeworld: string;

    @IsString()
    language: string;

    @IsString()
    name: string;

    @IsString()
    skin_colors: string;

    @IsString()
    url: string;

}

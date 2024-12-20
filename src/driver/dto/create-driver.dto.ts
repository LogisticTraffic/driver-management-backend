import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDriverDto {
 
    @IsString()
  readonly nom_complet: string;
  @IsOptional()
  @IsString()
  readonly gmail: string;

  @IsOptional()
  @IsString()
  readonly password?: number;

  @IsOptional()
  @IsString()
  readonly Adresse?: string;
  @IsOptional()
  @IsString()
  readonly telephone?: string;

}

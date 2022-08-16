import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./pessoa.entity";

@Entity()
export class Fornecedor extends Pessoa{
    @ApiProperty({example: '1', description: 'Id gerado automaticamente',})
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj: string;

    @Column()
    inscricao_estadual: string;
    
}

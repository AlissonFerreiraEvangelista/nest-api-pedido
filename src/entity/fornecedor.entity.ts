import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./pessoa.entity";

@Entity()
export class Fornecedor extends Pessoa{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj: string;

    @Column()
    inscricao_estadual: string;
    
}

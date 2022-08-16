import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./endereco.entity";

@Entity()
export class Pessoa{
    
    @ApiProperty({example: '1', description: 'Id gerado automaticamente',})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Teste', description: 'Informar o Nome',})
    @Column()
    nome: string;

    @ApiProperty({example: 'teste@gmail.com', description: 'Informar o E-mail',})
    @Column()
    email: string;

    @ApiProperty({example: '4899888784', description: 'Informar o nº Telefone',})
    @Column()
    telefone: string;

    @ApiProperty({description: 'Endereço da Pessoa'})
    @OneToOne(type => Endereco, endereco => endereco.pessoa,{cascade: true})
    @JoinColumn()
    endereco: Endereco;
    
    

}
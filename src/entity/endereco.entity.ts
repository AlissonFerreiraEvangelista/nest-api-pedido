import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./pessoa.entity";


@Entity()
export class Endereco{
    @ApiProperty({example: '1', description: 'Id gerado automaticamente',})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Rua, Servidão, Avenida', description: 'logradouro',})
    @Column()
    logradouro: string;

    @ApiProperty({example: '152', description: 'Número da Casa, Apt, Bloco',})
    @Column()
    numero: string;

    @ApiProperty({example: 'Corrego', description: 'Bairro',})
    @Column()
    bairro: string;

    @ApiProperty({example: 'Florianópolis', description: 'Cidade',})
    @Column()
    cidade: string;

    @ApiProperty({example: 'Casa, Apt', description: 'Se mora em Casa, Apt',})
    @Column()
    complemento: string;

    @ApiProperty({example: 'Perto da Farmacia', description: 'Algum ponto de referência',})
    @Column()
    observacao: string;

    
    @OneToOne(() => Pessoa, (pessoa) => pessoa.endereco)
    pessoa: Pessoa;


}
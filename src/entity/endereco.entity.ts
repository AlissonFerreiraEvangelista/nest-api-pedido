import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./pessoa.entity";


@Entity()
export class Endereco{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    logradouro: string;
    @Column()
    numero: string;
    @Column()
    bairro: string;
    @Column()
    cidade: string;
    @Column()
    complemento: string;
    @Column()
    observacao: string;

    @OneToOne(() => Pessoa, (pessoa) => pessoa.endereco)
    pessoa: Pessoa;


}
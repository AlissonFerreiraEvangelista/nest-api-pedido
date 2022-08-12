import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./endereco.entity";

@Entity()
export class Pessoa{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @OneToOne(type => Endereco, endereco => endereco.pessoa)
    @JoinColumn()
    endereco: Endereco;
    
    

}
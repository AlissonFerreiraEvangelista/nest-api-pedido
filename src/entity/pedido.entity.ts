import { Column, DataTypeNotSupportedError, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente.entity";


@Entity()
export class Pedido{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, unique: true})
    numero: number;
    
    @Column({type:"decimal"})
    valorTotal: number;

    @Column({type:"date"})
    dt_pedido: string;

    @ManyToOne(() => Cliente, cliente => cliente.pedido,{onUpdate:"RESTRICT"})
    cliente: Cliente;

    
}
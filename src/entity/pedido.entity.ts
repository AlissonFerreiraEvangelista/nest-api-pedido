import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente.entity";


@Entity()
export class Pedido{

    @ApiProperty({example: '1', description: 'Id gerado automaticamente',})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: '123456', description: 'Número tem que ser unico',})
    @Column({nullable: false, unique: true})
    numero: number;
    
    @ApiProperty({example: '10.90', description: 'Valor total do pedido',})
    @Column({type:"decimal"})
    valorTotal: number;

    @ApiProperty({example: '10/02/2022', description: 'Data do pedido',})
    @Column({type:"date"})
    dt_pedido: string;

    
    @ManyToOne(() => Cliente, cliente => cliente.pedido,{onUpdate:"RESTRICT"})
    cliente: Cliente;

    
}
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Pessoa } from "./pessoa.entity";

@Entity()
export class Cliente extends Pessoa{
    @ApiProperty({example: '12', description: 'Id gerado automaticamente',})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'true/false', description: 'Se tem cupom disponivel',})
    @Column({default: true})
    cupom: boolean;

    @ApiProperty({description: 'Pedidos do cliente'})
    @OneToMany(() => Pedido, pedido => pedido.cliente,{cascade:true})
    @JoinColumn()
    pedido:Pedido[];
    
    

    
}
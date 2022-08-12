import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pedido } from "src/entity/pedido.entity";
import { Repository } from "typeorm";


@Injectable()
export class PedidoService{

    constructor(@InjectRepository(Pedido) private pedidoRepository: Repository<Pedido>){}

    async criar(pedido: Pedido): Promise<Pedido>{
        const pedidoExists = await this.pedidoRepository.findOneBy(pedido);
        if(!pedidoExists){
            return pedido = await this.pedidoRepository.save(pedido);
        }else{
            throw new Error ('Pedido já Cadastrado');          
        }
    }

    async achaUm(id: number): Promise<Pedido>{
        const pedidoExists = await this.pedidoRepository.findOneBy({id});
        if(!pedidoExists){
            throw new Error ('Pedido não Encontrado');
        }else{
            return pedidoExists;
        }
    }

    async achaTodos(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }

    async remove(id: number){
        const pedidoExists = await this.pedidoRepository.findOneBy({id});
        if(pedidoExists){
            await this.pedidoRepository.remove(pedidoExists);   
        }else{
            throw new Error ('Pedido não existe');
        }
    }

    async atualiza(id: number, pedido: Pedido){
        const pedidoExists = await this.pedidoRepository.findOneBy({id});
        if(!pedidoExists){
            throw new Error('Pedido não existe');
        }else{
            return await this.pedidoRepository.update(id, pedido);
        }

    }

}
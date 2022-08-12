import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cliente } from "src/entity/cliente.entity";
import { Repository } from "typeorm";


@Injectable()
export class ClienteService{

    constructor(@InjectRepository(Cliente) private clienteRepository: Repository<Cliente>){}

    async criar(cliente: Cliente): Promise<Cliente>{
        const clientExists = await this.clienteRepository.findOneBy(cliente);
        if(clientExists){
            throw new Error ('Cliente Existe');
        }else{
            return cliente = await this.clienteRepository.save(cliente);

        }
    }

    async achaUm(id: number): Promise<Cliente>{
        const cliente = await this.clienteRepository.findOneBy({id});
        if(!cliente){
            throw new Error ('Cliente não existe');
        }else{
            return cliente;
        }
    }

    async achaTodos(): Promise<Cliente[]>{
        return this.clienteRepository.find({
            relations:{
                endereco:true,
            }
        });
    }

    async remove(id: number){
        const cliente = await this.clienteRepository.findOneBy({id});
        if(cliente){
            await this.clienteRepository.remove(cliente);   
        }else{
            throw new Error ('Cliente não existe');
        }
    }

    async atualiza(id: number, cliente: Cliente){
        const clienteExiste = await this.clienteRepository.findOneBy({id});
        if(!clienteExiste){
            throw new Error('Cliente não existe');
        }else{
            return this.clienteRepository.update(id, cliente);
        }

    }

}
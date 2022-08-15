import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Endereco } from "src/entity/endereco.entity";
import { Repository } from "typeorm";


@Injectable()
export class EnderecoService{

    constructor(@InjectRepository(Endereco) private enderecoRepository: Repository<Endereco>){}

    async criar(endereco: Endereco): Promise<Endereco>{
        return await this.enderecoRepository.save(endereco);
    }


    async achaUm(id: number): Promise<Endereco>{
        const enderecoExist = await this.enderecoRepository.findOneBy({id});
        if(!enderecoExist){
            throw new Error ('endereco não existe');
        }else{
            return enderecoExist;
        }
    }

    async achaTodos(): Promise<Endereco[]>{
        return this.enderecoRepository.find();
    }

    async remove(id: number){
        const enderecoExist = await this.enderecoRepository.findOneBy({id});
        if(enderecoExist){
            await this.enderecoRepository.remove(enderecoExist);   
        }else{
            throw new Error ('endereco não existe');
        }
    }

    async atualiza(id: number, endereco: Endereco){
        const enderecoExist = await this.enderecoRepository.findOneBy({id});
        if(!enderecoExist){
            throw new Error('Endereco não existe');
        }else{
            return this.enderecoRepository.update(id, endereco);
        }

    }
    
        
    

}
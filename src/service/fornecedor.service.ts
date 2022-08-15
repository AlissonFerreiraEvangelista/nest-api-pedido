import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fornecedor } from "src/entity/fornecedor.entity";
import { Repository } from "typeorm";


@Injectable()
export class FornecedorService{

    constructor(@InjectRepository(Fornecedor) private fornecedorRepository: Repository<Fornecedor>){}


    async criar(fornecedor: Fornecedor): Promise<Fornecedor>{
        return await this.fornecedorRepository.save(fornecedor);
    }

    async achaTodos(): Promise<Fornecedor[]>{
        return await this.fornecedorRepository.find();
    }

    async achaUm(id: number): Promise<Fornecedor>{
        const fornecedorExists = await this.fornecedorRepository.findOneBy({id});
        if (fornecedorExists) {
            return fornecedorExists;
        }else{
            throw new Error ('Fornecedor não existe');
        }
        
    }

    async atualiza(id: number, fornecedor: Fornecedor){
        const fornecedorExists = await this.fornecedorRepository.findOneBy({id});
        if (!fornecedorExists){
            throw new Error ('Fornecedor não existe');
        }else{
            return this.fornecedorRepository.update(id, fornecedor);
        }                 
    }

    async remove(id: number){
        const fornecedorExists = await this.fornecedorRepository.findOneBy({id});
        if (fornecedorExists) {
            await this.fornecedorRepository.remove(fornecedorExists);
        }else{
            throw new Error ('Fornecedor não existe');
        }
    }

    
}
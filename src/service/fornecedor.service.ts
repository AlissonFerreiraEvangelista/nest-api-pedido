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
}
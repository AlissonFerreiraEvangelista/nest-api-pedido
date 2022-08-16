import { Body, Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { throws } from "assert";
import { Pessoa } from "src/entity/pessoa.entity";
import { Repository } from "typeorm";



@Injectable()
export class PessoaService{

    constructor(@InjectRepository(Pessoa) private pessoaRepository: Repository<Pessoa>){}


    async achaTodos(): Promise<Pessoa[]>{
        return this.pessoaRepository.find();
    }

    async criar(@Body() pessoa: Pessoa): Promise<Pessoa>{
        const pessoaExists = await this.pessoaRepository.findOneBy(pessoa);
        if(pessoaExists){
            throw new Error ("Pessoa já Cadastrada");
        }else{
            return await this.pessoaRepository.save(pessoa);
        }   
    }

    async achaUm(id:number): Promise<Pessoa>{
        const pessoaExists = await this.pessoaRepository.findOneBy({id});
        if(!pessoaExists){
            throw new Error ("Pessoa não encontrada");
        }else{
            return pessoaExists;
        }
    }

    async remove(id:number){
        const pessoaExists = await this.pessoaRepository.findOneBy({id});
        if(!pessoaExists){
            throw new Error ("Pessoa não encontrada");
        }else{
            this.pessoaRepository.remove(pessoaExists);
        }
    }

    async atualiza(id: number, pessoa: Pessoa){
        const pessoaExists = await this.pessoaRepository.findOneBy({id});
        if(!pessoaExists){    
            throw new Error ("Pessoa não encontrada");
        }else{
            return this.pessoaRepository.update(id, pessoa);
        }
    }



    
}
import { Body, Controller, Get, Post } from "@nestjs/common";
import { Endereco } from "src/entity/endereco.entity";
import { EnderecoService } from "src/service/endereco.servico";


@Controller('endereco')
export class EnderecoController{

    constructor(private readonly enderecoService: EnderecoService){}

    @Post('salvar')
    async criar(@Body() endereco: Endereco){
        return await this.enderecoService.criar(endereco);
    }

    @Get('Todos')
    async todos(){
        return await this.enderecoService.achaTodos();
    }
    
    

}
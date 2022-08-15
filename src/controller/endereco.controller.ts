import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Endereco } from "src/entity/endereco.entity";
import { EnderecoService } from "src/service/endereco.servico";


@Controller('endereco')
export class EnderecoController{

    constructor(private readonly enderecoService: EnderecoService){}

    @Post('salva')
    async salva(@Body() endereco: Endereco){
        return await this.enderecoService.criar(endereco);
    }

    @Get('Todos')
    async achaTodos(){
        return await this.enderecoService.achaTodos();
    }

    @Get(':id')
    async achaUm(@Param('id') id:number){
        return await this.enderecoService.achaUm(id);
    }
    @Put(':id')
    async atualiza(@Param('id') id:number, endereco: Endereco){
        return await this.enderecoService.atualiza(id, endereco);
    }
    @Delete(':id')
    async delete(@Param('id') id:number){
        return await this.enderecoService.remove(id);
    }

    
    

}
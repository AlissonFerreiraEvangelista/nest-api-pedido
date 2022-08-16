import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Pessoa } from "src/entity/pessoa.entity";
import { PessoaService } from "src/service/pessoa.service";



@Controller('pessoa')
export class PessoaController{

    constructor(private readonly pessoaService: PessoaService){}

    @Post('salva')
    async salva(@Body() pessoa: Pessoa){
        return await this.pessoaService.criar(pessoa);    
    }
    @Get('todos')
    async todos(){
        return await this.pessoaService.achaTodos();
    }
    @Get(':id')
    async achaUm(@Param('id') id: number){
        return await this.pessoaService.achaUm(id);
    }
    @Put(':id')
    async atualiza(@Param('id') id: number,@Body() pessoa: Pessoa){
        return await this.pessoaService.atualiza(id, pessoa);
    }
    @Delete(':id')
    async delete(@Param('id') id:number){
        return await this.pessoaService.remove(id);
    }
}
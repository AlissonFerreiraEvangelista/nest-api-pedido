import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Fornecedor } from "src/entity/fornecedor.entity";
import { FornecedorService } from "src/service/fornecedor.service";


@Controller('fornecedor')
export class FornecedorController{

    constructor(private readonly fornecedorService: FornecedorService){}

    @Post('salvar')
    async salvar(@Body()fornecedor: Fornecedor){
        return this.fornecedorService.criar(fornecedor)
    }

    @Get('todos')
    async todos(){
        return this.fornecedorService.achaTodos()
    }
    @Get(':id')
    async achaUm(@Param() id: number){
        return this.fornecedorService.achaUm(id);
    }
    @Put(':id')
    async atualiza(@Param() id: number, fornecedor: Fornecedor){
        return this.fornecedorService.atualiza(id, fornecedor);
    }

    @Delete(':id')
    async delete(@Param() id: number){
        return this.fornecedorService.remove(id);
    }
}
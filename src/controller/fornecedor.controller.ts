import { Body, Controller, Get, Post } from "@nestjs/common";
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
}
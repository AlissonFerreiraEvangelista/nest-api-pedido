import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Fornecedor } from "src/entity/fornecedor.entity";
import { Pedido } from "src/entity/pedido.entity";
import { FornecedorService } from "src/service/fornecedor.service";
import { PedidoService } from "src/service/pedido.service";


@Controller('pedido')
export class PedidoController{

    constructor(private readonly pedidoService: PedidoService){}

    

    @Post('salva')
    async salva(@Body()pedido: Pedido){
        return this.pedidoService.criar(pedido)
    }

    @Get('todos')
    async todos(){
        return this.pedidoService.achaTodos()
    }

    @Get(':id')
    async achaUm(@Param('id') id:number){
        return this.pedidoService.achaUm(id);
    }

    @Put(':id')
    async atualiza(@Param('id') id:number, pedido: Pedido){
        return this.pedidoService.atualiza(id, pedido);
    }

    @Delete(':id')
    async delete(@Param() id:number){
        this.pedidoService.remove(id);
    }
}



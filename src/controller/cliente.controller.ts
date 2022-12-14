import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Cliente } from "src/entity/cliente.entity";
import { ClienteService } from "src/service/cliente.service";


@Controller('cliente')
export class ClienteController{

    constructor(private readonly clienteService: ClienteService){}


    @Post('salva')
    async salva(@Body() cliente: Cliente){
        return this.clienteService.criar(cliente);
    }

    @Get('todos')
    async achaTodos(){
        return this.clienteService.achaTodos();
    }

    @Get(':id')
    async achaUm(@Param('id') id: number){
        return this.clienteService.achaUm(id);
    }

    @Put(':id')
    async atualiza(@Param('id') id:number, @Body() cliente: Cliente){
        return this.clienteService.atualiza(id, cliente);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        this.clienteService.remove(id);
    }


}
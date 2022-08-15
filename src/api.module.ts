import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './controller/cliente.controller';
import { EnderecoController } from './controller/endereco.controller';
import { FornecedorController } from './controller/fornecedor.controller';
import { PedidoController } from './controller/pedido.controller';
import { PessoaController } from './controller/pessoa.controller';
import { Cliente } from './entity/cliente.entity';
import { Endereco } from './entity/endereco.entity';
import { Fornecedor } from './entity/fornecedor.entity';
import { Pedido } from './entity/pedido.entity';
import { Pessoa } from './entity/pessoa.entity';
import { ClienteService } from './service/cliente.service';
import { EnderecoService } from './service/endereco.servico';
import { FornecedorService } from './service/fornecedor.service';
import { PedidoService } from './service/pedido.service';
import { PessoaService } from './service/pessoa.service';


@Module({
  imports: [TypeOrmModule.forFeature([Pessoa,Pedido,Endereco,Fornecedor,Cliente])],
  providers: [ClienteService, FornecedorService, EnderecoService,PedidoService, PessoaService],
  controllers: [PessoaController,ClienteController, EnderecoController, FornecedorController, PedidoController],
})
export class apiModule {}
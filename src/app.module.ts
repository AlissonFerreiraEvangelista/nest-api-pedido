import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { apiModule } from './api.module';
import { Cliente } from './entity/cliente.entity';
import { Endereco } from './entity/endereco.entity';
import { Fornecedor } from './entity/fornecedor.entity';
import { Pedido } from './entity/pedido.entity';
import { Pessoa } from './entity/pessoa.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: 'Ta$2506f',
    database: 'pedido',
    entities: [Endereco,Pessoa,Pedido,Fornecedor,Cliente, Pessoa],
    synchronize: true,
    autoLoadEntities:true,
  }),apiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

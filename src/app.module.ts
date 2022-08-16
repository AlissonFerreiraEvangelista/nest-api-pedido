import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { apiModule } from './api.module';
import { Cliente } from './entity/cliente.entity';
import { Endereco } from './entity/endereco.entity';
import { Fornecedor } from './entity/fornecedor.entity';
import { Pedido } from './entity/pedido.entity';
import { Pessoa } from './entity/pessoa.entity';


@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'pedido',
    entities: [Endereco, Pessoa, Pedido, Fornecedor, Cliente, Pessoa],
    synchronize: true,
    autoLoadEntities:true,
  }),apiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

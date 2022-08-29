import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { apiModule } from './api.module';
import { Cliente } from './entity/cliente.entity';
import { Endereco } from './entity/endereco.entity';
import { Fornecedor } from './entity/fornecedor.entity';
import { Pedido } from './entity/pedido.entity';
import { Pessoa } from './entity/pessoa.entity';


@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USER,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + '/**/*.entity{json,.ts}'],
    synchronize: true,
    autoLoadEntities:true,
  } as TypeOrmModuleOptions),apiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

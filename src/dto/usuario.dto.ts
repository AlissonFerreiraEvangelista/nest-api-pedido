import { IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "src/helpers/regex.helper";


export class UsuarioDto{


    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Matches(RegExHelper.senha)
    senha: string;


}
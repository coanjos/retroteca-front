import { usuario } from 'src/app/usuarios/interfaces/usuario';

export interface Auth {
    usuario: usuario;
    token: string;
}
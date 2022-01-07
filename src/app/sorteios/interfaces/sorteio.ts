import { jogo } from "src/app/jogos/interfaces/jogo";

export interface sorteio {
    _id: string;
    jogo: jogo;
    ativo: boolean;
    sorteadoEm: Date;
}
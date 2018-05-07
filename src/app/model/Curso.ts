export class Curso {
    key: string;
    titulo: string;
    descricao: string;
    url: string;

    constructor (c:any) {
        this.key = c.key;
        this.titulo = c.payload.titulo;
        this.descricao = c.payload.descricao;
        this.url = c.payload.url;
    }

    static list() {

    }
}
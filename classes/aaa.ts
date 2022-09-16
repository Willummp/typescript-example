class Part {
    private sexo : string;
    public idade : number;
    public humor : string;

    public definirSexo (sexo:string){
      this.sexo = sexo;
    }
}

const user: Part= new Part();
user.idade = 40;
user.humor = 'Boladona';
user.definirSexo ('Mulher');
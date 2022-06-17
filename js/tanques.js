class Tanque{
    constructor(id,nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        
    }
}
const tanques = [];
tanques.push(new Tanque('500bcp','Tanque 500 lts bicapa',9000));
tanques.push(new Tanque('500tcp','Tanque 500 lts tricapa',12000));
tanques.push(new Tanque('750bcp','Tanque 750 lts bicapa',12000));
tanques.push(new Tanque('750tcp','Tanque 750 lts tricapa',16000));
tanques.push(new Tanque('1000bcp','Tanque 1000 lts bicapa',16000));
tanques.push(new Tanque('1000tcp','Tanque 1000 lts tricapa',20000));

const tanquesJson = JSON.stringify(tanques)

localStorage.setItem("rubroTanques", tanquesJson)

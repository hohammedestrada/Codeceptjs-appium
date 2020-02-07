//const modulo = require('./Login.module')
const login = require('./Login.module')
let wait = { retries: 10, minTimeout: 3000 };

const I = actor();
// Add in your custom step files

Given('he seleccionado el {string} e ingresado la {string} o {string} o {string} y el {string}', async function (Pais,Region,Zona, Seccion, Password) {
    this.Pais=Pais;
    this.Region=Region;
    this.Zona=Zona;
    this.Seccion=Seccion;
    this.Password=Password;
});

When('click en el boton "Ingresar"', async function(Producto){
    login.InicioSesionSoporte(this.Pais=Pais,this.Region,this.Zona, this.Seccion,  this.Password=Password);
  });

Then('puedo ver mi indicador de VENTA NETA, PEDIDOS Y RUTAS DE DESARROLLO', function(){
    login.Validaciones();

  });

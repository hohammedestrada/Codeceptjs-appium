const I = actor();
const utils= require('../../utils/utils');
let wait = { retries: 5, minTimeout: 2000 };
// Add in your custom step files
//let config=utils.fnGetConfig("QAS");    
let config=  require('./Login.locator')
let locator= config.locator

module.exports={  
  GetConfig(Entorno){
    let configJson= utils.fnGetConfig(Entorno);    
    return configJson;
  },

   /*Inicion de Sesion Soporte*/
   InicioSesionSoporte (Pais, Region, Zona, Seccion, Password) {
    I.retry(wait).seeAppIsInstalled(config.config.appPackage);  
    I.retry(wait).tap(locator.clickLoginSoporte);
    I.retry(wait).tap(locator.fieldPaisSoporte);
    I.retry(wait).tap(utils.fnGetPaisSoporte(config,Pais))
    I.retry(wait).fillField(locator.fieldRegion,Region);
    I.retry(wait).hideDeviceKeyboard();

    if (Zona!=undefined){
      I.retry(wait).fillField(locator.fieldZona,Zona);
      I.retry(wait).hideDeviceKeyboard();
    }

    if (Seccion!=undefined){
      I.retry(wait).fillField(locator.fieldSeccion,Seccion);
      I.retry(wait).hideDeviceKeyboard();
    }

    I.retry(wait).fillField(locator.fieldPasswordSoporte,Password);
    I.retry(wait).hideDeviceKeyboard();
    I.retry(wait).tap(locator.clickIngresarSoporte);
    I.wait(35);
  },

  Validaciones(){
    I.retry(wait).see('VENTA NETA');
    I.retry(wait).see('PEDIDOS');
  }
  ,
 


}


let mainConfig= require('./../../features/index');
const byId= '#'+mainConfig.appPackage;

config = {
    appPackage: mainConfig.appPackage,
    locator: {
        fieldPais: byId+':id/ivwSelect', 
        selectPais:{
            Bolivia: '//android.widget.ListView[1]/android.widget.RelativeLayout[1]', 
            Chile: '//android.widget.ListView[1]/android.widget.RelativeLayout[2]', 
            Colombia: '//android.widget.ListView[1]/android.widget.RelativeLayout[3]', 
            CostaRica: '//android.widget.ListView[1]/android.widget.RelativeLayout[4]', 
            Ecuador: '//android.widget.ListView[1]/android.widget.RelativeLayout[5]',    
            ElSalvador: '//android.widget.ListView[1]/android.widget.RelativeLayout[6]', 
            Guatemala: '//android.widget.ListView[1]/android.widget.RelativeLayout[7]', 
            Mexico: '//android.widget.ListView[1]/android.widget.RelativeLayout[8]', 
            Panama: '//android.widget.ListView[1]/android.widget.RelativeLayout[9]', 
            Peru: '//android.widget.ListView[1]/android.widget.RelativeLayout[10]', 
            PuertoRico: '//android.widget.ListView[1]/android.widget.RelativeLayout[11]', 
            RepublicaDominicana: '//android.widget.ListView[1]/android.widget.RelativeLayout[12]',
                 }
        ,
        fieldUsuario: byId+':id/til_user',
        fieldPassword: byId+':id/et_password',
        clickIngresar: byId+':id/bt_enter',
        clickMasOpcionesRb: byId+':id/rb4',
        clickCerrarSesion:'//android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[7]',  
        
        //Soporte
        clickLoginSoporte: byId+ ':id/btn_login_soporte',
        fieldPaisSoporte: byId+':id/spinnerPaises',
        selectPaisSoporte:{
            Bolivia: '//android.widget.ListView[1]/android.widget.TextView[1]', 
            Chile: '//android.widget.ListView[1]/android.widget.TextView[2]', 
            Colombia: '//android.widget.ListView[1]/android.widget.TextView[3]', 
            CostaRica: '//android.widget.ListView[1]/android.widget.TextView[4]', 
            Ecuador: '//android.widget.ListView[1]/android.widget.TextView[5]',     
            ElSalvador: '//android.widget.ListView[1]/android.widget.TextView[6]', 
            Guatemala: '//android.widget.ListView[1]/android.widget.TextView[7]', 
            Mexico: '//android.widget.ListView[1]/android.widget.TextView[8]', 
            Panama: '//android.widget.ListView[1]/android.widget.TextView[9]', 
            Peru: '//android.widget.ListView[1]/android.widget.TextView[10]', 
            PuertoRico: '//android.widget.ListView[1]/android.widget.TextView[11]', 
            RepublicaDominicana: '//android.widget.ListView[1]/android.widget.TextView[12]', 
                        },
        fieldRegion: byId+ ':id/inputRegion',
        fieldZona: byId+ ':id/inputZona',
        fieldSeccion: byId+ ':id/inputSeccion', 
        fieldPasswordSoporte: byId+ ':id/inputPassword',         
        clickIngresarSoporte: byId+':id/botonAcceder',
    }
}

exports.config=config;
exports.locator=config.locator;


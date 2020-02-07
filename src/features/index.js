const utils= require ('./../utils/utils')
let steps=utils.fnGetFiles('./src/features','.steps.js')


let config={
    ambiente:'QAS', 
    app: './src/app/FFVV-multiperfil-develop-3.5.10.apk',
    platform: "Android",
    device: 'emulator',
    desiredCapabilities: { 
        appPackage:'com.belcorp.ffvv',
        appActivity: 'biz.belcorp.ffvv.presentation.feature.splash.SplashActivity', 
        udid: 'ZY323P89SV'  //'emulator-5554'//'ZY323P89SV' 
         }
}

module.exports.steps = [...steps];
module.exports.config=config
module.exports.appPackage= config.desiredCapabilities.appPackage;

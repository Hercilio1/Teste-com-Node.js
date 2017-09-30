exports.options = {
    desiredCapabilities: {
        platformName: 'android',
        platformVersion: '7.0',
        appPackage: 'br.pucrs.ages.adocoes',
        appActivity: 'br.pucrs.ages.adocoes.ListagemDeMenores.ListagemDeMenoresActivity',
        automationName: 'Appium',
        avdReadyTimeout: '2000',
        deviceName: 'Android Emulator - Nexus_5X_API_24:5554'
    },
    host: '127.0.0.1',
    port: 4723,
    path: '/wd/hub'
};
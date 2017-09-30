var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./desiredCapabilities').options;
var client = webdriverio.remote(config);

describe('Teste1 Testing', function () {
    before(function () {
        this.timeout(50000);
        return client.init();
    });

    // afterEach(function(){
    //     this.timeout(5000);
    //     return client.click('android=new UiSelector().resourceId("com.candl.athena:id/clear")');
    // });

    describe("First test addition", function () {
        this.timeout(15000);
        // it("test-close-startup-screen", function(){
        //     return client.click('android=new UiSelector().resourceId("com.candl.athena:id/btn_close")');
        // });
        
        it("test-two-positive-addition",function(){
           return client.click('android=new UiSelector().resourceId("br.pucrs.ages.adocoes:id/troca_listagem")')
        });
    });
//android=new UiSelector().resourceId("br.pucrs.ages.adocoes:id/troca_listagem")
    // after(function() {
    //         return client.end();
    // });
        
});


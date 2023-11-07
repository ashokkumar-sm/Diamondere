const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const apiCalls = require('../../CommonUtils/CommonAPI')
const context = require('../../CommonUtils/ScenarioContext')


class API {
    
    async registrationData() {
        const randomNumber = Math.floor(Math.random() * 99999)
        const randomEmail = 'diamondereAPItest' + randomNumber + '@gmail.com'
        context.setValue('registeredEmail', randomEmail)
        console.log('Random generated Email:', randomEmail);
        const data = {
        "firstName": "Automation API",
        "lastName": "Testing",
        "email": `${randomEmail}`,
        "password": "Pass@123",
        "conditionAccepted": true
        }
        return data
    } 


    async callRegAPI() {
        const url = dmd.config.registerAPI;
        const body = await this.registrationData()
        const header = {'Content-Type': 'application/json'}
        return browser.call(async () => {
            await apiCalls.fetch_post_request(url, body, header)
            const responseStatus = await apiCalls.getResponseStatus();
            context.setValue('statusCode', responseStatus)
            console.log('HTTP Status Code:', responseStatus);
        })
    }

    async loginData() {
        const registeredEmailUsingAPI = context.getValue('registeredEmail')
        const data = {
            "email": `${registeredEmailUsingAPI}`, 
            "password": "Pass@123", 
            "loginType": "retail"
        }
        return data
    }


    async callLoginAPI() {
        const url = dmd.config.loginAPI;
        const body = await this.loginData()
        const header = {'Content-Type': 'application/json'}
        return browser.call(async () => {
            await apiCalls.fetch_post_request(url, body, header)

            const responseStatus = await apiCalls.getResponseStatus();
            context.setValue('statusCode', responseStatus)
            console.log('HTTP Status Code:', responseStatus);
        });
    }

    async getAuthToken() {
        const getJson = await apiCalls.getResponseBodyJson();
        const getStatusText = await getJson.response.statusText;
        context.setValue('authToken', getStatusText)
        console.log('AuthToken:', getStatusText)
    }


    async productsData() {
        const registeredEmailUsingAPI = context.getValue('registeredEmail')
        const data = {
                "id": null,
                "products": [
                  {
                    "cookieDetails": {
                      "productListString": "null~5019~/prn/c/flori/flori_wg_ru~null~Marquise-cut Natural AAAA Ruby and Diamond Eternity Ring in 14k White Gold~flori_wg14_ru_disi~p/rings-eternity-flori-5019-4968?metal=14k-white-gold&stones=ruby&stones=si-diamond~In 14k White Gold with Ruby, SI Diamond~5andhalf~~~~LaconicRegular~~LaconicRegular~~14k White Gold~/prn/c/flori/flori_wg_ru_0.jpg~~5019_flori_wg14_ru_disi~~0~0~~~~normal~~0~extend~60~0",
                      "stoneListString": "null~1~3~ru~Ruby~false~1.82~~~ruaaa~0`null~2~2~disi~SI Diamond~false~0.68~~~disisi~0`"
                    }
                  },
                  {
                    "cookieDetails": {
                      "productListString": "null~6924~/prn/c/lileas/lileas_wg_aq~null~Aquamarine and Diamond Nature Necklace in 14k White Gold~lileas_wg14_aq_disi~p/necklaces-nature-lileas-6924-6793?metal=14k-white-gold&stones=aquamarine&stones=si-diamond~In 14k White Gold with Aquamarine, SI Diamond~~~~~~~~~14k White Gold~/prn/c/lileas/lileas_wg_aq_0.jpg~~6924_lileas_wg14_aq_disi~~0~0~~~~normal~~0~extend~~0",
                      "stoneListString": "null~1~17~aq~Aquamarine~false~1.4~~~aqaaa~0`null~2~2~disi~SI Diamond~false~0.07~~~disisi~0`"
                    }
                  },
                  {
                    "cookieDetails": {
                        "productListString": "null~766~/prn/c/box/box_wg~null~Chain for Lileas in 14k White Gold~box_wg14~null~In Chain for Lileas in 14k White Gold~16_chain_com~~~~~~~~14k White Gold~/prn/c/box/box_wg_0_r.jpg~6924~766_box_wg14~~0~0~~~~normal~~0~extend~~0",
                        "stoneListString": ""
                    }
                  },
                  {
                    "cookieDetails": {
                      "productListString": "null~11376~/prn/c/mavis/mavis_wg_lt~null~Emerald-cut London Blue Topaz Tennis Bracelet in 14k White Gold~mavis_wg14_lt~p/bracelets-tennis-bracelets-mavis-11376-11192?metal=14k-white-gold&stones=london-blue-topaz~In 14k White Gold with London Blue Topaz~~~~~~~~~14k White Gold~/prn/c/mavis/mavis_wg_lt_0.jpg~~11376_mavis_wg14_lt~7~0~0~~~~normal~~0~extend~~0",
                      "stoneListString": "null~1~46~lt~London Blue Topaz~false~23.4~~~ltaaa~0`"
                    }
                  },
                  {
                    "cookieDetails": {
                      "productListString": "null~907~/prn/c/vogue/vogue_wg_em~null~Natural AAAA Emerald Drops Earring in 14k White Gold~vogue_wg14_em~p/earrings-drops-vogue-907-905?metal=14k-white-gold&stones=emerald~In 14k White Gold with Emerald~~~~~~~~hinge_back~14k White Gold~/prn/c/vogue/vogue_wg_em_0.jpg~~907_vogue_wg14_em~~0~0~~~~normal~~0~extend~36~0",
                      "stoneListString": "null~1~5~em~Emerald~true~2.52~8~6~emaaa~0`"
                    }
                  }
                ],
                "actionType": "INSERT",
                "userInfo": {
                  "id": null,
                  "name": "Automation API Testing",
                  "email": `${registeredEmailUsingAPI}`,
                  "phNumber": null,
                  "birthDate": null,
                  "anniversaryDate": null,
                  "is_approved": 41,
                  "isActive": 41,
                  "location": null
                },
                "billingDetailsJSON": null,
                "shippingDetailsJSON": null,
                "paymentType": null,
                "deliveryType": "normal",
                "myojId": null,
                "pageSource": "normal",
                "pageSourceCategory": "",
                "pageSourceStoneCode": null,
                "myojAddToCart": 1,
                "myojStoneId": null,
                "addionalInfo": {
                  "mensBand": 0,
                  "womensBand": 0,
                  "noReturns": 0
                },
                "timestamp": null,
                "pageType": "normal",
                "jsonObject": null,
                "giaCertificationApplicable": 0
              }
              
        return data
    }


    async callAddProductsAPI() {
        const url = dmd.config.addToCartAPI
        const body = await this.productsData()
        const token = context.getValue('authToken')
        const header= {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}
        return browser.call(async () => {
            await apiCalls.fetch_post_request(url, body, header)

            const responseStatus = await apiCalls.getResponseStatus();
            context.setValue('statusCode', responseStatus)
            console.log('HTTP Status Code:', responseStatus);
        })
    }

}

module.exports = API
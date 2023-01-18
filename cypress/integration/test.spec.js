// const fs = require("fs");
let route;
let streets = []
let rooms = []
let square = []
describe('street automate', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            if(err.message.includes('Aw, Snap!')){
                return false
            }
            throw err
        })
    })
    it('test 1', () => {
        cy.readFile('SearchResult.json').then(data => {
            for(let j = 0; j < data.SearchResult.length; j++) {
                cy.readFile('data.json').then(data1 => {
                    for(let i = 0; i < data1.data.user.publishedHomes.length; i++) {
                        // cy.log(data1.data.user.publishedHomes[i].squareMeters, data1.data.user.publishedHomes[i].location.route)
                        if(data.SearchResult[j].SquareMeters == data1.data.user.publishedHomes[i].squareMeters && data.SearchResult[j].StreetName == data1.data.user.publishedHomes[i].location.route && data.SearchResult[j].NoOfRooms == data1.data.user.publishedHomes[i].roomCount ){
                            expect(data1.data.user.publishedHomes[i].squareMeters).to.equal(data.SearchResult[j].SquareMeters),
                            expect(data1.data.user.publishedHomes[i].location.route).to.equal(data.SearchResult[j].StreetName),
                            expect(data1.data.user.publishedHomes[i].roomCount).to.equal(data.SearchResult[j].NoOfRooms)
                            cy.wait(3000)
                            break
                        } 
                        // if(data1.data.user.publishedHomes[i].squareMeters != data.SearchResult[j].SquareMeters && data1.data.user.publishedHomes[i].location.route != data.SearchResult[j].StreetName && data1.data.user.publishedHomes[i].roomCount != data.SearchResult[j].NoOfRooms){
                        // //     // cy.fail('Rental object is not found')
                        // //     // expect(`${data.SearchResult[j].SquareMeters}`).to.not.contain(`${data1.data.user.publishedHomes[i].squareMeters}`)
                        //     expect(data.SearchResult[j].StreetName).to.not.contain(data1.data.user.publishedHomes[i].location.route)
                        // //     // expect(`${data.SearchResult[j].NoOfRooms}`).to.not.contain(`${data1.data.user.publishedHomes[i].roomCount}`)
                    }
                    cy.wait(1000)
                })
            }
        })
    })
    it('test 2', () => {
        cy.readFile('SearchResult copy.json').then(data => {
            for(let j = 0; j < data.SearchResult.length; j++) {
                cy.readFile('data.json').then(data1 => {
                    for(let i = 0; i < data1.data.user.publishedHomes.length; i++) {
                        // cy.log(data1.data.user.publishedHomes[i].squareMeters, data1.data.user.publishedHomes[i].location.route)
                        if(data.SearchResult[j].SquareMeters == data1.data.user.publishedHomes[i].squareMeters && data.SearchResult[j].StreetName == data1.data.user.publishedHomes[i].location.route && data.SearchResult[j].NoOfRooms == data1.data.user.publishedHomes[i].roomCount ){
                            expect(data1.data.user.publishedHomes[i].squareMeters).to.equal(data.SearchResult[j].SquareMeters),
                            expect(data1.data.user.publishedHomes[i].location.route).to.equal(data.SearchResult[j].StreetName),
                            expect(data1.data.user.publishedHomes[i].roomCount).to.equal(data.SearchResult[j].NoOfRooms)
                            cy.wait(3000)
                            break
                        } 
                        // if(data1.data.user.publishedHomes[i].squareMeters != data.SearchResult[j].SquareMeters && data1.data.user.publishedHomes[i].location.route != data.SearchResult[j].StreetName && data1.data.user.publishedHomes[i].roomCount != data.SearchResult[j].NoOfRooms){
                        // //     // cy.fail('Rental object is not found')
                        // expect(`${data.SearchResult[j].SquareMeters}`).to.not.contain(`${data1.data.user.publishedHomes[i].squareMeters}`)
                        // expect(data.SearchResult[j].StreetName).to.not.contain(data1.data.user.publishedHomes[i].location.route)
                        // expect(`${data.SearchResult[j].NoOfRooms}`).to.not.contain(`${data1.data.user.publishedHomes[i].roomCount}`)
                    }
                    cy.wait(1000)
                })
            }
            
        })
    })

    it('test 3', () => {
        cy.readFile('SearchResult copy 2.json').then(data => {
            for(let j = 0; j < data.SearchResult.length; j++) {
                cy.readFile('data.json').then(data1 => {
                    for(let i = 0; i < data1.data.user.publishedHomes.length; i++) {
                        // cy.log(data1.data.user.publishedHomes[i].squareMeters, data1.data.user.publishedHomes[i].location.route)
                        if(data.SearchResult[j].SquareMeters == data1.data.user.publishedHomes[i].squareMeters && data.SearchResult[j].StreetName == data1.data.user.publishedHomes[i].location.route && data.SearchResult[j].NoOfRooms == data1.data.user.publishedHomes[i].roomCount ){
                            expect(data1.data.user.publishedHomes[i].squareMeters).to.equal(data.SearchResult[j].SquareMeters),
                            expect(data1.data.user.publishedHomes[i].location.route).to.equal(data.SearchResult[j].StreetName),
                            expect(data1.data.user.publishedHomes[i].roomCount).to.equal(data.SearchResult[j].NoOfRooms)
                            cy.wait(3000)
                            break
                        } 
                        // if(data1.data.user.publishedHomes[i].squareMeters != data.SearchResult[j].SquareMeters && data1.data.user.publishedHomes[i].location.route != data.SearchResult[j].StreetName && data1.data.user.publishedHomes[i].roomCount != data.SearchResult[j].NoOfRooms){
                        // //     // cy.fail('Rental object is not found')
                        // expect(`${data.SearchResult[j].SquareMeters}`).to.not.contain(`${data1.data.user.publishedHomes[i].squareMeters}`)
                        // expect(data.SearchResult[j].StreetName).to.not.contain(data1.data.user.publishedHomes[i].location.route)
                        // expect(`${data.SearchResult[j].NoOfRooms}`).to.not.contain(`${data1.data.user.publishedHomes[i].roomCount}`)
                    }
                    cy.wait(1000)
                })
            }
            
        })
    })

    it('test 4', () => {
        cy.readFile('SearchResult copy 3.json').then(data => {
            for(let j = 0; j < data.SearchResult.length; j++) {
                cy.readFile('data.json').then(data1 => {
                    for(let i = 0; i < data1.data.user.publishedHomes.length; i++) {
                        // cy.log(data1.data.user.publishedHomes[i].squareMeters, data1.data.user.publishedHomes[i].location.route)
                        if(data.SearchResult[j].SquareMeters == data1.data.user.publishedHomes[i].squareMeters && data.SearchResult[j].StreetName == data1.data.user.publishedHomes[i].location.route && data.SearchResult[j].NoOfRooms == data1.data.user.publishedHomes[i].roomCount ){
                            expect(data1.data.user.publishedHomes[i].squareMeters).to.equal(data.SearchResult[j].SquareMeters),
                            expect(data1.data.user.publishedHomes[i].location.route).to.equal(data.SearchResult[j].StreetName),
                            expect(data1.data.user.publishedHomes[i].roomCount).to.equal(data.SearchResult[j].NoOfRooms)
                            cy.wait(3000)
                            break
                        } 
                        // if(data1.data.user.publishedHomes[i].squareMeters != data.SearchResult[j].SquareMeters && data1.data.user.publishedHomes[i].location.route != data.SearchResult[j].StreetName && data1.data.user.publishedHomes[i].roomCount != data.SearchResult[j].NoOfRooms){
                        // //     // cy.fail('Rental object is not found')
                        // expect(`${data.SearchResult[j].SquareMeters}`).to.not.contain(`${data1.data.user.publishedHomes[i].squareMeters}`)
                        // expect(data.SearchResult[j].StreetName).to.not.contain(data1.data.user.publishedHomes[i].location.route)
                        // expect(`${data.SearchResult[j].NoOfRooms}`).to.not.contain(`${data1.data.user.publishedHomes[i].roomCount}`)
                    }
                    cy.wait(1000)
                })
            }
            
        })
    })
})


// describe('Samtrygg ', () => {
//     beforeEach(() => {
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             // returning false here prevents Cypress from
//             // failing the test
//             return false
//         })
        
//     });
//     it('test 1', () => {
//         cy.readFile('data.json').then(data => {
//             route = data.data.user.publishedHomes.map(value => {
//                 return [
//                     {
//                         address: value.location.route
//                     }, 
//                     {
//                         blocketRooms: value.roomCount
//                     }, 
//                     {
//                         blocketSquareMeter: value.squareMeters
//                     }
//                 ]
//             })
//         }) 
//     })
    
//     it('test2', () => {
//         cy.readFile('SearchResult.json').then(data => {
//             for(let i = 0; i < route.length; i++){
//                 // data.SearchResult.forEach(street => {
//                 //     expect(street.StreetName).to.equal(route[i].address)
//                 console.log(route[i][0])
//                 // })
//             // const filterValues =  data.SearchResult.filter(street => {
//             //         return (
//             //             {
//             //                 samStreetAddress: street.StreetName === route[i]
//             //             },
//             //             {
//             //                 samNoOfRooms: street.NoOfRooms === route[i]
//             //             },
//             //             {
//             //                 samSquareMeter: street.SquareMeters === route[i]
//             //             }
//             //         )
//             //     })
//                 console.log(filterValues)
//                 // .forEach(matchValue => {
//                 //     expect(route[i]).to.eq(matchValue.StreetName)
//                 //     expect(route[i]).to.eq(matchValue.NoOfRooms)
//                 //     expect(route[i]).to.eq(matchValue.SquareMeters)
//                 // })
                
//             }
            
//         })
//     })
// })

// const propertyAddress = home.location.locality
            // const concatAddress = `${propertyName} ${propertyAddress}`
            // const namesEncoded = concatAddress.replace(/ /g, "+")
            // cy.log(namesEncoded)
            // cy.get('input[id="hero-search"]').focus().type(`${propertyName} ${propertyAddress}`)
            // cy.get('input[class="top-panel-search__btn"]').click().wait(3000).then(() => {
            //     cy.request({
            //         method: 'GET',
            //         // url: `https://www.samtrygg.se/Home/GetPredictionsJson?searchText=${namesEncoded}`,
            //         // url: `https://www.samtrygg.se/RentalObject/SearchResult?search=${namesEncoded}&neLat=&neLng=&swLat=&swLng=`,
            //         url: `https://www.samtrygg.se/RentalObject/NewSearch?place=${propertyName}`,
            //         headers: {
            //             // 'Cookie': '.ASPXANONYMOUS=LCvubUoBe4P2XOSkitcnCeY8vumezdPT4rBUA_0mo_Zo1L6nQEQM1-HSYwQFAE-jMo5d5tYI43j0_9lg7g2OKm0jTfsxUwALnFkHFD5JLnomhWLikrah2pJDGdFg9qhGTz93-BkGu_9QYY6_3r2eNQ2',
            //             'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            //             'Accept-Encoding': 'gzip, deflate, br',
            //             'Connection': 'keep-alive',
            //             'accept-language': 'en-US,en-PK;q=0.9,en;q=0.8',
            //             'authority': 'www.samtrygg.se',
            //             // 'cookie': '.ASPXANONYMOUS=smQf_cdG_LP_AS8qejKvs1zjAxBaMuahtYxnHSyAeVK_5fxr-rA0G5iaIJI_DpR2zlDYP4KIfRc9jrifBgjjsrZeOvBesDB8bjusW4f3lxkVzjZpwhJQCSZ-Be_QoWp2yUMf_0BHedhXQHvQ383RkQ2; _rdt_uuid=1672378935652.8cf21c59-fe89-440d-ba10-057c9cf3a8e1; sfpxs=sid-ut18hjrmsnjhfzai; _tt_enable_cookie=1; _ttp=s_QjlFQccW1PYSP8NNUUl7-CAvd; _fbp=fb.1.1672378938371.1336722439; _pin_unauth=dWlkPVl6Sm1NR1psWVRVdE9XTmhOeTAwTlRJeExUZzBZVGN0TkRBeFpqVTFOV0l3WXpRdw; CookieScriptConsent={"action":"accept","categories":"[\"targeting\",\"unclassified\",\"performance\",\"functionality\"]","key":"3cf302e4-5bf9-4b9b-89d0-d71d5830d935"}; _gcl_au=1.1.273759839.1672379017; dep=167b84ce-42b0-422a-9ee1-d907571ac314; _gid=GA1.2.598936901.1672634007; ln_or=eyI5MzQ4NiI6ImQifQ%3D%3D; _clck=1wpwevq|1|f7z|0; _ga_QLG9Z0EDJJ=GS1.1.1672813067.20.1.1672814744.54.0.0; _uetsid=99e47c608a5611edaad3155740a9ae9d; _uetvid=b779a950880411edb279b7bc1a997a97; cto_bundle=4y_RoV9KM3BLeSUyRnhadjlzSmkyZlJyWUg1TlZqU0FPQUdubUxYM0pDVWF3V2llM2lJbFdqYnFsWkdtNXlkT1VOMnpzJTJCRzY2ejdCa2VkbmNLRkQxS09rdUFVbDBVVFZqTk5iS0V5SGhoYzNoZzNBSSUyQnB0UHB3TWJnSGJNRXFIT3VvSTBsUSUyQjY4eEJqbGtxdmRucEpqSGFBaFRIdyUzRCUzRA; _ga=GA1.2.103521243.1672378936; _gat_UA-29584683-1=1; _clsk=11my161|1672821784488|1|1|m.clarity.ms/collect',
            //             'referer': 'https://www.samtrygg.se',
            //             'sec-ch-ua': 'https://"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
            //             'sec-ch-ua-mobile': '?0',
            //             'sec-ch-ua-platform': "Windows",
            //             'sec-fetch-dest': 'document',
            //             'sec-fetch-mode': 'navigate',
            //             'sec-fetch-site': 'same-origin',
            //             'sec-fetch-user': '?1',
            //             'upgrade-insecure-requests': '1',
            //             'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
            //         }
            //     }).then(resp => {
            //         expect(resp.status).to.equal(200)
            //         })
            // // })
            // cy.go('back')  
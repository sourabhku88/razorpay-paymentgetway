import React from 'react'

const imageLink = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD8QAAIBAgQDBAcHAwIGAwAAAAECAAMRBBIhMQVBURMiMmEGQlJxgZGhFCNiscHR8DPh8UOCFSRUcpKyJTRT/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIREBAQACAgIDAAMAAAAAAAAAAAECEQMxEiEEE0EiUXH/2gAMAwEAAhEDEQA/APngMuMvswcsJ0cxVRH8LWMhpNeVEsr/AIoRwi395yyw4b2luJayP4d4Uq1K+sqU/DHDhm9XLeDNOqh8LfpAAqwgptBNXfObUxZTY2vLJiqfNGU+RuIBcs7aRXR/C6ny2+kKFa3hgDVmhBVsJMkmSB26v6sqaa/5kKTozCEcyaerKFPaXSXY5tJ0Mw0Daj8oAciyGkvtQxfNpZWnQi28DD3QpcUJGoZReGNPXxW/2yFWVSYCbrvKqusKxb2ZxGXnvArJC3WdgCtpJaWEggcEksBOlYRxTCgwawgy+7zhV0f2d4XtmFMiCCA6q0HibpQqZulpB3A081HN1N4w+Gpv41WdwYy0lUcgBGbrON3v0+nx44eOqzavDkt3Ay+7WLmhiKJ+6qfp/abRK2gXVbzrhb+uXJxcd6ZoxOJT+rSWp55f1EumOosbOrU/MG4jgXLqJdaVKr/VpqR57zpca4fTP7Ap1qNXRKqt72sfkYQp1Ww6y1ThGGqC9J2QnobiLnhOMoG+GrAjoDlv+kwl4MxcvSVKQL1cfhv/ALNAlRzZf1EicSot40qL5qQRK5WWdiFJLNLpXw9XRaqnyOh+sN2elxmsIQtmYaSlSrGDSsDFqq6QAl9fFJ4pR5UQLlGklczSQDlLThDW12nBLr/LawJT8Jy7yy+cIFVp0Uj6jQKKuYyxpy+Qetvzne8NBtIB2y+XnAY174e29yI4HXnvEeIkZkywu9LU8Vbu9ZXE4ltMrRNT1jeCodszFtgIymvbthnc/wCMCTEupuWjCViyhmbnFK6ZapUcjacBy93rLr9YmdxtxvbcUCrTzL0lUzAynDw60FZ8wQ3Ck7G1r/mJerWyT0YZ430ZY5WbNUzteNUqltJijEtnEbp152vHK4/bnj00ajKwir4OjUzF6NN7jcg3+YMp22sItTSanDHLL5d6rHx2Ao0qRdBUTQ6aMPrY/WMcOaomHTKWa/IX2neMVi9FKQ8VRwB/PlNfDiklFaRpqQFA6TyfJ1MtRrgtyx2z2qqB95vyutzKVFUqD3hfnvNR8FSdDlGX43mbieHMtyHzD3WnCO2ijUb67/C0C9GFelXo6DNY+RMoaroRnW/na1pQApJDtiFJ1/K8kDgllhGoj1ZXI6eJdIR1RChrdD5H9JRTL2gEDL6wK+bSdmj7QYp/wy602XX/ANDAjUmA0W46D85k485cSR7KgfrNtS0wsW2bF1m/Fb5aSwDBhaGIak3c25wEk1buarOM8b5Rok0a5FRjlJ3lMThGSzobp1iQPeE18FfEBEPhAsZyytx66e7imHPdWeyjY6t9mTDqzdmLgDpe1/yEfwmENXDmpU3tpEMdTSjiWVeUZHEbYbs13MXdkyxZ4/HDO459qtTysT5zoaFFvsod5QIKozJPo/H5Psnvt5vkYeF/0NqmWc+1taUxFNla8Ax0nt9SbfJ5LvIzgwcXxKmG9Tvfz6T0BVlFxtymNwGnmarWbfwL/PlNnvDQNpPi8uXlna+nxY+OEijmwv3lvzgmqtzfMOUK7fhvAnK3szm6KtXp+uGWL1Fw9Ym+UnlfSXqpvAGn+E/7ZYKnCrfRfpJOZbesR75IFFq1ASHW9uXOM0mV7WbKfZiujENe2mttjOtYkuNtRKhzs1bQjL5idFJhoDmHlvFkquii2pvt5cv1j1Kur6fDp9ZBQC2kusOVVx3tvPeSjhHq1LUmOXq3KNnQLaU2bpPMXvr1n0OlgaFKixcB3ynWw+Ok8/X4ThcShfDFFI9am2YDy0NhNSaS152SN4jhuKoXOQVE6pr9IraxsRaaRIfDYlsO11gJc5OyGX+oTrv+0WStY53C7g5/5yozNozcusWIsxB5GHydhiFXNmYWJPTTbWdalnZnMzJ49t5X7J5foRrNlCZuUNhcU1AERWdE7YzfThlyXHvs0+JNWqM0PisNlw3bDmInh2prUXP1j3Eq61lo4elu7Afz6S3mzw/hGseLDllzy7P8Jo9nw+kNs4zE+/aNsv4oWmURFQbKLC86wvr1nmaJuzDTpBM6894zVpX1XLeKVEte/wBdopFTm5NpKN/23904Vy6/ltKEtEV3u+0w+ckpdpyBbL2hsqZSNe0G069O4uX35rpb4So31jFN2Ombw9NpULhSEv6t7bfp8/nG6VCxUMLsTt1jWGwNTEr2QQZL3z7hTNzBcOp4ZBpdgNTbc+6QIYXAFjmqDKB6o2jtWrh8FSvUOQcgo1Puh8TSr9g/2QJ2ttBUJt8xPHcQwmOFUNj0ftibiqLAD9/gbfObkZ2LxTilfHMaNNWSjfvKDlc2638vK3mYhTdqbL2VYgZrgqxBv8NSfr5CEo0mKEj7083TQ6HUHMPInUcus4FzHRxVRRbncq35630717bSpTtDizeHE0g5ve62Sw9+0bNDh3ENWyZ9jn7jfPn85jKpJVQwZ72KVGPdYdD+e3ukW3dWzrY5gGU2PkLc99B8THqpNm8X6N1FucO4b8NTun5/2mXiMDXwotWTJ5Np8jtNrD8TxVEEuc4c3BJzIBzsNutyOm82KPEsFi70yo7MC5J1XXqDqPdreT3G/Twm0e4cUVvvNjpPTYj0e4fjENXCMKf4qTZlB6Ecph4z0e4hhLlFFdRrmo6ke9TJuWaawuWOUsd4pg6a0FqUV03MxjvNOnxHJSNGumuxtoR8InVphyXpOCvQycWWWM8a9HysePkszwLxvhS5serf/mM3X+cooZsej1G9OtWO5bIvuGp/Sdcnix7aGb4+QlS7LrCtTUi9Rbk7G23xgaiNbQ5h0Ov1nJ0qfaj6yyCuj+FrGLOG93v2gWWKh11U6nTzEE1P4xdXZB4oVcQPXW8y1FCmskP2lJtQ1pIA6YZ3CZLtyHWbXD+CsQtTFXAJuKQ/WY2epTKvTurKLq45e+anDvSepSYJxWnp/wBRTuVPvE0zk9AlIUrKoAA0AHKEAkw1bD4mitXD1EqUzsyG/wDiGK20hFVEIaYrIUcKy/iW4/vOKntaDpzMYpjQW0lGHj/RihiD22HIpupuotcX/g228p5bieAx+Adjj8IDQUnvUzYG+h1H5nXpPpaiR0DqVcAqeTc42afLKLpV0JFUt3chWxA5Aa6jllB8zCZbkU86jdnpOQwzDVtdumug3tPZ8T9FcDjAXpJ2FUm4ant8RPOYrgHFcAxDBa2G0+8W7EAHTz+G0bGa2VQzsOwLDMobvJl29+UGwA1HQS7I27oxbcvS89dSdA1tybaHQaXhLsaxWgzLT8YFVQ2Y9Q3hJJFrnTpOKlmLIjYaoQVUsxIIvrYk+HXVtfzlFadWpQc1qDszqAQaBKsB193v3mvg+PHKFxRV3vqSMh8r2Fvha5vraY7IMiK9KyeLt6IAXX1j0A1Avr85RnFZnKsKirs3+p8OvmTe0jW3qatHhnFRlqJSqPyD2V/gRvsdjMjGeioFU/Zq7UzzSqtyv890DwPB1atValBqiUqZOcnXMeiz0YARRbYDSZ6Xt4biHCcbw/vYimTT2zpqJ6DhOCalw2iGXvFQx95ncbxGpWx64TBqrlGBrMwuqjp756laVF6IqIl8wGt72mts6ebbD1EJyQFQH11+U9BXoIBb1htymdiKTrc5fr+sztWUUR/DuINqP4YxiEUkWGU894Fi6b6jrGyF6lCAakyxw11bScOU6yKQvJHClMmcl2aUpgqxVu7+sMaSnu235DUGWKrUAEnZsg7veX2TykA6dGthKvbYGs9CoN8vhbyIm1w/0oCutLitEUzsK1MXT5cvr8JmIytpmuPWB3hDSUqVyjKYNbe3w1SlXpCtRqJUpMNGUwqi0+fUaGLwbl+GYhqBY3K6FG94M1+G+llWhUFDjFHIx0FdBofeJWdaevWXAgcLXpYuitbD1FqI3hZdR/mMAXMDlpCPa2nZIqxm8Q4Jg8eDdAjtuyW1v1Gx+N/hPNY/0bxuFb/lrYjCr3hSABNumU3Bv1/xPcASERtdPldekA7VCz0a1yLWbU8/MC3PWOcJ4S+Nclsow2hNakApY9B/PfPdY/heDx9lxOHWoRrfY/AjUTi4DsaarQFqagAAchHkmmctEIiqosALAX2nn+O8UZapwGAN8QdHdRc0/d5xv0l4wcM//D8Cc2MYWZl/0x+/5bzO4dw+nh6Nyc1Y6u8Ed4Zhf+H07Uj94R3mve828Dj8lMrWSy8yv7TMdXSdoVrXjta2WenVQtSKssTrNlF1bTmp2mdjMRSpWdiVb8MXXifaqRdavlswjRKZquhJ7ti2iqNorUpsmwyjy2hqVSlVW2f7zp0kcMBamLDmJAk4LaNrA2ZAbNp8I26LzRkPtJz9+kA9Nl1BuOo0+m0soB29QaZbySwy81ufNf7SQDqVtq9z9Yb2fdFT/wCP4usPSfufDnFBHphu8BZhsx3kR6lPSopIPr/v/adSrbuC9tyOf+IdMjg5d/OQcTXUH3ecs1OnVUoyg/haCakV1p6Hp1l6bnw1Rlb3i3zgDw/2zhNXtOGYjIt7tQe7I3unouF+luFrMuH4kn2PEE2u/wDTY+TfvMgaCzaiDr4WniKZBpq68wd4H0AAOAwIIOoINwZ20+d4LEcV4K3/AMfXz4ff7NWF1t5dPp8Z6fg/pbgOIMKGJP2PEnQ0qp7pPk372kWN2SdtpKwJaeb9KvSH7CBw/hwNTH1dDl17K/O3NvL9N++lvpIOE0hhsKRUxtTwrv2Y6kfpMb0cwdOkzYvEMa2Lc3LNupM1DYWC4NiMAhr4mm1SpU7z1BckX1N4ypUqSrBl5FZ6A1gyEHQ8tRoZl4rDJVJazUq1/Gp1J/WKhBibajIeYimKrJQpl6l7nRQN2hqpq0nIxILAnxqNdOomBi8QK1ZuSja3IeUSDlfEPVvnYHyEUqtZAF3zTpOmkFUOk2yJSxlWnoe8B1Go+M0cJxJ2sofQalX/AHmNGMCt6pJ2H5yUb64xH30PIN+hnCMxuNzM9jprOLVqJ4Gt5HnMaa2ey1Lm2a3kbSRYYx7d9Wv85I0bXTXUnNaEGplRe2u8uJUEQsfZNtL8xpGKTLnBNrt6yxVZe2oikaAF3K3vYWzHlIqLUBRuXdgKVbImU6m9wekKHy1ABuALyKqUKH7tsy+ydxLI+bQNrLgNTACtkJ+ss1NaiguO8N2Xf94K6HU6VNxtFsZgaWJXvJmY7X5Qrh6agVDcH1xtLIwIBBzAcoQpguI8X4I2Sg/2nDL/AKNUEgDyO4/Lyj2N9PqZwhXCYSomKYW+8Iyof1k7tVSMsX+wUGfMyXbqbXH6ywZ3D8HUeqcZjz2taocwLjn1mpmA7yswI5iVqUmTw95fygg8odpY+2j3YcyNx75ati0ZSxqqRa5J0t7+kzmb/MyeKVatSoKKjugA5ebf4tCK8U4m+Nq2XSkDZR184heVB0kmhCZV9p0ypBNlHiJ0gdo0zWqqii192m7Tw6JSFIFSAN4ng6ZoDvrcvzXUxq6Moam2t5mrA6uHIF0ff1TtFiCNCMpmhnPrfC20pVWk4haSuo85JVqNUsey8F9JI2jRQ5WKrqpGoMuqBRdbD+cpAgJ7nyO8Igtufh1kEA9rxcpYL1b94amqupY7DT4zop9096AEhvVUEc/7QyEABiNQND0kCywSBYVs2mWwPia3ihCaiL4tLf4lDogFr678pW1mJBLA79YF2d/XOaVKhu9T+7bnfwsJ1VB1zWGbX9pdk6j4QBir3grDI3Q7fDrC5yDZuUowUgK9mXoevlBEVaW33iey3iWA1m6QNWktS5bQjYyqVVcEo17bjpOrVgK1VakwJ1HlE8Zh0xRBIseTTWc31yxStSvcruessRh1KVXDv3x2i8ipsf58/hAuRUJZQt+gFj8ptOCBZlGnyiOIwtOrdlOV5djPPnHOH0EJNaoLjYd7aBOGqBh2huOsbpN2CWp3A5g8/hzi0OMVYANZm9obwHZZyezvmHTe/nOUqy38I/7RC9ypoSwO4OW1pBTO9NTfvKN8u4+ECW7eyU/WOvlGGzX+876W0cbiLlbfeXsdlYc5FHZApyjYSRf7RUGgyED2tDJA1aAzvlGjKPpDhRkHK50IkkiizLk/qankRvO3ta+t+fOSSICKc1Pfnv1nfDtoRrJJFEZdBfU9Zz1R752SIIfWy6Hr5woF1vtb6SSRSBtqRCEaCSSRaWq0cxLXKsOa6fOLGo6uEfKCTYMo3nJJqMrCrybwyxJIveSSAGogclW6XiboF1WSSAK/WVfa/wDBJJKBHTSdWsyeY5g7SSQCitmIOzHSxlr5wUbYd34ySQKBWtqit53tJJJIr//Z'
const Card = () => {

    const buyProduct = async () => {
        try {
            let apiResponse = await fetch('http://localhost:5000/acces-key?name=sourabh&password=sundaynight11:00',{
                method:"POST",
            });
            apiResponse = await apiResponse.json();
            

            const options = {
                "key": apiResponse?.result?.key_id, // Enter the Key ID generated from the Dashboard
                "amount": "40000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Mac Book Pro (M2)",
                "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
                "image": imageLink,
                "order_id": "order_Nc4ukKdEJYdrtn", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "prefill": {
                    "name": "Sourabh Kumar",
                    "email": "sourabh.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            const rzp1 = window.Razorpay(options);
            rzp1.open();

        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <div className="card" style={{ "width": "18rem" }}>
                <img style={{width:"30vw", height:"30vh" }} src={imageLink} className="card-img-top" alt="Images"/>
                    <div className="card-body">
                        <h5 className="card-title">Mac Book Pro (M2)</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" onClick={()=>{buyProduct()}}>Buy Abhi</button>
                    </div>
            </div>
        </div>
    )
}

export default Card;
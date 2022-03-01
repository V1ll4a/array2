urlsImg=["https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAlbert_Einstein&psig=AOvVaw3XYHHkmGvRv41QyuVvet_c&ust=1646248891732000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiP-5bRpfYCFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuseovirtual.csic.es%2Fsalas%2Fmagnetismo%2Fbiografias%2Fnewton.htm&psig=AOvVaw2AL4WrhTSeHeWDTxzoIpmt&ust=1646249044342000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIDPg97RpfYCFQAAAAAdAAAAABAD ","https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuseovirtual.csic.es%2Fsalas%2Fmagnetismo%2Fbiografias%2Fnewton.htm&psig=AOvVaw2AL4WrhTSeHeWDTxzoIpmt&ust=1646249044342000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIDPg97RpfYCFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuseovirtual.csic.es%2Fsalas%2Fmagnetismo%2Fbiografias%2Fnewton.htm&psig=AOvVaw2AL4WrhTSeHeWDTxzoIpmt&ust=1646249044342000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIDPg97RpfYCFQAAAAAdAAAAABAD"]
nombres= ["Einstein","Isaac. N.","N. Tesla","Galileo Galilei" ]
html= ""
for(i=0; i<4; i++){
html= html+ `<div class="cientificos"> <img src="${urlsImg[i]}"/><p>${nombres[i]}</p></div>`
}
let contenedor =  document.querySelector("#contenedor")
    contenedor.innerHTML = html
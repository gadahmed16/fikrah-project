let TheLogoImg = document.getElementsByClassName("IntroImg")[0];
let TheH1Logo = document.getElementsByClassName("TheLogoNameInIntroPage")[0];
let TheDisLogo = document.getElementsByClassName("TheLogoDisCratiptonInIntroPage")[0];
let TheIntroPage = document.getElementsByClassName("IntroPage")[0];
setTimeout(() => {
    TheLogoImg.setAttribute("class", "IntroImg TheOutRoImg");
    TheH1Logo.setAttribute("class", "TheLogoNameInIntroPage TheOutRoLogoName");
    TheDisLogo.setAttribute("class", "TheLogoDisCratiptonInIntroPage TheOutRoDis");
}, 1700);
setTimeout(() => {
    TheIntroPage.style = "display:none;";
}, 2300);
// TheSeachBarActive 
let TheSearchBarActiveComponts = [...document.getElementsByClassName("ActiveOnClick")];
let ExitMark = document.getElementsByClassName("ssss")[0];
let TheUl = document.getElementsByClassName("TheMainUl")[0];
let TheNavBar = document.getElementsByTagName("nav")[0];
// El Zorar Bta3 El 3dsa OW El KAlam BS Fy El Screan El Small 
let TheBTNInSmallScreanTOSearch = document.getElementsByClassName("TheSearchInputInSmallScreanEdit")[0]
TheSearchBarActiveComponts.forEach(Element => {
    Element.addEventListener("click", () => {
        TheSearchBarActiveComponts[2].focus();
        TheSearchBarActiveComponts[0].style.transition = " all .2s linear";
        TheSearchBarActiveComponts[0].style.border = "2px solid black";
        TheSearchBarActiveComponts[0].style.width = "320px";
        ExitMark.style.display = "block ";
})
// Lma Tdos 3ala El Zorar El So8yar Y7sal da 
TheBTNInSmallScreanTOSearch.addEventListener("click" , () =>{
    TheUl.style.display = "none"
    TheBTNInSmallScreanTOSearch.style.display = "none"
    TheInputParent.style.display = "flex"
    TheNavBar.style.padding = "13.5px 0px"
})
})
// When I Click X in First Input In Small Screan Will Do That
ExitMark.addEventListener("click", () => {
    TheSearchBarActiveComponts[2].blur();
    TheSearchBarActiveComponts[0].style.transition = " all .1s linear";
    TheSearchBarActiveComponts[0].style.border = "0px solid black";
    TheSearchBarActiveComponts[0].style.width = "290px";
    ExitMark.style.display = "none";
    TheSearchBarActiveComponts[2].value = "";
})

// The Input In SMAll Screan Coustmize 
let TheCompontsOnClick = [...document.getElementsByClassName("InputSmallScreanCompnts")];
let TheInputParent = document.getElementsByClassName("InputPartSmallScreen")[0];
let CloseBTNINSMAllINput = document.getElementsByClassName("TheDelIconInSmallScreen")[0];
// When I Foucs in Input
TheCompontsOnClick.forEach(Element => {
    Element.addEventListener("click",() => {
        TheCompontsOnClick[2].focus();
        TheInputParent.style.transition = " all .2s linear";
        TheInputParent.style.border = "2px solid black";
        TheInputParent.style.width = "75%";
        CloseBTNINSMAllINput.style.display = "block ";
    })
})
// When I blur or Get out From Input
function GetOutFromInput() {
    TheBTNInSmallScreanTOSearch.style.display = "flex"
    TheInputParent.style.display = "none"
    TheUl.style.display = "flex"
    TheNavBar.style.padding = "0px"
}
TheCompontsOnClick[2].addEventListener("blur",()=>{
    GetOutFromInput()
})
CloseBTNINSMAllINput.addEventListener("blur",()=>{
    GetOutFromInput()
})
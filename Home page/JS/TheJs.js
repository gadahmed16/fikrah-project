let TheLogoImg = document.getElementsByClassName("IntroImg")[0];
let TheH1Logo = document.getElementsByClassName("TheLogoNameInIntroPage")[0];
let TheDisLogo = document.getElementsByClassName("TheLogoDisCratiptonInIntroPage")[0];
let TheIntroPage = document.getElementsByClassName("IntroPage")[0];
setTimeout(() => {
    TheLogoImg.setAttribute("class","IntroImg TheOutRoImg");
    TheH1Logo.setAttribute("class","TheLogoNameInIntroPage TheOutRoLogoName");
    TheDisLogo.setAttribute("class","TheLogoDisCratiptonInIntroPage TheOutRoDis");
}, 1700);
setTimeout(() => {
    TheIntroPage.style = "display:none;";
}, 2300);
// TheSeachBarActive 
let TheSearchBarActiveComponts = [...document.getElementsByClassName("ActiveOnClick")];
let ExitMark = document.getElementsByClassName("ssss")[0];
TheSearchBarActiveComponts.forEach(Element => {
    Element.addEventListener("click",() => {
        TheSearchBarActiveComponts[2].focus();
        TheSearchBarActiveComponts[0].style.transition = " all .2s linear";
        TheSearchBarActiveComponts[0].style.border = "2px solid black";
        TheSearchBarActiveComponts[0].style.width = "300px";
        ExitMark.style.display = "block ";
    })
})
ExitMark.addEventListener("click",() => {
    TheSearchBarActiveComponts[2].blur();
    TheSearchBarActiveComponts[0].style.transition = " all .1s linear";
    TheSearchBarActiveComponts[0].style.border = "0px solid black";
    TheSearchBarActiveComponts[0].style.width = "240px";
    ExitMark.style.display = "none";
    TheSearchBarActiveComponts[2].value = "";
})
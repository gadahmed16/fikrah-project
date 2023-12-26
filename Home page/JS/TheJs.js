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
// The NavBar And Landing Page 
{let TheLogoImg = document.getElementsByClassName("IntroImg")[0];
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
// The Header
let TheHeader = document.getElementsByTagName("header")[0];
let TheBottomNavBar = document.getElementsByClassName("BottomNavBar")[0];
let TheLeftPart = document.getElementsByClassName("TheLeftPartContiner")[0];
let TheCenterPart = document.getElementsByClassName("TheCenter")[0];
setTimeout(() => {
    TheHeader.style = " animation: TheHeaderEdit .4s linear  ; opacity:1;";
    TheLeftPart.style.animation = "TheLeftPartANiStart 0.4s linear"
    TheLeftPart.style.display = "block"
    TheCenterPart.style.animation = "TheCenteAni 1s linear"
    TheCenterPart.style.display = "block"

}, 2400);

// T25yr El Bottom Nav Bar 34an bysl m4akl lma y7sal El animation Bta3 El NavBar Top
// We Y7sal Animation Bardo
setTimeout(() => {
    TheBottomNavBar.style.visibility = "visible"
    TheBottomNavBar.style.transition = "all .3s linear"
    TheBottomNavBar.style.animation = "TheBottomNavAni .5s linear"
}, 3000);
// TheSeachBarActive 
let TheSearchBarActiveComponts = [...document.getElementsByClassName("ActiveOnClick")];
let ExitMark = document.getElementsByClassName("ssss")[0];
let TheUl = document.getElementsByClassName("TheMainUl")[0];
let TheNavBar = document.getElementsByTagName("nav")[0];
// El Zorar Bta3 El 2dsa OW El KAlam BS Fy El Screan El Small 
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
// TheCompontsOnClick[2].addEventListener("blur",()=>{
//     GetOutFromInput()
// })
// The CheckBox Edit
//  TheSide Navbar
let TheSideNavBarParent = document.getElementsByClassName("TheRightPartInSmallScreanHamprgerMenu")[0];
let TheBTNHampergerMenuOPEN = document.getElementsByClassName("TheHAmpMenu")[0];
let TheBTNHampergerMenuClose = document.getElementsByClassName("CloseTheHamp")[0];
TheBTNHampergerMenuOPEN.addEventListener("click" , () => {
    TheSideNavBarParent.style.display = "block"
    TheSideNavBarParent.classList.add("TheRightPartInSmallScreanHamprgerMenuAnimationIn");
})
TheBTNHampergerMenuClose.addEventListener("click" ,() => {
    // TheSideNavBarParent.setAttribute("class","TheRightPartInSmallScreanHamprgerMenu TheRightPartInSmallScreanHamprgerMenuAnimationOUT")

    TheSideNavBarParent.style.display = "none"
})}
// The Main Page
// The Center Part Wirite Post Animation 
let theParentOfWritePost = document.getElementsByClassName("WritePostPart")[0];
let TheIeleInPartenWritePost = document.getElementsByClassName("TheIELEdiv");
let TheIColor = ["#f58434dc", "#d498a0", "#74c6a4", "#a382cc"];
// console.log(thep)
for(let i =0;i< TheIeleInPartenWritePost.length;i++){
    TheIeleInPartenWritePost[i].addEventListener("mouseover" , () => {
        theParentOfWritePost.style = `box-shadow: 0px 0px 30px ${TheIColor[i]};`

    })
    TheIeleInPartenWritePost[i].addEventListener("mouseleave" , () => {
        theParentOfWritePost.style.transition = `: all .3s linear;`
        theParentOfWritePost.style = `transition: all .3s linear; box-shadow: 0px 0px 4px black;`
    })
}
// JS form Posts
function ThePostEle() {
    
}
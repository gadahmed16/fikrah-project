// The NavBar And Landing Page 
{

    // The Header
    let TheHeader = document.getElementsByTagName("header")[0];
    let TheBottomNavBar = document.getElementsByClassName("BottomNavBar")[0];
    setTimeout(() => {
        TheHeader.style = " animation: TheHeaderEdit .4s linear  ; opacity:1;";
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
        TheBTNInSmallScreanTOSearch.addEventListener("click", () => {
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
        Element.addEventListener("click", () => {
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
    TheCompontsOnClick[2].addEventListener("blur", () => {
        GetOutFromInput()
    })
    CloseBTNINSMAllINput.addEventListener("click", () => {
        GetOutFromInput()
    })
    // The CheckBox Edit
    //  TheSide Navbar
    let TheSideNavBarParnt = document.getElementsByClassName("TheRightPartInSmallScreanHamprgerMenu")[0];
    let TheHampmenuBTN = document.getElementsByClassName("mesdnu")[0];
    let RuleOne = false;
    TheHampmenuBTN.addEventListener("click", () => {
        if (RuleOne === false) {
            TheSideNavBarParnt.style.display = "block"
            TheSideNavBarParnt.style.animation = "TheSideNavIn 0.3s linear  ";
            RuleOne = true;
        } else {
            TheSideNavBarParnt.style.animation = "TheSideNavOut 0.3s linear  ";
            setTimeout(() => {
                TheSideNavBarParnt.style.display = "none"
            }, 290);
            RuleOne = false;
        }
    })
}
// window.onresize = function(){
//     location.reload();
// }
// The Border when i click on the user
let ProfIleAdd = [...document.getElementsByClassName("ProfIleAdd")];
let TheEdit = [...document.getElementsByClassName("TheEdit")];
ProfIleAdd.forEach((ele) => {
    ele.addEventListener("click",() => {
        ele.style.borderLeft = "10px solid #f58634"
        ele.style.backgroundColor = "rgba(0, 0, 0, 0.267)"
        TheEdit.forEach((ele) => {
            ele.style.visibility = "visible"
        })
    })
})
// The masseage fun
let TheSendBTN = document.getElementsByClassName("TheSendBTN")[0];
let TheMassageParnt = document.getElementsByClassName("TheMassageBodyParnt")[0];
function  MESSENGBody(TheText){
    let TheBigBody = document.createElement("div");
    TheBigBody.classList.add("TheMassageBody");
    let TheMassageText = document.createElement("div");
    TheMassageText.classList.add("TheMassegeELe")
    TheMassageText.textContent = TheText;
    TheBigBody.appendChild(TheMassageText);
    TheMassageParnt.appendChild(TheBigBody);
}
let TheInputValue = document.getElementsByClassName("TheInputTwo")[0];
TheSendBTN.addEventListener("click",() => {
    MESSENGBody(TheInputValue.value)
})
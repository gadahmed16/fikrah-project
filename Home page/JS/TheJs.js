// The NavBar And Landing Page 
{
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
    // The Header
    let TheHeader = document.getElementsByTagName("header")[0];
    let TheBottomNavBar = document.getElementsByClassName("BottomNavBar")[0];
    let TheLeftPart = document.getElementsByClassName("TheLeftPartContiner")[0];
    let TheCenterPart = document.getElementsByClassName("TheCenter")[0];
    let TheRightPart = document.getElementsByClassName("TheRight")[0];
    setTimeout(() => {
        TheHeader.style = " animation: TheHeaderEdit .4s linear  ; opacity:1;";
        TheLeftPart.style.animation = "TheLeftPartANiStart 0.4s linear"
        TheLeftPart.style.display = "block"
        TheCenterPart.style.animation = "TheCenteAni 1s linear"
        TheCenterPart.style.display = "block"
        TheRightPart.style.animation = "TheRightAniIn 0.4s linear"
        TheRightPart.style.display = "block"

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
    let TheSideNavBarParent = document.getElementsByClassName("TheRightPartInSmallScreanHamprgerMenu")[0];
    let TheBTNHampergerMenuOPEN = document.getElementsByClassName("TheHAmpMenu")[0];
    let TheBTNHampergerMenuClose = document.getElementsByClassName("CloseTheHamp")[0];
    TheBTNHampergerMenuOPEN.addEventListener("click", () => {
        TheSideNavBarParent.style.display = "block"
        TheSideNavBarParent.classList.add("TheRightPartInSmallScreanHamprgerMenuAnimationIn");
    })
    TheBTNHampergerMenuClose.addEventListener("click", () => {
        // TheSideNavBarParent.setAttribute("class","TheRightPartInSmallScreanHamprgerMenu TheRightPartInSmallScreanHamprgerMenuAnimationOUT")

        TheSideNavBarParent.style.display = "none"
    })
}
// The Main Page
// The Center Part Wirite Post Animation 
let theParentOfWritePost = document.getElementsByClassName("WritePostPart")[0];
let TheIeleInPartenWritePost = document.getElementsByClassName("TheIELEdiv");
let TheIColor = ["#f58434dc", "#d498a0", "#74c6a4", "#a382cc"];
// console.log(thep)
for (let i = 0; i < TheIeleInPartenWritePost.length; i++) {
    TheIeleInPartenWritePost[i].addEventListener("mouseover", () => {
        theParentOfWritePost.style = `box-shadow: 0px 0px 30px ${TheIColor[i]};`

    })
    TheIeleInPartenWritePost[i].addEventListener("mouseleave", () => {
        theParentOfWritePost.style.transition = `: all .3s linear;`
        theParentOfWritePost.style = `transition: all .3s linear; box-shadow: 0px 0px 4px black;`
    })
}
// JS form Posts
let ThePlaceOfPosts = document.getElementsByClassName("PostsPartParent")[0];
let ButtonOfCreatePost = document.getElementsByClassName("CreatePostP")[0];
function ThePostBody(){
    // Big Post ParT{
    //      1 - The Header - Of Post
    //         1.1 - FirstPart In Header
    //         1.1.1 - Img Part > Img Element
    //         1.1.2 - Text Part Of Profile > b*3 
    //         1.2 - SecondPart In Header > button
    //      2 - The Discratipon Body - Of Post
    //         2.1 - p > Text 
    //         2.2 - Img (choice)
    //      3 - Stataics Of Post - Of Post
    //         3.1 - p > text , Icon
    //         <hr>
    //      4 - The Footer - Of Post
    //      4.1 - TheIELEdiv * 4
    //      4.2 - TheIcon In Every Element
    // }
    // The Big Parnt Of The post
    let TheBigParentBodyPost = document.createElement("div");
    TheBigParentBodyPost.classList.add("PostsPart");
    // 1 - The Header - Of Post
            let TheHeaderOfPost = document.createElement("div");
            TheHeaderOfPost.classList.add("HeaderOfpost");
        // 1.1 - TheFirsTPartInHeader
        let TheFirstParTInHeader = document.createElement("div");
        TheFirstParTInHeader.classList.add("FirstParTInHeader")
            // 1.1.1 - TheImgPartInFirstPart
            let TheImgPartDivInFirstPart = document.createElement("div");
            TheImgPartDivInFirstPart.classList.add("ImgPartInPost");
            // TheImgInDiv
            let TheImgPartElemntInFirstPart = document.createElement("img");
            TheImgPartElemntInFirstPart.classList.add("TheImgOFpost");
            TheImgPartElemntInFirstPart.setAttribute("src","../IntroDuction video's and img/Unknow.jpg");
            // 1.1.2 - The Text Part In FirstPart
            let TheTextPartInFirstPartInHeader = document.createElement("div");
            TheTextPartInFirstPartInHeader.classList.add("TextAndName");
            // The b's With Class
            // User Name
            let UserNamePost = document.createElement("b");
            UserNamePost.classList.add("UserNamePost","TheUserInfo");
            UserNamePost.textContent = "User Name"
            // Jop Name
            let JopName = document.createElement("b");
            JopName.classList.add("JopName","TheUserInfo");
            JopName.textContent = "The Jop Name";
            //  Time
            let TimeOfPost = document.createElement("b");
            TimeOfPost.classList.add("Time","TheUserInfo");
            TimeOfPost.textContent = "1h";
            let TheLogoOfTime = document.createElement("i");
            TheLogoOfTime.setAttribute("class","fa-solid fa-earth-americas");
            TimeOfPost.appendChild(TheLogoOfTime);
        // 1.2 - TheSecondPartInHeader
        let TheSecondParentHeader = document.createElement("div");
        TheSecondParentHeader.classList.add("TheSecondParentHeader");
            // 1.2.1 - The Button Of Follow
            let TheFollowBtn = document.createElement("button");
            TheFollowBtn.setAttribute("class","btn btn-outline-primary")
            TheFollowBtn.textContent = "Follow"
        // Add Button in The The Second Part
        TheSecondParentHeader.appendChild(TheFollowBtn);
        // Add b's Elements in The TextAndName
        TheTextPartInFirstPartInHeader.appendChild(UserNamePost);
        TheTextPartInFirstPartInHeader.appendChild(JopName);
        TheTextPartInFirstPartInHeader.appendChild(TimeOfPost);
        // Add ELemnt's In Img Div
        TheImgPartDivInFirstPart.appendChild(TheImgPartElemntInFirstPart);
        // Add Elemnt's in FirstPart
        TheFirstParTInHeader.appendChild(TheImgPartDivInFirstPart);
        TheFirstParTInHeader.appendChild(TheTextPartInFirstPartInHeader);
        // Add Elemnt's in Header
        TheHeaderOfPost.appendChild(TheFirstParTInHeader);
        TheHeaderOfPost.appendChild(TheSecondParentHeader);
    // 2 - The Discratipon Body - Of Post
    let DisBodyOfThePost = document.createElement("div");
    DisBodyOfThePost.classList.add("DisOfPost");
        // 2.1 - TheP Element Part
        let TheDisPEleInDisPart = document.createElement("p");
        TheDisPEleInDisPart.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio adipisci officiis";
        // 2.2 - TheImg Element Div
        let TheImgPartDivOfThePost = document.createElement("div");
        TheImgPartDivOfThePost.classList.add("ImgContinerOfPost");
        // 2.2.1 - TheImg ELement Of Post
        let theImgPostInDivOfPost = document.createElement("img");
        theImgPostInDivOfPost.classList.add("TheImgEleInPost");
        theImgPostInDivOfPost.setAttribute("src","../IntroDuction video's and img/NeomImg.jpg");
    // Add Img In Img Div
    // TheImgPartDivOfThePost.appendChild(theImgPostInDivOfPost);
    // Add Elemen's To The DisPart
    DisBodyOfThePost.appendChild(TheDisPEleInDisPart);
    DisBodyOfThePost.appendChild(TheImgPartDivOfThePost);
    // 3 - StataicsOfPost - of post
        let StataicsOfPost = document.createElement("div");
        StataicsOfPost.classList.add("StataicsOfPost");
        // 3.1 - The P Element's of Stataics
        let ThePoStataicsOfPost = document.createElement("p");
        ThePoStataicsOfPost.classList.add("StataicsOfPos");
        ThePoStataicsOfPost.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> 150 . 14 Comments`
        // Add ele In The Stataics 
        StataicsOfPost.appendChild(ThePoStataicsOfPost)
    // 4 - The Footer - Of Post
    let TheFooterOfThePost = document.createElement("div");
    TheFooterOfThePost.classList.add("TheFooterOFPost");
    let TheIcons = [`fa-solid fa-thumbs-up`,`fa-solid fa-message`,`fa-solid fa-share-from-square`,`fa-solid fa-paper-plane`];
    let TheWordsOfICon = ["Like","Comment","Share","Send"];
    for(let i = 0;i<TheIcons.length;i++){
        // TheIcon
        let TheIElement = document.createElement("i");
        TheIElement.setAttribute("class",`${TheIcons[i]}`);
        // The Text of Icon
        let TheTextOfIcon = document.createElement("b");
        TheTextOfIcon.classList.add("TheNameOfIcon");
        TheTextOfIcon.textContent = (`${TheWordsOfICon[i]}`);
        let PartOfIcon = document.createElement("div");
        PartOfIcon.classList.add("TheIELEdiv");
        PartOfIcon.appendChild(TheIElement);
        PartOfIcon.appendChild(TheTextOfIcon);
        TheFooterOfThePost.appendChild(PartOfIcon)
    }
    // hr Element
    let TheHrEle = document.createElement("hr");
    // Add The Main Three Parts In The PostPart
    TheBigParentBodyPost.appendChild(TheHeaderOfPost);
    TheBigParentBodyPost.appendChild(DisBodyOfThePost);
    TheBigParentBodyPost.appendChild(StataicsOfPost);
    TheBigParentBodyPost.appendChild(TheHrEle);
    TheBigParentBodyPost.appendChild(TheFooterOfThePost);
    ThePlaceOfPosts.appendChild(TheBigParentBodyPost);
}
ButtonOfCreatePost.addEventListener("click",() => {
    ThePostBody();
})
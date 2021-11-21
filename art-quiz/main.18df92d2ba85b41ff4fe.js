(()=>{"use strict";var e={157:(e,t,s)=>{s.r(t)},180:(e,t,s)=>{s.r(t)},788:(e,t,s)=>{s.r(t)},570:(e,t,s)=>{s.r(t)},70:(e,t,s)=>{s.r(t)},667:(e,t,s)=>{s.r(t)},523:(e,t,s)=>{s.r(t)},342:(e,t,s)=>{s.r(t)},3:(e,t,s)=>{s.r(t)},148:(e,t,s)=>{s.r(t)},995:(e,t,s)=>{s.r(t)},373:(e,t,s)=>{s.r(t)},752:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(i,o){function r(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=s(985),o=s(281),r=s(642),a=s(218),c=s(295),l=s(831);t.App=class{constructor(e){this.rootElement=e,this.setLocalStorage(),this.mainPage=new r.MainPage,this.settings=new l.Settings,this.artistsCategories=new i.Categories(o.CategoriesTypes.artists),this.picturesCategories=new i.Categories(o.CategoriesTypes.pictures),this.artistsQuestionPage=new a.QuestionPage(o.CategoriesTypes.artists,[],[],0,0),this.pictureQuestionPage=new a.QuestionPage(o.CategoriesTypes.pictures,[],[],0,0),this.score=new c.Score,this.rootElement.appendChild(this.mainPage.element),this.mainPage.settingsButton.element.addEventListener("click",(()=>{this.openSettings()})),this.settings.saveButton.element.addEventListener("click",(()=>{this.openMain()})),this.mainPage.artist.element.addEventListener("click",(()=>{this.openCategories(this.artistsCategories)})),this.mainPage.pictures.element.addEventListener("click",(()=>{this.openCategories(this.picturesCategories)})),this.artistsCategories.homeButton.element.addEventListener("click",(()=>{this.goToMainPage()})),this.picturesCategories.homeButton.element.addEventListener("click",(()=>{this.goToMainPage()})),this.score.homeButton.element.addEventListener("click",(()=>{this.goToMainPage()})),this.getImagesData().then((e=>{this.renderCards(e)}),(e=>{if(e)throw new Error("Json is not found!")}))}clearPage(){this.rootElement.innerHTML=""}openCategories(e){this.clearPage(),e.render(),this.rootElement.appendChild(e.element)}renderCards(e){const t=e.slice(0,120),s=e.slice(120);this.artistsCategories.categoriesCardsWrapper.element.addEventListener("click",(s=>{const n=s.target;if(n.className.includes("categories-card"))this.artistsQuestionPage=new a.QuestionPage(o.CategoriesTypes.artists,t.slice(10*(+n.id-1),10*+n.id),e,0,+n.id),this.artistsQuestionPage.categoriesButton.element.addEventListener("click",(()=>{this.openCategories(this.artistsCategories)})),this.artistsQuestionPage.homeButton.element.addEventListener("click",(()=>{this.goToMainPage()})),this.artistsQuestionPage.endRound.homeButton.element.addEventListener("click",(()=>{this.goToMainPage()})),this.artistsQuestionPage.endRound.categoriesButton.element.addEventListener("click",(()=>{this.openCategories(this.artistsCategories)})),this.openQuestion(o.CategoriesTypes.artists);else if("score-button"===n.className){const e=t.slice(10*(+n.id[0]-1),10*+n.id[0]);this.openScore(+n.id[0],e,o.CategoriesTypes.artists)}})),this.picturesCategories.categoriesCardsWrapper.element.addEventListener("click",(t=>{const n=t.target;if(n.className.includes("categories-card"))this.pictureQuestionPage=new a.QuestionPage(o.CategoriesTypes.pictures,s.slice(10*(+n.id-1),10*+n.id),e,0,+n.id),this.pictureQuestionPage.categoriesButton.element.addEventListener("click",(()=>{this.openCategories(this.picturesCategories)})),this.pictureQuestionPage.homeButton.element.addEventListener("click",(()=>{this.goToMainPage()})),this.pictureQuestionPage.endRound.homeButton.element.addEventListener("click",(()=>{this.goToMainPage()})),this.pictureQuestionPage.endRound.categoriesButton.element.addEventListener("click",(()=>{this.openCategories(this.picturesCategories)})),this.openQuestion(o.CategoriesTypes.pictures);else if("score-button"===n.className){const e=s.slice(10*(+n.id[0]-1),10*+n.id[0]);this.openScore(+n.id[0],e,o.CategoriesTypes.pictures)}}))}goToMainPage(){this.clearPage(),this.rootElement.append(this.mainPage.element)}openSettings(){this.mainPage.element.classList.add("hidden"),this.rootElement.removeChild(this.mainPage.element),this.rootElement.appendChild(this.settings.element),setTimeout((()=>{this.settings.element.classList.remove("hidden")}),0)}openMain(){this.settings.element.classList.add("hidden"),this.rootElement.removeChild(this.settings.element),this.rootElement.appendChild(this.mainPage.element),setTimeout((()=>{this.mainPage.element.classList.remove("hidden")}),0)}openQuestion(e){this.clearPage(),e===o.CategoriesTypes.artists?this.rootElement.append(this.artistsQuestionPage.element):this.rootElement.append(this.pictureQuestionPage.element)}openScore(e,t,s){this.clearPage(),this.score.categoriesButton.element.addEventListener("click",(()=>{this.openCategories("artists"===s?this.artistsCategories:this.picturesCategories)})),this.score.render(e,t,s),this.rootElement.append(this.score.element)}getImagesData(){return n(this,void 0,void 0,(function*(){const e=yield fetch("./images.json");return yield e.json()}))}setLocalStorage(){localStorage.getItem("score")||localStorage.setItem("score",JSON.stringify({artists:{},pictures:{}}))}}},583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[],s){this.element=document.createElement(e),this.element.classList.add(...t),s&&(this.element.textContent=s)}}},844:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CategoriesCard=void 0;const n=s(583);s(157);class i extends n.BaseComponent{constructor(e,t){super("div",["categories-card"]),this.titleBackground=new n.BaseComponent("div",["title-back"],`${e} Категория`),this.categoryResult=new n.BaseComponent("span",["cat-result"],t>=0?t.toString():""),this.scoreButton=new n.BaseComponent("div",["score-button"]),this.scoreButton.element.setAttribute("id",`${e}-score`),this.titleBackground.element.append(this.categoryResult.element),this.element.append(this.scoreButton.element,this.titleBackground.element)}}t.CategoriesCard=i},985:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Categories=void 0;const n=s(583),i=s(844),o=s(665);s(180);const r=s(281);class a extends n.BaseComponent{constructor(e){super("section",["categories"]),this.homeButton=new n.BaseComponent("button",["button","home-button"],"На главную"),this.title=new o.PageTitle("Категории"),this.element.append(this.title.element),this.type=e,this.categoriesCardsWrapper=new n.BaseComponent("div",["cards-wrapper"]),this.element.append(this.homeButton.element),this.element.append(this.categoriesCardsWrapper.element),this.render()}render(){this.categoriesCardsWrapper.element.innerHTML="",this.type===r.CategoriesTypes.artists&&[1,2,3,4,5,6,7,8,9,10,11,12].forEach((e=>{const t=new i.CategoriesCard(e,this.getCategoryScore(e)).element;t.setAttribute("id",e.toString()),t.style.backgroundImage=`url(./cat${e}.webp)`,-1!==this.getCategoryScore(e)&&t.classList.add("colored"),this.categoriesCardsWrapper.element.append(t)})),this.type===r.CategoriesTypes.pictures&&[1,2,3,4,5,6,7,8,9,10,11,12].forEach((e=>{const t=new i.CategoriesCard(e,this.getCategoryScore(e)).element;t.setAttribute("id",e.toString()),t.style.backgroundImage=`url(./cat${e+12}.webp)`,-1!==this.getCategoryScore(e)&&t.classList.add("colored"),this.categoriesCardsWrapper.element.append(t)}))}getCategoryScore(e){if(localStorage.getItem("score")){const t=JSON.parse(localStorage.getItem("score"));return t[this.type][e]?t[this.type][e].filter((e=>e)).length:-1}}}t.Categories=a},281:(e,t)=>{var s;Object.defineProperty(t,"__esModule",{value:!0}),t.CategoriesTypes=void 0,(s=t.CategoriesTypes||(t.CategoriesTypes={})).artists="artists",s.pictures="pictures"},314:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EndroundPopup=void 0;const n=s(583);s(788);class i extends n.BaseComponent{constructor(){super("div",["popup"]),this.title=new n.BaseComponent("h3",["question-title"],"Поздравляем!"),this.homeButton=new n.BaseComponent("button",["button","home-button"],"На главную"),this.categoriesButton=new n.BaseComponent("button",["button","categ-button"],"Следующая категория"),this.result=new n.BaseComponent("h2",["result-text"]);const e=new n.BaseComponent("div",["popup-wrapper","endround-wrapper"]),t=new n.BaseComponent("span",["good-job"]);e.element.append(this.title.element,this.result.element,t.element,this.homeButton.element,this.categoriesButton.element),this.element.append(e.element)}typeScore(e){this.result.element.textContent=`${e} / 10`}}t.EndroundPopup=i},489:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainCard=void 0;const n=s(583);s(570);class i extends n.BaseComponent{constructor(e,t){super("div",["main-card",e]),this.title=new n.BaseComponent("h2",["card-title"],t),this.element.appendChild(this.title.element)}}t.MainCard=i},642:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainPage=void 0;const n=s(583),i=s(489),o=s(665);s(70);class r extends n.BaseComponent{constructor(){super("section",["main-page"]),this.artist=new i.MainCard("artist-card","Artists quiz"),this.pictures=new i.MainCard("picture-card","Pictures quiz"),this.settingsButton=new n.BaseComponent("button",["button","settings-button"],"Настройки"),this.title=new o.PageTitle,this.element.append(this.title.element,this.artist.element,this.pictures.element,this.settingsButton.element)}}t.MainPage=r},53:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;const n=s(583);s(667);class i extends n.BaseComponent{constructor(e){super("div",["popup"]),this.answerData=e,this.nextButton=new n.BaseComponent("button",["button","next-button"],"Далее"),this.check=new n.BaseComponent("span",["correct-flag"]),this.render(this.answerData)}render(e){const t=new n.BaseComponent("div",["popup-wrapper"]),s=new n.BaseComponent("img",["popup-image"]);s.element.setAttribute("src",`https://raw.githubusercontent.com/Vadosdavos/art-quiz-data/main/full/${e.imageNum}full.webp`);const i=new n.BaseComponent("p",["popup-text"],`${e.name}`),o=new n.BaseComponent("p",["popup-text"],`${e.author}`),r=new n.BaseComponent("p",["popup-text"],`${e.year}`);t.element.append(this.check.element,s.element,i.element,o.element,r.element,this.nextButton.element),this.element.append(t.element)}}t.Popup=i},218:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.QuestionPage=void 0;const n=s(583),i=s(281),o=s(314),r=s(53);s(523);class a extends n.BaseComponent{constructor(e,t,s,i,r){super("section",["question-page"]),this.title=new n.BaseComponent("h3",["question-title"]),this.homeButton=new n.BaseComponent("button",["button","home-button"],"На главную"),this.categoriesButton=new n.BaseComponent("button",["button","categ-button"],"Категории"),this.questionWrapper=new n.BaseComponent("div",["question-wrapper"]),this.scoreRadiosContainer=new n.BaseComponent("div",["score-rad-container"]),this.curCategory=r,this.curQuestionNumber=i,this.type=e,this.questionsArr=t,this.fullData=s,this.endRound=new o.EndroundPopup,this.render(this.curQuestionNumber)}render(e){var t,s;if(this.questionWrapper=new n.BaseComponent("div",["question-wrapper"]),this.element.append(this.questionWrapper.element),this.questionsArr.length>0){const t={artists:"Кто автор данной картины?",pictures:`Какую картину написал ${this.questionsArr[e].author} ?`};this.title.element.textContent=t[this.type],this.element.prepend(this.homeButton.element),this.element.append(this.title.element),this.element.append(this.categoriesButton.element),this.type===i.CategoriesTypes.artists?(this.questionWrapper.element.classList.add("artists-question-wrapper"),this.questionWrapper.element.append(...this.createArtistsQuestion(e))):this.type===i.CategoriesTypes.pictures&&(this.questionWrapper.element.classList.add("pictures-question-wrapper"),this.questionWrapper.element.append(this.createPicturesQuestion(e))),this.newPopup=new r.Popup(this.questionsArr[e]),this.newPopup.nextButton.element.addEventListener("click",(()=>{e<=8?(this.element.innerHTML="",this.curQuestionNumber++,this.render(this.curQuestionNumber)):(this.endRound.typeScore(this.getCategoryScore()),this.element.append(this.endRound.element))}))}null===(t=this.questionWrapper.element.childNodes[1])||void 0===t||t.childNodes.forEach((t=>{t.addEventListener("click",(()=>{this.checkAnswer(t,e)}))})),null===(s=this.questionWrapper.element.childNodes[0])||void 0===s||s.childNodes.forEach((t=>{t.addEventListener("click",(()=>{this.checkAnswer(t,e)}))}))}createScoreIndicators(e,t){this.scoreRadiosContainer=new n.BaseComponent("div",["score-rad-container"]);for(let s=0;s<10;s++){const i=new n.BaseComponent("div",["circle"]);s<t&&(e&&e[s]?i.element.style.backgroundColor="green":i.element.style.backgroundColor="red"),this.scoreRadiosContainer.element.append(i.element)}}createArtistsQuestion(e){const t=new n.BaseComponent("div",["artist-image-container"]),s=new n.BaseComponent("img",["question-image","artist-image"]);s.element.src=`https://raw.githubusercontent.com/Vadosdavos/art-quiz-data/main/full/${this.questionsArr[e].imageNum}full.webp`,s.element.alt="Question image",s.element.addEventListener("load",(()=>{this.createScoreIndicators(this.getQuestionResult(),this.curQuestionNumber),t.element.append(s.element,this.scoreRadiosContainer.element)}));const i=new n.BaseComponent("div",["artist-answers-container"]),o=[],r=[];for(o.push(this.questionsArr[e]),r.push(this.questionsArr[e].author);o.length<4;){const e=Math.floor(Math.random()*this.fullData.length);r.includes(this.fullData[e].author)||(o.push(this.fullData[e]),r.push(this.fullData[e].author))}return o.sort((()=>Math.random()-.5)).forEach((e=>i.element.append(new n.BaseComponent("p",["artist-answers"],`${e.author}`).element))),[t.element,i.element]}createPicturesQuestion(e){const t=new n.BaseComponent("div",["pictures-image-container"]),s=[],i=[];for(s.push(this.questionsArr[e]),i.push(this.questionsArr[e].name);s.length<4;){const e=Math.floor(Math.random()*this.fullData.length);i.includes(this.fullData[e].name)||(s.push(this.fullData[e]),i.push(this.fullData[e].name))}return s.sort((()=>Math.random()-.5)).forEach((e=>{const s=new n.BaseComponent("img",["question-image","pictures-image"]);s.element.src=`https://raw.githubusercontent.com/Vadosdavos/art-quiz-data/main/img/${e.imageNum}.webp`,s.element.alt="Answer option image",s.element.id=`${e.author}`,t.element.append(s.element)})),this.createScoreIndicators(this.getQuestionResult(),this.curQuestionNumber),t.element.append(this.scoreRadiosContainer.element),t.element}checkAnswer(e,t){this.newPopup&&("artists"===this.type?(null==e?void 0:e.textContent)===this.questionsArr[t].author?(e.style.backgroundColor="rgba(0, 102, 53, 0.5)",this.newPopup.check.element.classList.add("correct"),this.element.append(this.newPopup.element),this.updateScore(!0)):(e.style.backgroundColor="rgba(102, 0, 51, 0.5)",this.newPopup.check.element.classList.add("wrong"),this.element.append(this.newPopup.element),this.updateScore(!1)):e.id===this.questionsArr[t].author?(this.newPopup.check.element.classList.add("correct"),this.element.append(this.newPopup.element),this.updateScore(!0)):(this.newPopup.check.element.classList.add("wrong"),this.element.append(this.newPopup.element),this.updateScore(!1)))}getQuestionResult(){if(localStorage.getItem("score"))return JSON.parse(localStorage.getItem("score"))[this.type][this.curCategory]}updateScore(e){const t=JSON.parse(localStorage.getItem("score"));t[this.type][this.curCategory]||(t[this.type][this.curCategory]=[]),t[this.type][this.curCategory][this.curQuestionNumber]=e,localStorage.setItem("score",JSON.stringify(t))}getCategoryScore(){if(localStorage.getItem("score"))return JSON.parse(localStorage.getItem("score"))[this.type][this.curCategory].filter((e=>e)).length}}t.QuestionPage=a},320:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScoreCard=void 0;const n=s(583);s(342);class i extends n.BaseComponent{constructor(e){super("div",["score-card"]),this.categoryData=e,this.cardInfo=new n.BaseComponent("div",["card-info"]);const t=new n.BaseComponent("div",["score-name"],this.categoryData.name),s=new n.BaseComponent("div",["score-author"],this.categoryData.author),i=new n.BaseComponent("div",["score-year"],this.categoryData.year);this.cardInfo.element.append(t.element,s.element,i.element),this.element.append(this.cardInfo.element),this.element.addEventListener("click",(()=>{this.element.classList.toggle("visible")}))}}t.ScoreCard=i},295:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0;const n=s(583),i=s(281),o=s(320),r=s(665);s(3);class a extends n.BaseComponent{constructor(){super("section",["score"]),this.homeButton=new n.BaseComponent("button",["button","home-button"],"На главную"),this.categoriesButton=new n.BaseComponent("button",["button","categ-button"],"Категории"),this.title=new r.PageTitle("Результаты"),this.element.prepend(this.homeButton.element),this.element.append(this.title.element),this.element.append(this.categoriesButton.element),this.scoreWrapper=new n.BaseComponent("div",["score-wrapper"]),this.render(0,[],i.CategoriesTypes.artists)}render(e,t,s){this.scoreWrapper.element.innerHTML="",t.forEach(((t,i)=>{const r=new o.ScoreCard(t).element,a=new n.BaseComponent("img",["score-image"]);a.element.src=`https://raw.githubusercontent.com/Vadosdavos/art-quiz-data/main/full/${+t.imageNum}full.webp`,a.element.alt="Score image",a.element.addEventListener("load",(()=>{r.append(a.element),this.scoreWrapper.element.append(r)})),localStorage.getItem("score")&&JSON.parse(localStorage.getItem("score"))[s][e][i]&&r.classList.add("colored")})),this.element.append(this.scoreWrapper.element)}}t.Score=a},831:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=void 0;const n=s(583);s(148);class i extends n.BaseComponent{constructor(){super("section",["settings-wrapper","hidden"]),this.title=new n.BaseComponent("h2",["settings-title"],"Настройки"),this.saveButton=new n.BaseComponent("button",["button","save-button"],"Сохранить"),this.element.append(this.title.element,this.saveButton.element)}}t.Settings=i},665:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PageTitle=void 0;const n=s(583);s(995);class i extends n.BaseComponent{constructor(e){var t;super("div",["page-title"]),this.logo=new n.BaseComponent("div",["logo"]),this.element.append(this.logo.element),e&&(this.titleText=new n.BaseComponent("h2",["page-title-text"],e),this.element.append(null===(t=this.titleText)||void 0===t?void 0:t.element))}}t.PageTitle=i}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{s(373);const e=s(752);window.onload=()=>{const t=document.getElementById("app");if(!t)throw Error("App root element not found!");new e.App(t)}})()})();
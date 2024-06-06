import{a as m}from"./chunk-2M2HVUZI.js";import{A as g,Aa as q,C as M,Ca as S,D as P,Da as D,H as C,I as w,J as l,K as p,M as j,N as d,O as E,P as J,Q as N,R,S as o,T as c,U as f,X as O,Y as h,Z as u,b as T,ca as y,f as B,ha as z,ja as I,ka as k,la as _,ra as H,u as x,wa as V,y as L,z as b}from"./chunk-4EXROWIK.js";var U=(()=>{let e=class e{constructor(t){this._cardsCommon=t}transform(t){return t==!1?this._cardsCommon.currentImageBackPath("blue"):this._cardsCommon.currentImageBackPath("red")}};e.\u0275fac=function(n){return new(n||e)(p(m,16))},e.\u0275pipe=g({name:"BackImage",type:e,pure:!0});let i=e;return i})();var Y=(()=>{let e=class e{constructor(t){this._cardsCommon=t}transform(t){return this._cardsCommon.currentImageFrontPath(t)}};e.\u0275fac=function(n){return new(n||e)(p(m,16))},e.\u0275pipe=g({name:"FrontImage",type:e,pure:!0});let i=e;return i})();var $=(()=>{let e=class e{constructor(t){this._cardsCommon=t}transform(t){return t==!1?this._cardsCommon.getJoker("blue"):this._cardsCommon.getJoker("red")}};e.\u0275fac=function(n){return new(n||e)(p(m,16))},e.\u0275pipe=g({name:"JokerImage",type:e,pure:!0});let i=e;return i})();var ee=()=>[""],A=(i,e)=>({card:!0,hideFront:i,markedElement:e});function te(i,e){if(i&1&&(f(0,"img",15),k(1,"FrontImage")),i&2){let a=u().$implicit;d("src",_(1,2,a),C)("alt",a)}}function ie(i,e){i&1&&f(0,"img",16)}function ne(i,e){if(i&1){let a=O();o(0,"div",11),h("click",function(){let n=M(a).$implicit,r=u();return P(r.markElementSwitch(n))}),o(1,"div",12),f(2,"img",13),k(3,"BackImage"),c(),o(4,"div",14),j(5,te,2,4,"img",15)(6,ie,1,0,"img",16),c()()}if(i&2){let a=e.$implicit,t=u();d("ngClass",I(5,A,!t.displayCards,t.validateMarkedElement(a))),l(2),d("src",_(3,3,t.color),C),l(3),E(t.displayCards?5:6)}}function re(i,e){if(i&1){let a=O();o(0,"div",11),h("click",function(){M(a);let n=u();return P(n.markElementSwitch(458))}),o(1,"div",12),f(2,"img",13),k(3,"BackImage"),c(),o(4,"div",14),f(5,"img",17),k(6,"JokerImage"),c()()}if(i&2){let a=u();d("ngClass",I(7,A,!a.displayCards,a.validateMarkedElement(458))),l(2),d("src",_(3,3,a.color),C),l(3),d("src",_(6,5,a.color),C)}}var G=(()=>{let e=class e{constructor(t){this._cardsCommon=t,this.selectedCards=[],this.markedELements=[],this.isJokerRequired=!1,this.color=!1,this.howManyCards=7,this.displayCards=!1,this.subjectToTrigger=new T,this.determinateCards()}serveOne(t){this.serveCardsEvent()}jokerController(t){this.jokerControlInputChange()}jokerControlInputChange(){this.isJokerRequired=!this.isJokerRequired,this.isJokerRequired?this.howManyCards=6:this.howManyCards=7}serveCardsEvent(){this.displayCards=!1,this.unmarkElements(),this.color=Math.random()>=.5,this.subjectToTrigger.pipe(B(800)).subscribe({next:t=>{},error:t=>{this.determinateCards()},complete:()=>{console.log("completed")}})}determinateCards(){this.selectedCards=[];let t=[],n=0,r=!1;for(;t.length<this.howManyCards;){n=this._cardsCommon.getRandomNumber(0,this._cardsCommon.cardsAvailableCount);for(let s=0;s<t.length;s++)n==t[s]&&(r=!0);r==!1?t.push(n):r=!1}this.selectedCards=t,this.selectedCards.sort(function(s,Q){return s-Q}),this.displayCards=!0}markElementSwitch(t){let n=!1;for(let r=0;r<this.markedELements.length;r++)t==this.markedELements[r]&&(n=!0,this.markedELements.splice(r,1));n==!1?this.markedELements.push(t):n=!1}unmarkElements(){this.markedELements=[]}validateMarkedElement(t){let n=!1,r=!1;for(let s=0;s<this.markedELements.length;s++)t==this.markedELements[s]&&(n=!0);return n==!1||(n=!1,r=!0),r}ngOnDestroy(){this.subjectToTrigger.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)(p(m))},e.\u0275cmp=L({type:e,selectors:[["app-main-page"]],hostBindings:function(n,r){n&1&&h("keydown.s",function(){return r.serveOne()},!1,w)("keydown.j",function(){return r.jokerController()},!1,w)},decls:22,vars:4,consts:[[1,"bg-orientation-alert"],["src","./assets/images/girar.svg","alt","girar dispositivo"],[1,"btn-back",3,"routerLink"],[1,"cards-container"],[3,"ngClass"],[1,"serve-btn-container"],["id","btnServe",1,"serve-btn",3,"click"],[1,"joker-control-container"],[1,"joker-control-text"],[1,"joker-control-input"],["type","checkbox","id","jokercontrol",3,"change","checked"],[3,"click","ngClass"],[1,"card-back"],["alt","card back face",3,"src"],[1,"card-front"],[3,"src","alt"],["src","./assets/cards/loading_card.svg","alt","loading"],["alt","card front face",3,"src"]],template:function(n,r){n&1&&(o(0,"section",0),f(1,"img",1),c(),o(2,"header")(3,"a",2)(4,"span"),y(5,"\u2770"),c()()(),o(6,"main")(7,"section",3),N(8,ne,7,8,"div",4,J),j(10,re,7,10,"div",4),c()(),o(11,"footer")(12,"section",5)(13,"button",6),h("click",function(){return r.serveCardsEvent()}),o(14,"span"),y(15,"Serve cards"),c()()(),o(16,"section",7)(17,"div",8)(18,"span"),y(19,"Joker:\xA0"),c()(),o(20,"div",9)(21,"input",10),h("change",function(){return r.jokerControlInputChange()}),c()()()()),n&2&&(l(3),d("routerLink",z(3,ee)),l(5),R(r.selectedCards),l(2),E(r.selectedCards.length==6?10:-1),l(11),d("checked",r.isJokerRequired))},dependencies:[H,q,U,Y,$],styles:[".bg-orientation-alert[_ngcontent-%COMP%]{display:none}a[_ngcontent-%COMP%]{color:#fff!important;text-decoration:none!important}header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;text-align:center;padding-left:30px;height:100px}.btn-back[_ngcontent-%COMP%]{font-size:45px;color:#fff}main[_ngcontent-%COMP%]{min-height:calc(100vh - 250px);display:flex;justify-content:center;align-items:flex-end}.cards-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card[_ngcontent-%COMP%]{position:relative;width:11.4285714286vw;aspect-ratio:11/16;text-align:center;transform-style:preserve-3d;transform:translateY(0);margin-left:3px;margin-right:3px;transition:all .8s;background-color:#ccc5;border-radius:5px}.card-front[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.card-front[_ngcontent-%COMP%]{background-color:transparent}.card-back[_ngcontent-%COMP%]{background-color:transparent;transform:rotateY(180deg)}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.hideFront[_ngcontent-%COMP%]{transform:rotateY(180deg)}.markedElement[_ngcontent-%COMP%]{transform:translateY(-60%);width:8.8888888889vw}footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-left:30px;padding-right:30px;height:150px}.serve-btn[_ngcontent-%COMP%]{display:flex;height:40px;justify-content:center;align-items:center;width:160px;height:55px;font-size:20px;color:#fff;background-color:#0b907c;border:2px solid black;border-radius:10px;transition-duration:.2s;scale:1;filter:brightness(1)}.serve-btn[_ngcontent-%COMP%]:hover{filter:brightness(1.15);scale:1.03}.serve-btn[_ngcontent-%COMP%]:active{filter:brightness(.95);scale:.97}.joker-control-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:nowrap;font-size:20px;color:#fff}@media screen and (max-height: 600px){main[_ngcontent-%COMP%]{min-height:calc(100vh - 200px)}.card[_ngcontent-%COMP%]{width:13.3333333333vw}.serve-btn[_ngcontent-%COMP%]{width:150px;height:40px}footer[_ngcontent-%COMP%]{height:100px}}@media screen and (max-width: 600px){.bg-orientation-alert[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#ffffff73;display:flex;justify-content:center;align-items:center;z-index:1000}.bg-orientation-alert[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;object-fit:contain}}"]});let i=e;return i})();var oe=[{path:"",pathMatch:"full",component:G},{path:"**",pathMatch:"full",component:D}],K=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({imports:[S.forChild(oe),S]});let i=e;return i})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=x({providers:[m],imports:[V,K]});let i=e;return i})();export{Pe as SevenCardsModule};

import{a}from"./chunk-2SUNCXVC.js";import{$ as b,A as _,Aa as S,Ca as T,G as P,H as h,J as s,K as d,M as m,N as y,O as x,Q as M,R as v,S as r,T as o,U as p,Y as g,Z as O,ea as k,ha as I,ia as j,u as f,wa as w,y as C,z as u}from"./chunk-W435Q7UG.js";var H=(()=>{let t=class t{constructor(n){this._cardsCommon=n}transform(n){return this._cardsCommon.currentImageFrontPath(n)}};t.\u0275fac=function(i){return new(i||t)(d(a,16))},t.\u0275pipe=_({name:"CurrentCardPipe",type:t,pure:!0});let e=t;return e})();function z(e,t){e&1&&(r(0,"article",6),p(1,"img",7),o())}var D=(e,t)=>t.id;function R(e,t){if(e&1&&(r(0,"article",6),p(1,"img",5),o()),e&2){let l=t.$implicit;s(1),m("src",l.path,h)}}function B(e,t){if(e&1&&M(0,R,2,1,"article",2,D),e&2){let l=O();v(l.history)}}var U=()=>[""],E=(()=>{let t=class t{constructor(n){this._cardsCommon=n,this.currentCardId=0,this.history=[]}get getCurrentCardPath(){return this._cardsCommon.currentImageFrontPath(this.currentCardId)}serveOne(n){this.serveCardAction()}serveCardAction(){this.addToHistory();let n=this._cardsCommon.getRandomNumber(0,this._cardsCommon.cardsAvailableCount);this.currentCardId=n}addToHistory(){try{let n={id:this.history.length,path:this.getCurrentCardPath};this.history.unshift(n),this.history.length>20&&this.history.pop()}catch{}}};t.\u0275fac=function(i){return new(i||t)(d(a))},t.\u0275cmp=C({type:t,selectors:[["app-main-page"]],hostBindings:function(i,c){i&1&&g("keydown.s",function(){return c.serveOne()},!1,P)},decls:12,vars:6,consts:[[1,"btn-back",3,"routerLink"],["id","historyInner",1,"cards-history"],["class","card"],[1,"current-card"],["id","currentCardImgParent",1,"card",3,"click"],["alt","card image",3,"src"],[1,"card"],["src","./assets/cards/red_joker.webp","alt","card image"]],template:function(i,c){i&1&&(r(0,"header")(1,"a",0)(2,"span"),b(3,"\u2770"),o()()(),r(4,"main")(5,"section",1),y(6,z,2,0,"article",2)(7,B,2,0),o(),r(8,"section",3)(9,"article",4),g("click",function(){return c.serveCardAction()}),p(10,"img",5),I(11,"CurrentCardPipe"),o()()()),i&2&&(s(1),m("routerLink",k(5,U)),s(5),x(6,c.history.length==0?6:7),s(4),m("src",j(11,3,c.currentCardId),h))},dependencies:[S,H],styles:["header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;text-align:center;padding-left:30px;height:100px}.btn-back[_ngcontent-%COMP%]{font-size:45px;color:#fff}a[_ngcontent-%COMP%]{color:#fff!important;text-decoration:none}main[_ngcontent-%COMP%]{min-height:calc(100vh - 250px);position:relative}.card[_ngcontent-%COMP%]{aspect-ratio:11/16;background-color:#ccc5;border-radius:12px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;pointer-events:none}.cards-history[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-top:2px solid black;border-bottom:2px solid black;padding:20px;overflow:hidden}.cards-history[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:150px;margin-right:20px}.current-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 295px)}.current-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:80%}@media screen and (max-width: 600px){header[_ngcontent-%COMP%]{display:none}main[_ngcontent-%COMP%]{min-height:100vh}.cards-history[_ngcontent-%COMP%]{padding-left:6px}.cards-history[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:85px;margin-right:5px}.current-card[_ngcontent-%COMP%]{height:calc(100vh - 229px)}}"]});let e=t;return e})();var $=[{path:"",pathMatch:"full",component:E}],Y=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u({type:t}),t.\u0275inj=f({providers:[a],imports:[w,T.forChild($)]});let e=t;return e})();export{Y as CardsOneByOneModule};

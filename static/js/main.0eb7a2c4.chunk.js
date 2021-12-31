(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{198:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"whiteListMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},226:function(t,e){},228:function(t,e){},232:function(t,e){},258:function(t,e){},260:function(t,e){},273:function(t,e){},275:function(t,e){},483:function(t,e,n){},485:function(t,e,n){},486:function(t,e,n){},487:function(t,e,n){"use strict";n.r(e);var a,i,o,r,s,p,u,l,c,d,y,b,m,f=n(1),g=n(80),x=n.n(g),h=n(31),j=n(112),T=n(16),O=n(50),w=n(63),v=n(18),M=n.n(v),C=(n(61),n(197),n(198),n(64)),A=n(199),S=n(13),k={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(S.a)(Object(S.a)({},k),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(S.a)(Object(S.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(S.a)(Object(S.a)({},k),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(S.a)(Object(S.a)({},t),{},{account:e.payload.account});default:return t}},E={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(S.a)(Object(S.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(S.a)(Object(S.a)({},t),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(S.a)(Object(S.a)({},E),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},N=Object(C.b)({blockchain:_,data:I}),B=[A.a],F=Object(C.c)(C.a.apply(void 0,B)),D=Object(C.d)(N,F),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},U=function(t){return function(){var t=Object(w.a)(M.a.mark((function t(e){var n,a,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,D.getState().blockchain.smartContract.methods.name().call();case 4:return n=t.sent,t.next=7,D.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=t.sent,t.next=10,D.getState().blockchain.smartContract.methods.cost().call();case 10:i=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),e(z("Could not load data from contract."));case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()},R=n(17),L=R.a.div(a||(a=Object(T.a)(["\n  background-color: var(--dark-grey);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),W=(R.a.div(i||(i=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),R.a.div(o||(o=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"])))),K=R.a.div(r||(r=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),H=R.a.div(s||(s=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),J=R.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),P=R.a.p(u||(u=Object(T.a)(["\n  color: var(--white);\n  font-weight: 500;\n  line-height: 1.6;\n"]))),Q=(R.a.p(l||(l=Object(T.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),R.a.p(c||(c=Object(T.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"])))),Y=(R.a.div(d||(d=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/bunnygif.d660be37.gif"),G=n.p+"static/media/test.8648ef8a.png",q=(n(483),n(8)),V=R.a.button(y||(y=Object(T.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: #FA902C;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-weight: bold;\n  font-size: 40px;\n  color: #40220A;\n  cursor: pointer;\n  // box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  // -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  // -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    transition-duration: .4s;\n    color: white;\n    background-color: #ffb977;\n  }\n"]))),X=R.a.div(b||(b=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Z=R.a.img(m||(m=Object(T.a)(["\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var $=function(){var t,e=Object(O.b)(),n=Object(O.c)((function(t){return t.blockchain})),a=Object(O.c)((function(t){return t.data})),i=Object(f.useState)(""),o=Object(j.a)(i,2),r=o[0],s=o[1],p=Object(f.useState)(!1),u=Object(j.a)(p,2),l=u[0],c=u[1],d=function(){""!==n.account&&null!==n.smartContract&&e(U(n.account))};return Object(f.useEffect)((function(){d()}),[n.account]),Object(q.jsx)(L,{style:{backgroundColor:"var(--black)",fontSize:40},children:Object(q.jsxs)(J,{flex:1,ai:"center",style:{padding:0,backgroundColor:"#F5EED2"},children:[Object(q.jsx)(P,{style:(t={display:"flex",flexDirection:"row",textAlign:"left",fontSize:12,fontWeight:"bold",paddingBottom:30,paddingTop:30,margin:0,borderStyle:"solid",borderColor:"black",borderWidth:0,paddingLeft:10,borderRadius:0},Object(h.a)(t,"textAlign","center"),Object(h.a)(t,"justifySelf","center"),Object(h.a)(t,"justifyContent","center"),Object(h.a)(t,"backgroundColor","#9D2058"),Object(h.a)(t,"width","100%"),t),children:Object(q.jsx)("a",{href:"https://www.bossbunniesnft.com/",children:Object(q.jsx)(Z,{className:"logoShadow",alt:"Logo",src:G,style:{width:240,height:64.1,textAlign:"center",paddingTop:"auto"}})})}),Object(q.jsx)(K,{}),Object(q.jsx)(X,{flex:1,style:{padding:24,paddingTop:0},children:Object(q.jsxs)(J,{flex:1,jc:"center",ai:"center",style:{paddingTop:0,flexDirection:"column"},children:[Object(q.jsx)(P,{style:{textAlign:"center",fontSize:40,fontWeight:"bold",borderStyle:"solid",borderColor:"black",color:"#40220A"},children:"0.1313 + GAS"}),Object(q.jsx)(Z,{className:"object",alt:"KRebel",src:Y}),Object(q.jsxs)(P,{className:"mintNumbers",style:{color:"#40220a"},children:[null==n.account?"????":a.totalSupply,"/10001"]}),Object(q.jsx)(J,{flex:1,jc:"center",ai:"center",style:{padding:24,paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:0,color:"#40220A",borderRadius:30,fontSize:40,maxWidth:1e3},children:9999==Number(a.totalSupply)?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(P,{style:{textAlign:"center"},children:"The sale has ended."}),Object(q.jsx)(W,{}),Object(q.jsxs)(Q,{style:{textAlign:"center"},children:["Dont worry, you're not missing out! You can still get Boss Bunnies on"," ",Object(q.jsx)("a",{href:"https://testnets.opensea.io/",children:"Opensea.io"})]})]}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Q,{style:{textAlign:"center",fontSize:40},children:r}),""===n.account||null===n.smartContract?Object(q.jsxs)(J,{ai:"center",jc:"center",children:[Object(q.jsx)(Q,{className:"connectMint",style:{fontSize:60,textAlign:"center",marginBottom:0,color:"#40220A"},children:"CONNECT TO MINT"}),Object(q.jsx)(W,{}),Object(q.jsx)(V,{style:{fontFamily:"coder"},onClick:function(t){},children:"COMING SOON"}),Object(q.jsx)(H,{}),""!==n.errorMsg?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(W,{}),Object(q.jsx)(Q,{style:{textAlign:"center",fontSize:50},children:n.errorMsg})]}):null]}):Object(q.jsxs)(J,{ai:"center",jc:"center",fd:"row",style:{marginTop:0,paddingTop:0},children:[Object(q.jsxs)("form",{children:["I want ",Object(q.jsx)("input",{id:"inputBox",placeholder:"#",type:"number",min:"1",max:"5",style:{fontSize:60,textAlign:"center",backgroundColor:"#FE8F2C",color:"#40220A",borderWidth:4,borderColor:"black",borderStyle:"solid",borderRadius:40,paddingRight:10,width:100,fontFamily:"coder"}})," Boss Bunnies"]}),Object(q.jsx)(W,{}),Object(q.jsx)(V,{style:{fontFamily:"coder"},disabled:l?1:0,onClick:function(t){var a;t.preventDefault(),a=1,(a=document.getElementById("inputBox").value)<=0||(s("Minting your Boss Bunnies NFT..."),c(!0),n.smartContract.methods.mint(n.account,a).send({gasLimit:285e3*a,to:"0x70f164AEE5Da40cF7c6740D0810061578CCBdB3D",from:n.account,value:n.web3.utils.toWei((.01*a).toString(),"ether")}).once("error",(function(t){console.log(t),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),c(!1)})).then((function(t){s("Your Boss Bunnies NFT(s) has been successfully minted!"),c(!1),e(U(n.account))}))),d()},children:l?"BUSY":"MINT"})]})]})})]})}),Object(q.jsx)(W,{}),Object(q.jsxs)(J,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(q.jsx)(Q,{style:{textAlign:"center",fontSize:40},children:Object(q.jsx)("a",{href:"https://google.com/",style:{textDecoration:"none",color:"#40220A",fontSize:20},children:"BOSS BUNNIES SMART CONTRACT"})}),Object(q.jsx)(W,{})]})]})})},tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,491)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),o(t),r(t)}))};n(485),n(486);x.a.render(Object(q.jsx)(O.a,{store:D,children:Object(q.jsx)($,{})}),document.getElementById("root")),tt()}},[[487,1,2]]]);
//# sourceMappingURL=main.0eb7a2c4.chunk.js.map
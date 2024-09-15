(()=>{var e={};e.id=990,e.ids=[990],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},5007:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>m,routeModule:()=>h,tree:()=>l}),r(4316),r(8295),r(5866);var i=r(3191),a=r(8716),o=r(7922),n=r.n(o),s=r(5231),d={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>s[e]);r.d(t,d);let l=["",{children:["Projects",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4316)),"E:\\Tony\\Portfolio Site\\antbalsamo\\src\\app\\Projects\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"E:\\Tony\\Portfolio Site\\antbalsamo\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["E:\\Tony\\Portfolio Site\\antbalsamo\\src\\app\\Projects\\page.js"],c="/Projects/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/Projects/page",pathname:"/Projects",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},2534:(e,t,r)=>{Promise.resolve().then(r.bind(r,2345))},2345:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(326),a=r(7577),o=r(147),n=r(6143),s=r(8718),d=r(1013),l=r(1750),m=r(2143);(0,o.ZP)(n.E.div)`
  margin: 8rem 0rem 0rem 0rem; /* Reduce top margin */
`;let c=()=>{let[e,t]=(0,a.useState)(""),[r,o]=(0,a.useState)(null);return((0,a.useEffect)(()=>{},[]),e)?(0,i.jsxs)(n.E.div,{variants:d.P9,initial:"hidden",animate:"show",exit:"exit",children:[i.jsx(n.E.div,{initial:"hidden",animate:"show",exit:"exit",style:{textAlign:"center"},children:i.jsx(s.Z,{numOfItems:8,itemsText:["\uD83D\uDC38","I'm","endlessly","adding","to","this","page.","\uD83D\uDC38"],variant:d.br,fontSize:"1.4rem",fontColor:e})}),i.jsx(l.Z,{cards:m.Z})," "]}):null}},1750:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(326),a=r(7577),o=r.n(a),n=r(147),s=r(434),d=r(6143),l=r(1013);let m=(0,n.ZP)(d.E.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); /* Ensure the grid items are flexible */
  gap: 4rem 4rem; /* 4rem top/bottom, 4rem left/right */
  width: 90%; /* Full width for the grid */
  max-width: 60rem; /* Maximum width of the grid */
  margin: 0 auto; /* Center the grid horizontally */
  padding: 4rem 2rem; /* Adjust padding if necessary */
`,c=n.ZP.a`
  text-decoration: none; /* Remove underline for the link */
  color: inherit; /* Inherit text color */
  display: block; /* Make the entire card clickable */
`,p=(0,n.ZP)(d.E.div)`
  background-color: var(--card-color);
  box-shadow: 1rem 0.6rem 0rem 0rem black;
  border-radius: 12px;
  padding: 1rem 2rem !important;
  text-align: left;
  height: auto !important;
  width: 100% !important; /* Ensure the card takes up the full width of its grid column */

  &:hover {
    box-shadow: 2rem 1rem 0rem 0rem rgba(0, 0, 0, 1); // Use rem for hover state
    transform: translateY(-1rem); // Use rem for translate as well
    border-color: #f9ec5c;
    border-width: 0.6rem; // Use rem for border-width as well
  }
`,h=n.ZP.img`
  width: calc(100% + 4rem) !important; /* Adjust width to compensate for the padding in the Card */
  max-height: 14rem !important;
  margin-top: 1rem !important;
  margin-left: -2rem !important; /* Offset to the left to account for the card's padding */
  margin-right: -2rem !important; /* Offset to the right to account for the card's padding */
  object-fit: cover !important;
`,g=n.ZP.div`
  border-width: 6px;
  border-radius: 6px;
  margin-top: 1rem !important;
  padding: 0.7rem !important;
  width: auto !important;
  max-width: 65%;
  margin-left: auto !important;
  margin-right: auto !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: var(--background-color);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
`,u=n.ZP.p`
  font-size: 1rem;
  color: var(--cardText-color);
  font-weight: 500;
  margin-top: 5px;
  padding: 0.5rem 0rem 0rem 0rem;
  transition: font-weight 0.3s ease, text-shadow 0.3s ease;
`,b=n.ZP.h4`
  font-size: 1.4rem;
  margin: 0;
  color: var(--text-color);
`,x=n.ZP.h4`
  color: var(--cardText-color);

`,f=({cards:e,onCardClick:t})=>i.jsx(m,{variants:l.P9,initial:"hidden",animate:"show",exit:"exit",children:e.map((e,r)=>{let a=e.linkTo.startsWith("http"),n=(0,i.jsxs)(i.Fragment,{children:[i.jsx(x,{children:e.title}),i.jsx(u,{children:e.text.split("\n").map((e,t)=>(0,i.jsxs)(o().Fragment,{children:[e,i.jsx("br",{})]},t))}),i.jsx(h,{src:e.image,alt:e.title}),i.jsx(g,{children:i.jsx(b,{children:e.bubbleText})})]});return a?i.jsx(c,{href:e.linkTo,target:"_blank",rel:"noopener noreferrer",children:i.jsx(p,{variants:l.Ic,initial:{boxShadow:"1rem 0.6rem 0rem 0rem rgba(0, 0, 0, 1)"},animate:{boxShadow:"1rem 0.6rem 0rem 0rem rgba(0, 0, 0, 1)"},whileHover:{translateY:"-2rem",borderWidth:"1rem",borderColor:"#f9ec5c",boxShadow:"2rem 1rem 0rem 0rem rgba(0, 0, 0, 1)"},children:n})},r):i.jsx(s.default,{href:e.linkTo,passHref:!0,children:i.jsx(c,{onClick:t,children:i.jsx(p,{variants:l.Ic,initial:{boxShadow:"1rem 0.6rem 0rem 0rem rgba(0, 0, 0, 1)"},animate:{boxShadow:"1rem 0.6rem 0rem 0rem rgba(0, 0, 0, 1)"},whileHover:{translateY:"-2rem",borderWidth:"1rem",borderColor:"#f9ec5c",boxShadow:"2rem 1rem 0rem 0rem rgba(0, 0, 0, 1)"},children:n})})},r)})})},8718:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(326),a=r(7577),o=r(6143),n=r(8833),s=r(4333),d=r(5559),l=r(147);let m=l.ZP.section`
  display: inline-block; /* Ensure the width and height hug the content */
  margin: 8rem auto 0 auto;  /* Center horizontally and set top margin */
  padding: .5rem .5rem; /* Add padding for better visual spacing */
  border-radius: 1rem;
  background-color: var(--card-color);
  color: var(--text-color);
  box-sizing: border-box;
  text-align: center; /* Center text content */

  @media (min-width: 780px) {
    padding: .5rem .5rem; /* Increase padding on larger screens */
  }

  @media (min-width: 1300px) {
    padding: .5rem .5rem; /* Increase padding on larger screens */
  }
`,c=({numOfItems:e,itemsText:t,variant:r,fontSize:l,fontColor:c,fontWeight:p})=>{let[h,g]=(0,a.useState)(window.scrollY),[u,b]=(0,a.useState)(null),[x,f]=(0,a.useState)(0);(0,n.ac)("(min-width: 780px)"),(0,n.ac)("(min-width: 1300px)"),(0,n.b)(()=>{g(window.scrollY)}),(0,a.useEffect)(()=>{window&&b(window.screen.availHeight)},[]),(0,d.Z)(h,300);let w=t.slice(0,e);return i.jsx(m,{children:i.jsx(s.MJ,{style:{display:"flex",alignItems:"center"},children:i.jsx(o.E.div,{className:"introText",style:{display:"flex",gap:"0.4rem"},children:w.map((e,t)=>i.jsx(o.E.h1,{style:{display:"inline-block",fontWeight:p||"600",fontSize:l||"4rem",color:c||"var(--accentText-color)"},variants:"function"==typeof r?r(.1*(t+1)):r,children:e},t))})})})}},2143:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i=[{title:"Notification System",image:"https://i.imgur.com/9Fd7bXq.png",text:"Robust and deeply configurable notification system built for admins and workgroups.",linkTo:"/Blocks/80e79e864f4f4c57b029a0b3439b4889",bubbleText:"Open Project",pageId:"80e79e864f4f4c57b029a0b3439b4889"},{title:"Mingo",image:"https://i.imgur.com/UUYRNC8.gif",text:"A Platforming Space Odyssey.\n",linkTo:"https://antonioni.itch.io/mingo-tech-demo",bubbleText:"Open Project",pageid:"3328b05dcbba4ba7900873e790e145c4"},{title:"Grouped Card View",image:"https://i.imgur.com/Cjkqvhv.png",text:"A UX refresh with an inviting interface.\n",linkTo:"/Blocks/3328b05dcbba4ba7900873e790e145c6",bubbleText:"Open Project",pageId:"3328b05dcbba4ba7900873e790e145c6"},{title:"Insights & Workflows",image:"https://i.imgur.com/VMYlrXR.png",text:"Curated walkthrough of developments to workflow features for a SaSS app.",linkTo:"/Blocks/0a625c571aa34731ad7fd2d2c7f37a95",bubbleText:"Open Project",pageId:"0a625c571aa34731ad7fd2d2c7f37a95"},{title:"Activity Feed",image:"https://i.imgur.com/Kp9t8OG.png",text:"History log capturing all relevant system and user activity.",linkTo:"/Blocks/f1e49709532546b8959c5c3d69070e71",bubbleText:"Open Project",pageId:"f1e49709532546b8959c5c3d69070e71"},{title:"Monitor Diagnostics",image:"https://i.imgur.com/YOch4l7.png",text:"Equipping users with tools to identify root cause issues.",linkTo:"/Blocks/3d08e0534d344646821003dbb27b8f12",bubbleText:"Open Project",pageId:"3d08e0534d344646821003dbb27b8f12"},{title:"Seal the Spoiler King",image:"https://i.imgur.com/vFh0hCo.png",text:"A memory match coding exercise taken to the dark fantasy realm.",linkTo:"/Blocks/3d08e0534d344646821003dbb27b8f12",bubbleText:"Open Project",pageId:"3d08e0534d344646821003dbb27b8f12"}]},5559:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(7577);let a=function(e,t){let[r,a]=(0,i.useState)(e);return r}},4333:(e,t,r)=>{"use strict";r.d(t,{MJ:()=>o});var i=r(147),a=r(6143);(0,i.ZP)(a.E.div)`
  min-height: 50vh;
  align-items: left;
  justify-content: center;
  color: white;
  width: 100%;
  height: fit;
  padding: 0rem 0rem;

    img {
    margin: 4rem 0rem;
    width: 90%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 5rem;
      padding: 0rem 0rem;
    }
  }
  @media (min-width: 780px) {
    text-align: left;
    padding: 0rem 0rem;

    img {
      width: 70%;
      height: auto;
    }
  }
  @media (min-width: 1300px) {
    text-align: left;
    padding: 0rem 0rem;

    img {
      width: 50%;
      height: auto;
    }
  }
`;let o=(0,i.ZP)(a.E.div)`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 2;
  pointer-events: none;
  width: 100%;
  height: auto;
  margin-bottom: 0;  // Remove bottom margin
  padding-bottom: 0; // Remove bottom padding

  h1 {
      font-weight: bolder;
      color: var(--text-color);
      width: "100%";
      height: "auto";
      font-size: 1.6rem;
        font-family: "Inter", system-ui;
        

  }

  @media (max-width: 1300px) {
    padding: 0;
  margin: 0 auto;
  
  }

  show: {
    transition: {
      staggerchildren: 2;
    }
  }
`;(0,i.ZP)(a.E.div)`
  overflow: hidden;
  z-index: 2;
  padding: 0rem 0rem 0rem 50rem;

  img {
    width: 50%;
    height: auto;
    object-fit: cover;
  }
`,(0,i.ZP)(a.E.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`},4316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(8570).createProxy)(String.raw`E:\Tony\Portfolio Site\antbalsamo\src\app\Projects\page.js#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,15,621,833,465],()=>r(5007));module.exports=i})();
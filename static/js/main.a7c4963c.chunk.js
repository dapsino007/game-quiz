(this["webpackJsonpquiz-game"]=this["webpackJsonpquiz-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(5),i=r.n(a),s=r(2),o=(r(10),r.p+"static/media/dollars.5fca6958.png"),u=r(3),l=r.p+"static/media/wind.c8e09cfd.wav",d=(r(11),r(0)),m=function(e){var t=e.setUsername,r=Object(c.useRef)(),n=Object(u.a)(l),a=Object(s.a)(n,1)[0],i=Object(c.useState)(!1),m=Object(s.a)(i,2),h=m[0],x=m[1],b=Object(c.useState)("title"),O=Object(s.a)(b,2),f=O[0],p=O[1],w=Object(c.useState)("start"),v=Object(s.a)(w,2),y=v[0],g=v[1],N=function(){p("title"===f?"title rotate":"title")};return Object(d.jsx)("div",{className:y,children:h?Object(d.jsx)("div",{children:Object(d.jsxs)("h1",{style:{fontSize:"48px"},children:[" Are you ready ",j,"? Let's begin!"]})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:f,onMouseEnter:N,onMouseLeave:N,children:[Object(d.jsx)("img",{src:o,alt:"Money Bag",className:"img"}),Object(d.jsxs)("h1",{className:"text",children:[" Play ",Object(d.jsx)("br",{}),"Become a Millionaire Today!"]})]}),Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("input",{className:"startInput",placeholder:"enter your name",ref:r}),Object(d.jsx)("button",{className:"startButton",onClick:function(){var e=r.current.value;e&&(j.push(e),x(!0),g("start clear"),a(),setTimeout((function(){t(e)}),3e3))},children:"Start"})]})]})})},j=[];function h(e){var t=e.setTimeOut,r=e.questionNumber,n=Object(c.useState)(30),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){if(0===i)return t(!0);var e=setInterval((function(){o((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}),[i,t]),Object(c.useEffect)((function(){o(30)}),[r]),i}r(13);var x=r.p+"static/media/play.8e5f6d1d.mp3",b=r.p+"static/media/correct.160572d7.mp3",O=r.p+"static/media/wrong.e9468218.mp3",f=[{id:1,amount:"$ 100"},{id:2,amount:"$ 200"},{id:3,amount:"$ 300"},{id:4,amount:"$ 500"},{id:5,amount:"$ 1,000"},{id:6,amount:"$ 2,000"},{id:7,amount:"$ 4,000"},{id:8,amount:"$ 8,000"},{id:9,amount:"$ 16,000"},{id:10,amount:"$ 32,000"},{id:11,amount:"$ 64,000"},{id:12,amount:"$ 125,000"},{id:13,amount:"$ 250,000"},{id:14,amount:"$ 500,000"},{id:15,amount:"$ 1,000,000"}].reverse(),p=[{id:1,question:"A pescetarian breaks from the vegetarian code by eating which of these foods?",answers:[{text:"Chicken",correct:!1},{text:"Fish",correct:!0},{text:"Eggs",correct:!1},{text:"Pesk",correct:!1}]},{id:2,question:"A caramel candy brand since 1903,Werther\u2019s Original is named after a town in the Westphalia region of what country?",answers:[{text:"Germany",correct:!0},{text:"Sweeden",correct:!1},{text:"Brazil",correct:!1},{text:"France",correct:!1}]},{id:3,question:"Who played the character of harry potter in movie?",answers:[{text:"Johnny Deep",correct:!1},{text:"Leonardo Di Caprio",correct:!1},{text:"Denzel Washington",correct:!1},{text:"Daniel Red Cliff",correct:!0}]},{id:4,question:"A collection of Sanskrit hymns and verses known as the Vedas are sacred texts in what religion?",answers:[{text:"Islam",correct:!1},{text:"Hinduism",correct:!0},{text:"Brazillian Candombl\xe9",correct:!1},{text:"Christianity",correct:!1}]},{id:5,question:"A common ailment, dyspepsia gets its name from Greek roots meaning \u201cbad\u201d what?",answers:[{text:"Grain",correct:!1},{text:"Name",correct:!1},{text:"Germs",correct:!1},{text:"Digestion",correct:!0}]},{id:6,question:"A 2010 Time magazine article debunks the myth that what group of people are \u201cspoiled, selfish, solitary misfits\u201d?",answers:[{text:"Celebrities",correct:!1},{text:"Only children",correct:!0},{text:"Sport fans",correct:!1},{text:"Rich individuals",correct:!1}]},{id:7,question:"A bushel is a standard unit originally used to measure the weight of what?",answers:[{text:"Grain",correct:!0},{text:"Meat",correct:!1},{text:"Sand",correct:!1},{text:"Salt",correct:!1}]},{id:8,question:"A clarsach\u2013a traditional Irish musical instrument\u2013is a kind of what?",answers:[{text:"Guitar",correct:!1},{text:"Flute",correct:!1},{text:"Harp",correct:!0},{text:"Clarinet",correct:!1}]},{id:9,question:"On the \u201990s sitcom \u201cBlossom,\u201d Joey Lawrence\u2019s character is known for what concise catchphrase?",answers:[{text:"Oh yeah!",correct:!1},{text:"Whoa!",correct:!0},{text:"Oopsie",correct:!1},{text:"No no no",correct:!1}]},{id:10,question:"Other than Antarctica, what continent has the smallest population?",answers:[{text:"Australia",correct:!0},{text:"South America",correct:!0},{text:"Asia",correct:!1},{text:"Europe",correct:!1}]},{id:11,question:"One week comprises approximately what percentage of a year?",answers:[{text:"4%",correct:!1},{text:"3%",correct:!1},{text:"2%",correct:!0},{text:"1%",correct:!1}]},{id:12,question:"A hand gripping the Holy Grail is depicted on pints of what Ben & Jerry\u2019s ice cream flavor?",answers:[{text:"Valerie Bashura",correct:!1},{text:"Vermonty Python",correct:!0},{text:"Swizzle stick",correct:!1},{text:"Karamel Sutra",correct:!1}]},{id:13,question:"Cayenne, Sugarloaf and Red Spanish are three popular varieties of what?",answers:[{text:"Watermelon",correct:!1},{text:"Pear",correct:!1},{text:"Peach",correct:!1},{text:"Pineapple",correct:!0}]},{id:14,question:'"April is the cruelest month" is a line from what famous poem?',answers:[{text:"To His Coy Mistress",correct:!1},{text:"The Waste Land",correct:!0},{text:"How Do I Love Thee?",correct:!1},{text:"Song of Myself",correct:!1}]},{id:15,question:"A long-necked stringed instrument resembling a mandolin, the bouzouki originated in what country?",answers:[{text:"Spain",correct:!1},{text:"Ethopia",correct:!1},{text:"Chile",correct:!1},{text:"Greece",correct:!0}]}];function w(e){var t=e.questionNumber,r=e.setQuestionNumber,n=e.setTimeOut,a=Object(c.useState)(null),i=Object(s.a)(a,2),o=i[0],l=i[1],m=Object(c.useState)(null),j=Object(s.a)(m,2),h=j[0],f=j[1],w=Object(c.useState)("answer"),v=Object(s.a)(w,2),y=v[0],g=v[1],N=Object(u.a)(x),S=Object(s.a)(N,1)[0],q=Object(u.a)(b),k=Object(s.a)(q,1)[0],A=Object(u.a)(O),$=Object(s.a)(A,1)[0];Object(c.useEffect)((function(){S()}),[S]),Object(c.useEffect)((function(){l(p[t-1])}),[t]);var C=function(e,t){setTimeout((function(){t()}),e)};return Object(d.jsxs)("div",{className:"trivia",children:[Object(d.jsx)("div",{className:"question",children:null===o||void 0===o?void 0:o.question}),Object(d.jsx)("div",{className:"answers",children:null===o||void 0===o?void 0:o.answers.map((function(e){return Object(d.jsx)("div",{className:h===e?y:"answer",onClick:function(){return!h&&function(e){f(e),g("answer active"),C(3e3,(function(){g(e.correct?"answer correct":"answer wrong")})),C(5e3,(function(){e.correct?(k(),C(1e3,(function(){r((function(e){return e+1})),f(null)}))):($(),C(1e3,(function(){n(!0)})))}))}(e)},children:e.text})}))})]})}r(14);var v=function(e){var t=e.questionNumber;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"moneyList",children:f.map((function(e){return Object(d.jsxs)("li",{className:t===e.id?"moneyListItem active":"moneyListItem",children:[Object(d.jsx)("span",{className:"moneyListItemNumber",children:e.id}),Object(d.jsx)("span",{className:"moneyListItemAmount",children:e.amount})]})}))})})};var y=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),o=i[0],u=i[1],l=Object(c.useState)(1),x=Object(s.a)(l,2),b=x[0],O=x[1],p=Object(c.useState)("$ 0"),y=Object(s.a)(p,2),g=y[0],N=y[1];return Object(c.useEffect)((function(){b>1&&N(f.find((function(e){return e.id===b-1})).amount)}),[b]),Object(d.jsx)("div",{className:"app",children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"main",children:o||b>15?Object(d.jsxs)("h1",{className:"endText",children:["Hey ",j,"!",Object(d.jsx)("br",{})," You earned: ",g]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"top",children:Object(d.jsx)("div",{className:"timer",children:Object(d.jsx)(h,{setTimeOut:u,questionNumber:b})})}),Object(d.jsx)("div",{className:"bottom",children:Object(d.jsx)(w,{questionNumber:b,setQuestionNumber:O,setTimeOut:u})})]})}),Object(d.jsx)("div",{className:"pyramid",children:Object(d.jsx)(v,{questionNumber:b})})]}):Object(d.jsx)(m,{setUsername:n})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.a7c4963c.chunk.js.map
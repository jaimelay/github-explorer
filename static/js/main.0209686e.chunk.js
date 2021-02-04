(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{71:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),i=e.n(o),c=e(35),a=e.n(c),s=e(10),l=e(7),p=e(8),d=e.p+"static/media/github-background.7fa45dda.svg";function b(){var n=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #f0f0f5 url(",") no-repeat 70% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return b=function(){return n},n}var u=Object(p.a)(b(),d),x=e(3),j=e(22),f=e.n(j),h=e(42),g=e(39),O=e(12),m=e(18),v=e(40),y=e.n(v).a.create({baseURL:"https://api.github.com"}),k=e.p+"static/media/logo.469cc31b.svg",w=e(41);function z(){var n=Object(l.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return z=function(){return n},n}function S(){var n=Object(l.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return S=function(){return n},n}function E(){var n=Object(l.a)(["\n        border-color: #c53030;\n      "]);return E=function(){return n},n}function _(){var n=Object(l.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 2px solid #fff;\n    border-right: 0;\n    border-radius: 5px 0 0 5px;\n    color: #3a3a3a;\n\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    background: #04d361;\n    border-radius: 0 5px 5px 0;\n    border: 0;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return _=function(){return n},n}function G(){var n=Object(l.a)(["\n  font-size: 48px;\n  color: #3a3a3a;\n  max-width: 450px;\n  line-height: 56px;\n\n  margin-top: 80px;\n"]);return G=function(){return n},n}var F=p.c.h1(G()),I=p.c.form(_(),(function(n){return n.hasError&&Object(p.b)(E())}),Object(w.a)(.2,"#04d361")),J=p.c.span(S()),D=p.c.div(z()),N=function(){var n=Object(o.useState)(""),t=Object(O.a)(n,2),e=t[0],i=t[1],c=Object(o.useState)(""),a=Object(O.a)(c,2),l=a[0],p=a[1],d=Object(o.useState)((function(){var n=localStorage.getItem("@GithubExplorer:repositories");return n?JSON.parse(n):[]})),b=Object(O.a)(d,2),u=b[0],x=b[1];function j(){return(j=Object(g.a)(f.a.mark((function n(t){var r,o;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),e){n.next=4;break}return p("Digite o autor/nome do reposit\xf3rio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,y.get("repos/".concat(e));case 7:r=n.sent,o=r.data,x([].concat(Object(h.a)(u),[o])),i(""),p(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),p("Erro na busca por esse reposit\xf3rio");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(u))}),[u]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:k,alt:"Github Explorer"}),Object(r.jsx)(F,{children:"Explore reposit\xf3rios no Github"}),Object(r.jsxs)(I,{hasError:!!l,onSubmit:function(n){return j.apply(this,arguments)},children:[Object(r.jsx)("input",{value:e,onChange:function(n){return i(n.target.value)},placeholder:"Digite o autor/nome do reposit\xf3rio. e.g: facebook/react"}),Object(r.jsx)("button",{type:"submit",children:"Pesquisar"})]}),l&&Object(r.jsx)(J,{children:l}),Object(r.jsx)(D,{children:u.map((function(n){return Object(r.jsxs)(s.b,{to:"/repositories/".concat(n.full_name),children:[Object(r.jsx)("img",{src:n.owner.avatar_url,alt:n.owner.login}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:n.full_name}),Object(r.jsx)("p",{children:n.description})]}),Object(r.jsx)(m.b,{size:20})]},n.full_name)}))})]})};function R(){var n=Object(l.a)(["\n  margin-top: 80px;\n\n  a {\n    background: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    div {\n      margin-left: 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return R=function(){return n},n}function X(){var n=Object(l.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n\n      strong {\n        display: block;\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: #6c6c80;\n      }\n    }\n  }\n"]);return X=function(){return n},n}function q(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #a8a8b3;\n    transition: color 0.2s;\n\n    &:hover {\n      color: #666;\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return q=function(){return n},n}var B=p.c.header(q()),C=p.c.section(X()),L=p.c.div(R()),M=function(){var n=Object(o.useState)(null),t=Object(O.a)(n,2),e=t[0],i=t[1],c=Object(o.useState)([]),a=Object(O.a)(c,2),l=a[0],p=a[1],d=Object(x.f)().params;return Object(o.useEffect)((function(){y.get("/repos/".concat(d.repository)).then((function(n){i(n.data)})),y.get("/repos/".concat(d.repository,"/issues")).then((function(n){p(n.data)}))}),[d.repository]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(B,{children:[Object(r.jsx)("img",{src:k,alt:"Github Explorer"}),Object(r.jsxs)(s.b,{to:"/",children:[Object(r.jsx)(m.a,{size:16}),"Voltar"]})]}),e&&Object(r.jsxs)(C,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("img",{src:e.owner.avatar_url,alt:e.owner.login}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:e.full_name}),Object(r.jsx)("p",{children:e.description})]})]}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:e.stargazers_count}),Object(r.jsx)("span",{children:"Stars"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:e.forks_count}),Object(r.jsx)("span",{children:"Forks"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:e.open_issues_count}),Object(r.jsx)("span",{children:"Issues"})]})]})]}),Object(r.jsx)(L,{children:l.map((function(n){return Object(r.jsxs)("a",{href:n.html_url,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:n.title}),Object(r.jsx)("p",{children:n.user.login})]}),Object(r.jsx)(m.b,{size:20})]},n.id)}))})]})},P=function(){return Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{path:"/",exact:!0,component:N}),Object(r.jsx)(x.a,{path:"/repositories/:repository+",component:M})]})},U=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{children:Object(r.jsx)(P,{})}),Object(r.jsx)(u,{})]})};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(U,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.0209686e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(286)},111:function(e,t,n){},279:function(e,t,n){},281:function(e,t,n){},283:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(102),i=n.n(c),o=(n(111),n(20)),l={apiEndpoint:"https://bnb7g0g5g1.execute-api.eu-central-1.amazonaws.com/dev/thing/"},u=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)(function(){fetch(l.apiEndpoint+e,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"}).then(function(e){return e.json()}).then(function(e){c(e)})},[]),r},m=n(103),s=n.n(m),d=n(8),p=n(105),f=n(104),h=n(21),b=n(2),g=n(12),E=n(19),O=n(57),w=n(56),j=function(e){var t=e.scale,n=e.transform,c=e.gridline,i=e.className,o=e.ticks,l=e.tickFormat,u=Object(a.useRef)(null);return Object(a.useEffect)(function(){Object(w.a)(u.current).call(Object(O.a)().scale(t).ticks(o).tickFormat(l))},[].concat(Object(E.a)(t.domain()),Object(E.a)(t.range()))),r.a.createElement(d.Group,{transform:n,className:i},c&&t.ticks(o).map(function(e){return r.a.createElement(d.Line,{key:e,x1:t(e),x2:t(e),y1:-c,y2:0,className:"gridline"})}),r.a.createElement("g",{ref:u}))},v=function(e){var t=e.scale,n=e.transform,c=e.gridline,i=e.className,o=e.ticks,l=e.tickFormat,u=Object(a.useRef)(null);return Object(a.useEffect)(function(){Object(w.a)(u.current).call(Object(O.b)().scale(t).ticks(o).tickFormat(l))},[].concat(Object(E.a)(t.domain()),Object(E.a)(t.range()))),r.a.createElement(d.Group,{transform:n,className:i},c&&t.ticks(o).filter(function(e,t){return 0!==t}).map(function(e,n){return r.a.createElement(d.Line,{key:e,x1:0,x2:c,y1:t(e),y2:t(e),className:"gridline"})}),r.a.createElement("g",{ref:u}))},y=(n(279),n(34)),k=function(e){var t=e.from,n=e.to,r=e.interpolator,c=Object(y.b)(r).domain([t,n]);return Object(a.useEffect)(function(){c.domain([t,n])},[t,n]),c},x=function(e){var t=e.x,n=e.y,c=e.width,i=e.height,o=e.date,l=e.data,u=e.yScale,m=e.ppmColorScale,s=function(e){var t=e.from,n=e.to,r=e.width,c=Object(y.c)().domain([t,n]).range([0,r]);return Object(a.useEffect)(function(){c.range([0,r])},[r]),c}({width:c,from:Object(h.addHours)(o,6),to:Object(h.addHours)(o,20)}),E=u.domain()[0],O="clip-".concat(o),w="url(#".concat(O,")");return r.a.createElement(d.Group,{transform:{translate:[t,n]}},r.a.createElement(d.Text,{y:-2,x:5},Object(h.format)(o,"ddd\tDD\tMMM")),r.a.createElement(j,{scale:s,transform:{translate:[0,i]},gridline:i,className:"x-axis",ticks:b.b.every(1),tickFormat:Object(g.a)("%H:%M")}),r.a.createElement(v,{scale:u,gridline:c,className:"y-axis",ticks:7}),r.a.createElement(d.Group,{className:"plot"},r.a.createElement("clipPath",{id:O},r.a.createElement(d.Rect,{width:c,height:i})),r.a.createElement(f.Collection,{data:l,nodeEnter:function(e){return Object(p.a)({},e,{median:E,upper:E,lower:E})},animate:!0},function(e){return e.map(function(e){var t=e.key,n=e.date,c=e.median,i=e.lower,o=e.upper,l=s(new Date(n));return r.a.createElement(a.Fragment,{key:t},r.a.createElement(d.Line,{x1:l,x2:l,y1:u(i),y2:u(o),clipPath:w}),r.a.createElement(d.Circle,{cx:l,cy:u(c),r:3,fill:m(c),stroke:"grey",strokeWidth:"1px",clipPath:w}))})})))},C=n(3),N=n(33),S=function(e){var t=e.data,n=e.width,c=function(e){var t=e.data,n=e.interval,r=Object(a.useState)({min:0,max:0,data:[]}),c=Object(o.a)(r,2),i=c[0],l=c[1],u=60*n;return Object(a.useEffect)(function(){var e=[],n=Object.keys(t).map(function(n){var a=new Date(n+"T00:00:00"),r=t[n].reduce(function(e,t){var n=t.timestamp+Object(h.differenceInSeconds)(a,t.timestamp)%u*1e3;return e[n]||(e[n]=[]),e[n].push(t),e},{}),c=Object.keys(r).map(function(e){return{key:e,date:+e,mean:Object(C.mean)(r[e],function(e){return e.ppm}),max:Object(C.quantile)(r[e],1,function(e){return e.ppm}),upper:Object(C.quantile)(r[e],.75,function(e){return e.ppm}),median:Object(C.quantile)(r[e],.5,function(e){return e.ppm}),lower:Object(C.quantile)(r[e],.25,function(e){return e.ppm}),min:Object(C.quantile)(r[e],0,function(e){return e.ppm})}});return e.push.apply(e,Object(E.a)(Object(C.extent)(c,function(e){return e.mean}))),{date:n,data:c}}).sort(function(e,t){return e.date>=t.date?e.date>t.date?-1:0:1}),a=Object(C.extent)(e);l({min:a[0],max:a[1],data:n})},[t]),i}({data:t.data,interval:10}),i=30,l=50,u=30,m=i+0+200*c.data.length,s=function(e){var t=e.from,n=e.to,r=e.height,c=Object(y.a)().domain([t,n]).range([r,0]);return Object(a.useEffect)(function(){c.domain([t,n]).range([r,0])},[t,n,r]),c}({height:140,from:c.min,to:c.max}),p=k({interpolator:N.a,to:400,from:1200});return r.a.createElement(d.Svg,{height:m,width:n},c.data.length>0?c.data.map(function(e,t){return r.a.createElement(x,{x:l,y:200*t+i,width:n-l-u,height:140,key:e.date,date:e.date,data:e.data,yScale:s,ppmColorScale:p})}):null)},F=(n(281),function(e){var t=e.children;return r.a.createElement("table",{className:"info-legend"},r.a.createElement("tbody",null,t))}),G=function(e){var t=e.color,n=e.range,a=e.explanation;return r.a.createElement("tr",null,r.a.createElement("td",{className:"info-legend-range"},r.a.createElement("span",{className:"dot",style:{"background-color":t}}),n),r.a.createElement("td",{className:"info-legend-description"},a))},I=function(){var e=k({interpolator:N.a,to:400,from:1200});return r.a.createElement("section",{className:"info-container"},r.a.createElement("h1",null,"Information"),r.a.createElement("p",null,"The graph to the right measures the average Carbon Dioxide (CO",r.a.createElement("sub",null,"2"),") concentration near the sensor in the office. And reads the values in Parts Per Million (ppm)"),r.a.createElement("p",null,"CO",r.a.createElement("sub",null,"2")," is a colorless gas with a density about 60% higher than that of dry air. The current global concentration is about 410 ppm, having risen from pre-industrial levels of 280 ppm. CO",r.a.createElement("sub",null,"2")," is produced by all aerobic organisms (things that breathe air) when they metabolize carbohydrates and lipids (fats etc) to produce energy by respiration."),r.a.createElement("p",null,"CO",r.a.createElement("sub",null,"2")," levels outside of buildings can range from 380-500ppm. At very high concentrations (10.000ppm), CO",r.a.createElement("sub",null,"2")," becomes toxic to animals. Raising the concentration to 10.000ppm for several hours will kill spider mites and whiteflies in a greenhouse."),r.a.createElement("p",null,"Relative to 600 ppm, at 1,000 ppm CO2, moderate and statistically significant decrements occurred in six of nine scales of decision-making performance",r.a.createElement("a",{href:"https://web.archive.org/web/20160305212909/http://ehp.niehs.nih.gov/wp-content/uploads/2012/09/ehp.1104789.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("sup",null,"[ref]")),". In a study of Volatile Organic Compound Exposure (VOC), of which CO",r.a.createElement("sub",null,"2"),"is one, average cognitive scores were 61% higher on the Green building day (~740ppm) and 101% higher on the two Green+ (~502ppm) building days than on the Conventional building day (~940ppm) ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4892924/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("sup",null,"[ref]")),"."),r.a.createElement("h2",null,"Legend"),r.a.createElement(F,null,r.a.createElement(G,{color:e(500),range:"400-600",explanation:"Ideal"}),r.a.createElement(G,{color:e(700),range:"600-800",explanation:"Okay, mild cognitive impairment"}),r.a.createElement(G,{color:e(900),range:"800-1000",explanation:"Some cognitive impairment"}),r.a.createElement(G,{color:e(1100),range:"1000-1200",explanation:"Open some windows already"}),r.a.createElement(G,{color:e(1300),range:"1200+",explanation:"Illegal in South Netherlands (Belgium)"})))},M=(n(283),function(e){var t=u("breather"),n=function(){var e=Object(a.useState)(window.innerWidth),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){window.addEventListener("resize",s()(function(){r(window.innerWidth)},500))},[]),n}();return r.a.createElement(a.Fragment,null,r.a.createElement("section",null,null!==t?r.a.createElement(S,{data:t,width:.65*n}):null),r.a.createElement(I,null))}),P=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,2,1]]]);
//# sourceMappingURL=main.bb84c176.chunk.js.map
(function(e){function a(a){for(var i,o,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==t[c]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"f6e15162","chunk-0206bfa0":"7e00f54c","chunk-110f1f0b":"267a777d","chunk-13a6037e":"7c783580","chunk-179248a2":"59ae5f34","chunk-18f95272":"6181ad0e","chunk-2a9fce91":"fdf2a1e3","chunk-2c06842c":"a221bc3e","chunk-2d0c5615":"e3bf47c5","chunk-2d0e96ec":"7298c7f8","chunk-2d208d90":"2865485f","chunk-2d21d0e2":"318de356","chunk-2d22c123":"bdeab172","chunk-2e80bb9a":"96fe658e","chunk-319206de":"2abb35c2","chunk-36769079":"bc454c17","chunk-4cdd78c0":"7e5644f2","chunk-515a8379":"715789a0","chunk-53ccb27e":"eab4a925","chunk-55d286b8":"aa2213c0","chunk-59974754":"3e6dda21","chunk-5d1ce150":"e687a640","chunk-60cbc06b":"b40d3411","chunk-623f2040":"b0bb6d9d","chunk-659152b8":"7fea69be","chunk-6a43ec24":"c3aec84e","chunk-6e1e538a":"758e6d67","chunk-6e613899":"2b3da202","chunk-766a929b":"e41306e5","chunk-7794bb60":"af5fdaf9","chunk-c796899c":"84bb9fe7","chunk-e8a7823a":"72ee44a9","chunk-fde47172":"ce556c87",comple:"28d8a7d9",creditos:"af3fa96a",glosario:"058fdf89",intro:"ad6eb5e3",referencias:"674c346b",sintesis:"6062b879",tema1:"e01f7240",tema2:"85e8bc90",tema3:"295d1457"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1,tema1:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"1d1e15c7","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"acba1a1f","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"52f2b7ac","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"0c695028",creditos:"5cf14250",glosario:"031f1dcd",intro:"31d6cfe0",referencias:"240b912f",sintesis:"31d6cfe0",tema1:"04055cb0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));a.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"2cad":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.d34cac0f.png"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,o,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),k=(n("a3a0"),{global:{componenteFormativo:"Optimización de imagen en redes sociales",descripcionCurso:"Un motor de búsqueda es la herramienta en línea diseñada para buscar sitios web en internet; permite revisar los resultados en su propia base de datos, los clasifica y hace una lista ordenada de estos, utilizando algoritmos de búsqueda únicos. Por lo que el uso de estas herramientas, permite optimizar una marca como propósito que tiene una empresa continuamente.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("2cad")},{clases:["banner-principal-decorativo-2"],imagen:n("f533")},{clases:["banner-principal-decorativo-3"],imagen:n("5b70")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"<i>Big data</i>",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"<i>Open source</i>",hash:"t_1_1"},{numero:"1.2",titulo:"Herramientas de gestión y métodos de normalización de <i>data</i>",hash:"t_1_2"},{numero:"1.3",titulo:"Criterios de identificación de uso de algoritmos",hash:"t_1_3"},{numero:"1.4",titulo:"Técnicas de uso de herramientas <i>analytics</i> (geolocalización, tempolocalización, uso de <i>software</i>, comportamiento de consumo)",hash:"t_1_4"}]},{nombreRuta:"tema2",numero:"2",titulo:"Evaluación de contenido y optimización",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Factores y métodos posicionamiento SEO y SEM",hash:"t_2_1"},{numero:"2.2",titulo:"Técnicas de masificación de información",hash:"t_2_2"},{numero:"2.3",titulo:"Técnicas de optimización de contenidos y relevancia de datos",hash:"t_2_3"},{numero:"2.4",titulo:"Métrica: técnicas de identificación y barrido",hash:"t_2_4"}]},{nombreRuta:"tema3",numero:"3",titulo:"Gestión de contenidos",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Línea editorial ",hash:"t_3_1"},{numero:"3.2",titulo:"Comunicación escrita",hash:"t_3_2"},{numero:"3.3",titulo:"Plan de mejoramiento",hash:"t_3_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/51220025_CF02_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1.2 Herramientas de gestión y métodos de normalización de data",referencia:"EWebik. (2021). <i>Normalización de base de datos.</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=NTZPG7KycBw&ab_channel=EWebik"},{tema:"1.2 Herramientas de gestión y métodos de normalización de data",referencia:"Díaz, D. (2021). <i>7 herramientas de administración de bases de datos que debe conocer como DBA o Sysadmin.</i>",tipo:"Página web",link:"https://geekflare.com/es/database-management-tools/"},{tema:"2.1 Factores y métodos posicionamiento SEO y SEM",referencia:"Cyberclick • Marketing Digital. (2019). <i>SEM y Google Ads - ¿Cómo funciona?</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=vVWyGjTsdxw&ab_channel=Cyberclick%E2%80%A2MarketingDigital"},{tema:"2.1 Factores y métodos posicionamiento SEO y SEM",referencia:"Mi Pyme Online. (2020). <i>¿Qué es SEO y Cómo funciona?</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=m6vikmaiS0Q&ab_channel=MiPymeOnline"},{tema:"2.1 Factores y métodos posicionamiento SEO y SEM",referencia:"Marketing4eCommerce. (2017). <i>Qué es el SEM: claves del Search Engine Marketing.</i> [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=voxDnfOre-U&ab_channel=Marketing4eCommerce"},{tema:"3.2 Comunicación escrita",referencia:"Zuñiga Gracia, Z. B. (2001). <i>Comunicación escrita.</i>",tipo:"Libro",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000002956"}],glosario:[{termino:"Blacklinks",significado:"enlaces en sitios web distintos del suyo que remiten a una página de su sitio web. Los <i>backlinks</i> también se denominan enlaces entrantes porque representan el tráfico de otro sitio web que llega a su propio sitio. "},{termino:"<i>Digg</i>",significado:"es la página principal de Internet, con los mejores artículos, vídeos y contenidos originales de los que se habla en la red en este momento."},{termino:"ETL",significado:"modelo de integración de datos que consta de tres pasos: extrae, transforma y limpia, utilizados para combinar datos de diferentes fuentes."},{termino:"Feed RSS",significado:"son las siglas en inglés de Really Simple Syndication, y en español se conoce como distribución realmente sencilla. Se trata de una manera sencilla de mantenerse al tanto de las noticias y la información de su interés, y no necesita de métodos convencionales para explorar y buscar información en los sitios web.<br>Recurso para la distribución de contenidos en tiempo real basado en el lenguaje XML."},{termino:"Mixxx",significado:"desarrollado por una comunidad internacional de DJs, programadores y artistas. Debido a que Mixxx es libre (como en la libertad y el precio), el <i>software</i> de código abierto, cualquiera puede participar."},{termino:"Tokenización",significado:"proceso mediante el cual se reemplazan datos confidenciales por símbolos de identificación exclusivo del usuario que retiene toda la información de los datos sin arriesgar su seguridad."}],referencias:[{referencia:"Balmes Zúñiga, Z. y González De López, G. (2001). <i>Comunicación Escrita.</i> Trillas Print.",link:""},{referencia:"Díaz, D. (2021). <i>7 herramientas de administración de base de datos que debe conocer como DBA o Sysadmin</i>. Geekflare. ",link:"https://geekflare.com/es/database-management-tools/"},{referencia:"Lahoz-Beltrá, R. (2019). <i>En las entrañas del big data: una aproximación a la estadística.</i> Emse Edapp, Prisanoticias Colecciones.",link:""},{referencia:"Ríos Insúa, D. (2019). <i>Big data: conceptos, tecnologías y aplicaciones.<i> CSIC, Los Libros de la Catarata.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del Equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de Línea de Producción",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Margarita Rosa Triana Sánchez",cargo:"Experta Temática",centro:"Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Nelly Parra Guarín",cargo:"Experta Temática",centro:"Regional Huila - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Gloria Amparo López Escudero",cargo:"Diseñador Instruccional",centro:"Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Asesor Metodológico",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo Desarrollo Curricular",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Corrector de Estilo ",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yuly Andrea Rey Quiñonez",cargo:"Diseño Web",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Manuel Felipe Echavarria Orozco",cargo:"Desarrollo Fullstack",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y Producción Audiovisual",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y Producción Audiovisual",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y Producción Audiovisual",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de Contenidos Inclusivos y Accesibles",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de Recursos Educativos Digitales",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"},{nombre:"Leyson Fabián Castaño Pérez",cargo:"Validación de Recursos Educativos Digitales y Vinculación LMS",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=k;var v=n("9224");i["a"].prototype.$package=v,new i["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"5b70":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.cc508a00.png"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.02ff5d73.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.c7a86b41.png"},f533:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.64b736d4.png"}});
//# sourceMappingURL=app.b19c5a0d.js.map
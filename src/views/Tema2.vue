<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    .bg1
      .row.justify-content-center.align-items-center.mb-5
        .col-5.col-md-2.col-lg-1
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img1.svg', alt='Imágen decorativa')

        .col-md-10.col-lg-11
          p(data-aos="fade-left") La optimización del contenido en SMO es un sistema o una lista de tareas que se puede hacer para asegurar que el contenido pueda ser encontrado por el mayor número de personas posible en internet. Si alguna vez ha añadido una etiqueta <i>alt</i> a una imagen o ha puesto una palabra clave en la URL de una página <i>web</i>, es posible que ya esté familiarizado con esta técnica; se puede ver esto de manera más detallada en el siguiente video:

      .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/123456789" title="Comunicación de marketing digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.1 Factores y métodos posicionamiento SEO y SEM

    p(data-aos="fade-right") SEO (Optimización de motores de búsqueda) se refiere a todas aquellas acciones, estrategias y técnicas de optimización de posicionamiento que se hacen en un sitio <i>web</i> para aparecer orgánicamente (no pago) en los buscadores (Google, Yahoo, Bing). Con la estrategia SEO no se realiza ningún pago a las empresas dueñas de los motores de búsqueda y se puede lograr incrementos significativos en el tráfico y la visibilidad de las marcas en Internet. Son los contenidos los que se ganan esos lugares por derecho propio.

    p.mb-5(data-aos="fade-right") La SEO presenta características importantes que se deben tener en cuenta, como los que puede conocer a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-4.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(data-aos="flip-down")
          .tarjeta-numerada__numero
            .h2 1
          h4 Medible
          p Implica poder conocer en todo momento cuáles son las palabras clave y expresiones que están consiguiendo ubicar el sitio <i>web</i> en las primeras posiciones del buscador y cuáles transforman mejor una visita en una conversión.

      .col-md-10.col-lg-4.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(data-aos="flip-down")
          .tarjeta-numerada__numero
            .h2 2
          h4 Lento de conseguir
          p Por lo que es importante dedicarle tiempo y diseñar una buena campaña que reporte unos resultados acordes a los objetivos que pretende lograr la empresa.

      .col-md-10.col-lg-4.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(data-aos="flip-down")
          .tarjeta-numerada__numero
            .h2 3
          h4 Dinámico
          p Un día se puede estar en las primeras posiciones, pero al día siguiente descender la visibilidad. Esto puede ser debido al incremento de la competencia, al uso inadecuado de las páginas <i>web</i>s o incluso a cambios en los algoritmos de los buscadores. Por tanto, es importante analizar el SEO de la <i>web</i> continuamente.

    p.mb-5(data-aos="fade-right") La clave de la SEO radica en alcanzar un nivel de popularidad y relevancia que haga que los robots consideren la página que se está posicionando entre las primeras opciones para determinadas intenciones de búsqueda. Para dar respuesta a una búsqueda, los diferentes buscadores evalúan decenas o incluso cientos de señales de todos los sitios <i>web</i>, para determinar cuáles son los que mejor respuesta dan a dicha búsqueda, con el objetivo de que los usuarios tengan la mejor experiencia posible y encuentren lo que buscan rápida y fácilmente. Por ejemplo, Google tiene en cuenta dos factores que influyen en este posicionamiento:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta.tarjeta-morada2.mb-3(data-aos="flip-right")
          .row.justify-content-center
            img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imágen decorativa')
          .p-4  
            h4 Relevancia
            p Google considera que una <i>web</i> es relevante cuando se corresponde con precisión con una búsqueda concreta, esto es, cuando responde a la duda o la pregunta que ha formulado el usuario. Para mejorar la relevancia de la <i>web</i> que se quiere posicionar, se utilizan técnicas de SEO <i>on site4</i>: optimización de palabras clave y URL, tiempos de carga más rápidos, mejor experiencia de usuario, entre otras.

      .col-lg-6
        .tarjeta.tarjeta-morada2.mb-3(data-aos="flip-left")
          .row.justify-content-center
            img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imágen decorativa')
          .p-4  
            h4 Autoridad
            p Un sitio <i>web</i> tiene autoridad cuando es popular y esta popularidad se mide según el número de enlaces que apuntan hacia ella. Para mejorar la autoridad de una <i>web</i> se usan técnicas de SEO <i>off site5</i>, entre las que destaca el <i>linkbuilding</i>.

    p.mb-5(data-aos="fade-left") De otra parte cobra mucha relevancia el tipo de estrategias que se utilizan, las que presenta la SEO para tenerlas en cuenta son las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      ImagenInfografica.color-acento-contenido
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')

        .tarjeta.tarjeta-naranja.p-3(x="13%" y="40%" numero="+")
          p <b>Planificación de contenidos:</b> elaborar un plan editorial, consultando con compañeros o interesados, con el fin de obtener ideas sobre qué artículos publicar o incluso invitándolos a que los escriban ellos mismos.

        .tarjeta.tarjeta-naranja.p-3(x="27%" y="62%" numero="+")
          p <b>Estudiar la competencia:</b> analizar su estrategia, sus palabras claves y su tipo de publicaciones, esto con el fin de lograr obtener una mejor posición que ellos, por esto es necesario saber qué hacen y así poder superarlos.

        .tarjeta.tarjeta-naranja.p-3(x="39%" y="40%" numero="+")
          p <b>Escuchar la competencia:</b> esta escucha debe ser constante; es preciso estudiar aquellas <i>web</i>s de la competencia que estén mejor posicionadas para conocer lo qué están haciendo, de qué manera, que estrategias utilizan ellos y como competir y mejorarlos, en esto, herramientas como: Ahrefso Open Site Explorer puede ayudarle mucho.

        .tarjeta.tarjeta-naranja.p-3(x="51%" y="62%" numero="+")
          p <b>Evitar comportamientos que puedan penalizarlos:</b> copiar contenido, realizar intercambio de enlaces, comentarios masivos en <i>blogs</i>, enlaces en sitios de temáticas totalmente diferentes, son comportamientos detectados por los buscadores y que pueden hacer que descienda la visibilidad.

        .tarjeta.tarjeta-naranja.p-3(x="64%" y="40%" numero="+")
          p <b>Medición de resultados:</b> en una campaña SEO, se dispone de herramientas destinadas a ayudar en la medición de los resultados arrojados por la campaña que se está desarrollando y poder analizar para elevar acciones de mejora.

        .tarjeta.tarjeta-naranja.p-3(x="78%" y="62%" numero="+")
          p <b>Establecimiento de campañas por periodos de tiempo:</b> ponga en marcha la estrategia y observe los resultados. Una vez terminada y analizada, ajuste todo lo necesario y vuelva a realizar otra poniendo en práctica lo aprendido de los resultados de la campaña anterior.

        .tarjeta.tarjeta-naranja.p-3(x="90%" y="40%" numero="+")
          p <b>Actualice su <i>web</i>:</b> una campaña SEO puede suponer cambios en su página <i>web</i>, procure tener relación directa con el técnico encargado de su mantenimiento.

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-rosa.p-5(data-aos="flip-down")
        .row.justify-content-center.align-items-center
          .col-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imágen decorativa')

          .col-lg-1
          .col-lg-8
            .titulo-segundo.color-acento-contenido
              h2 SEO (Optimización de motores de búsqueda)

            p.mb-5 Con la intención de profundizar en el tema, le invitamos a que acceda en los materiales complementarios de este subtema, donde se relaciona el video “¿Qué es SEO? y ¿Cómo funciona?”. En este video podrá conocer con mayor profundidad este concepto.

            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=m6vikmaiS0Q&ab_channel=MiPymeOnline" target="_blank")
                span Enlace
                i.fas.fa-link

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p(data-aos="fade-right") Las campañas SEM (<i>Search Engine Marketing</i> o también denominado <i>Marketing</i> en buscadores) son una forma rápida, económica y eficaz de hacer publicidad, conseguir clientes potenciales y generar ventas. Esta técnica es muy usada debido a que ofrece resultados inmediatos y la página de la empresa que se quiere posicionar aparecerá en los buscadores de un día para otro, obteniendo visitas rápidamente. Quienes utilizan el sistema SEM de publicidad, pueden medir con gran exactitud el retorno de su inversión debido a la gran cantidad de estadísticas disponibles para tal efecto. Además, permite una potente configuración de las campañas mediante una segmentación por múltiples criterios.

        p(data-aos="fade-right") A continuación se profundiza sobre los conceptos básicos para la creación de una estrategia SEM, esto es

      .col-10.col-lg-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordion")
        .row.p-4(titulo="Conceptos básicos del SEM")
          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-check
              p.mb-0 #[b Palabra clave o #[i keyword]:] son la base en la que se sustenta todo el <i>marketing</i> en buscadores, son los criterios que harán que el anuncio se muestre a unos u otros usuarios.
            li 
              i.fas.fa-check
              p.mb-0 #[b Anuncio de texto:] es el tipo de anuncio estándar que se muestra en los buscadores, está conformado por un título, dos líneas de texto y un enlace personalizable.
            li 
              i.fas.fa-check
              p.mb-0 #[b Grupo de anuncios:] son conjuntos de anuncios y palabras claves, que a su vez se agrupan en campañas en las que se puede definir el presupuesto diario y los países o territorios donde aparecerán los anuncios.
            li 
              i.fas.fa-check
              p.mb-0 #[b Red de búsqueda:] parte del buscador en la que pueden aparecer sus anuncios.
            li 
              i.fas.fa-check
              p.mb-0 #[b Impresiones:] número de veces que se ha mostrado un anuncio.
            li 
              i.fas.fa-check
              p.mb-0 #[b #[i clicks]:] número de veces que se ha hecho <i>click</i> en un anuncio.
            li 
              i.fas.fa-check
              p.mb-0 #[b Nivel de calidad:] puntuación otorgada por Google de una palabra clave y de un anuncio y que determinan su costo.
        
        .row.p-4(titulo="Claves SEM")
          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-check
              p.mb-0 #[b Redacción y optimización del texto de los anuncios:] además de atraer muchos más usuarios, también supondrá un mejor posicionamiento dentro del grupo de los enlaces patrocinados, lo que hace que anuncios que tienen mejor porcentaje de <i>clicks</i> salgan por delante y otros sean relegados a las últimas posiciones o incluso eliminados de los resultados de búsqueda.
            li 
              i.fas.fa-check
              p.mb-0 #[b Selección de la ubicación de los anuncios:] la elección del sitio <i>web</i> donde anunciarse es fundamental. Un análisis del público objetivo, de los hábitos y costumbres de estos será la clave para escoger unos u otros. 
            li 
              i.fas.fa-check
              p.mb-0 #[b Selección de la época del año:] la realización de campañas de SEM para épocas del año en que la demanda del negocio es mayor (productos estacionales), o bien, para el lanzamiento de algún producto, puede resultar muy interesante y beneficioso.

        .row.p-4(titulo="Beneficios SEM")
          .col-lg-5
            ul.lista-ul--color.fa-ul2
              li  
                i.fas.fa-check
                p.mb-0 Tráfico cualificado hacia su página.
              li 
                i.fas.fa-check
                p.mb-0 Dar a conocer la marca o empresa. 
              li 
                i.fas.fa-check
                p.mb-0 Generar conversiones. 
              li 
                i.fas.fa-check
                p.mb-0 Grandes resultados con presupuestos pequeños.
              li 
                i.fas.fa-check
                p.mb-0 Datos relevantes. 
              li 
                i.fas.fa-check
                p.mb-0 Posibilidades de personalización.
              li 
                i.fas.fa-check
                p.mb-0 Resultados medibles.

          .col-lg-5
            ul.lista-ul--color.fa-ul2
              li 
                i.fas.fa-check
                p.mb-0 Monitorización en tiempo real.
              li 
                i.fas.fa-check
                p.mb-0 Pago por <i>click</i>.
              li 
                i.fas.fa-check
                p.mb-0 Rapidez.
              li 
                i.fas.fa-check
                p.mb-0 Sencillez de uso.
              li 
                i.fas.fa-check
                p.mb-0 Accesibilidad.
              li 
                i.fas.fa-check
                p.mb-0 Segmentación.

    .row.align-items-center.mb-5
      .col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/titulo1.svg', alt='Imágen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img7.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-4.texto-negro Redacción y optimización del texto de los anuncios
              p.mb-5.texto-negro Además de atraer muchos más usuarios, también supondrá un mejor posicionamiento dentro del grupo de los enlaces patrocinados, lo que hace que anuncios que tienen mejor porcentaje de #[i clicks] salgan por delante y otros sean relegados a las últimas posiciones o incluso eliminados de los resultados de búsqueda. 

      .col-lg-4.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img8.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-4.texto-negro Selección de la ubicación de los anuncios
              p.texto-negro La elección del sitio <i>web</i> donde anunciarse es fundamental. Un análisis del público objetivo, de los hábitos y costumbres de estos será la clave para escoger unos u otros. 

      .col-lg-4.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img9.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-4.texto-negro Selección de la época del año
              p.texto-negro La realización de campañas de SEM para épocas del año en que la demanda del negocio es mayor (productos estacionales), o bien, para el lanzamiento de algún producto, puede resultar muy interesante y beneficioso. 

    .row.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/titulo2.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordion2")
        .row.p-4(titulo="Tráfico cualificado hacia su página")
          p Una de las bases de cualquier estrategia de <i>marketing</i> digital es la de atraer a los usuarios correctos hacia su <i>web</i>. El <i>marketing</i> de motores de búsqueda es muy efectivo a la hora de atraer la atención de los usuarios y generar <i>clicks</i>, gracias a que permite filtrar a los usuarios en función de las palabras que buscan, lo que le  asegura que este tráfico esté compuesto por personas que a priori, estén interesadas en su marca.

        .row.p-4(titulo="Dar a conocer la marca o empresa")
          p Colocarse en los primeros puestos de Google es una manera fantástica de conseguir visibilidad para una marca. El hecho de que un usuario no haga <i>clikc</i> sobre su anuncio, no significa que no lo haya visto.

        .row.p-4(titulo="Generar conversiones")
          p Una conversión tiene lugar cuando un usuario que accede a su página consigue el objetivo pretendido, que puede ser desde un registro como usuario, la cumplimentación de un formulario, la solicitud de información, una venta, entre otras. En buscadores como Google, la herramienta para creación de campañas <i>GoogleAds</i>, ofrece todo tipo de ayuda para poder medir las conversiones y así asegurar que los anuncios sean realmente efectivos.

        .row.p-4(titulo="Grandes resultados con presupuestos pequeños")
          p No es necesaria una gran inversión inicial, esto lo hace muy accesible para pequeñas empresas que pueden competir en igualdad con grandes empresas que disponen de amplias partidas presupuestarias para las acciones de <i>marketing</i>. Se puede decir entonces que la publicidad a través de motores de búsqueda posibilita la obtención de grandes resultados con pequeños presupuestos

        .row.p-4(titulo="Datos relevantes")
          p Gracias a la información completa y el gran volumen de estadísticas disponibles en este tipo de herramientas de inserción de anuncios, se puede conocer mejor el comportamiento de los usuarios y la efectividad de las diferentes campañas SEM, información que puede usarse para trasladar las campañas a otros sitios <i>web</i> como portales especializados o medios de comunicación.

        .row.p-4(titulo="Posibilidades de personalización")
          p Estas son muy altas. Es posible realizar campañas en función de:

          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-check
              p.mb-0 Zona geográfica.
            li 
              i.fas.fa-check
              p.mb-0 Intereses.
            li 
              i.fas.fa-check
              p.mb-0 Edad.
            li 
              i.fas.fa-check
              p.mb-0 Sexo.
            li 
              i.fas.fa-check
              p.mb-0 Otras.

        .row.p-4(titulo="Resultados altamente medibles")
          p Las herramientas como Google <i>Ads</i> le proporcionan informes altamente detallados de la evolución de una campaña, de manera que es posible saber en todo momento qué ocurre con los anuncios. En el caso del buscador Google, su herramienta de creación y seguimiento de campañas SEM, Google <i>Ads</i>, está conectada a otra denominada Google <i>Analytics</i> que permite monitorizar las visitas a las diferentes páginas o sitios <i>web</i>.

        .row.p-4(titulo="Monitorización en tiempo real")
          p Es lo que permite realizar un seguimiento continuo y actualizado de una campaña, gracias a lo cual se pueden realizar modificaciones sobre la marcha en algunos parámetros.

        .row.p-4(titulo="Pago por <i>click</i>")
          p Con esto la campaña cuesta dinero solo si se consiguen resultados. Gracias a la configurabilidad de la herramienta se puede controlar y ajustar el presupuesto de manera dinámica, y otros conceptos como el número máximos de clics por día, asegurando la rentabilidad de la campaña.

        .row.p-4(titulo="Rapidez")
          p La publicidad en buscadores permite alcanzar resultados relativamente rápidos y a gran escala.

        .row.p-4(titulo="Sencillez de uso")
          p Puede ser usado sin grandes conocimientos técnicos.

        .row.p-4(titulo="Accesibilidad")
          p Una de las características de estas campañas es la de la obtención de grandes resultados con inversiones no demasiado grandes.

        .row.p-4(titulo="Segmentación")
          p Por último, otro punto fuerte de esta herramienta son sus grandes posibilidades de segmentación. Al estar orientada a palabras clave, llega al público que está activamente interesado en el producto.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.2 Técnicas de masificación de información

    p(data-aos="fade-left") El objetivo de toda empresa en la era actual es masificar su marca, producto o servicio. Gracias a las herramientas del <i>marketing</i> Digital esta labor puede ser un poco más fácil debido al alcance y penetración en la audiencia. La cantidad de “Me Gusta” o “Me Encanta” en la FanPage de <i>Facebook</i> o los suscriptores en <i>Twitter</i> o los seguidores en Instagram cobran importancia porque indica la aceptación de la empresa u oferta que es presentada.

    p.mb-5(data-aos="fade-left") A continuación, se presentan algunas de las plataformas más populares que ayudan a las empresas a masificarse, conseguir clientes y por consiguiente aumentar sus ventas:

    
    .tarjeta.bg-slyder.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 WhatsApp + <i>Facebook</i> + Instagram

            p Estas tres plataformas son fundamentales al momento de crear cualquier campaña publicitaria. Con la adquisición de Instagram y WhatsApp por medio del dueño y creador de <i>Facebook</i>, se han ido actualizando diversas funciones que hacen que esta sea la plataforma más apetecida por los empresarios.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0

            p.mt-5 Al crear un Fan Page en <i>Facebook</i>, le da la opción de integrar un botón de llamado a la acción y este puede configurarse para que con tan sólo un <i>click</i> lo lleve a la App de WhatsApp y generar una conversación más personalizada empresario-cliente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0

            p.mt-5 Ahora bien, desde la configuración de la Fan Page, se puede integrar con el perfil de Instagram, creando una plataforma omnicanal para mejor experiencia y comunicación del cliente; este aspecto es fundamental, debido a que el usuario tendrá disponible tres canales de comunicación a tan solo un <i>click</i> (Messenger, WhatsApp y Direct).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 TikTok

            p Es una red social propiedad de la empresa #[b ByteDance] (China). Es la red social por excelencia para generar y compartir videos cortos, que, durante esa cantidad minúscula de segundos, dan un mensaje concreto de lo que se quiere ofrecer o comunicar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 YouTube

            p Es un sitio <i>web</i> estadounidense especializado para crear o compartir videos de diferente temática (películas, programas de televisión, vídeos musicales, video tutoriales, entre otros.), así como contenido amateur de juegos o situaciones cotidianas de las personas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 Email <i>marketing</i> o E-mailing

            p Es una acción o técnica de mercadeo directo que se apoya del envío de correos electrónicas de forma masiva para enviar un mensaje a una audiencia específica. Este envío de correos busca estimular las ventas o informar de novedades. Existen varias plataformas que prestan este servicio, entre las más populares están: mailchimp y sendinblue.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img15.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 <i>Twitter</i>

            p Es un servicio de micro blogueo originario de Estados Unidos, la red permite enviar mensajes de texto plano de corta longitud (máximo de 280 caracteres) llamados tweets, que se visualizan en la página principal del usuario y que sus suscriptores pueden ver. Esta plataforma es muy usada por empresas de servicios de información como noticieros, revistas, editoriales, etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img16.svg', alt='Imágen decorativa')

    

    p.mb-5(data-aos="fade-right") Esto es un serio dolor de cabeza en la industria porque el <i>marketing</i> de medios sociales es algo que realmente funciona y puede ser muy poderoso, pero la mayoría de las personas (empresas y consultores por igual) tienen un montón de conceptos erróneos con respecto a las diferentes estrategias y cómo deben ser utilizados. En este estudio se desglosa el <i>marketing</i> en redes sociales en cinco (5) técnicas principales que son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        TabsA.color-acento-contenido.mb-4
          .tarjeta.tarjeta-rosa.p-4(titulo="Gestión de la marca")
            p Esta es la técnica más común que los "expertos" prometen hacer. Incluye la creación y el mantenimiento de un blog y una cuenta de <i>Twitter</i>, la captación de personas interesadas, compartir cosas valiosas de tu sector y, con el tiempo, conseguir seguidores, visitantes y confianza. Incluso puede implicar el mantenimiento de una página de fans en <i>Facebook</i> (no es eficaz si NO tiene ya una marca fuerte establecida) o un grupo de <i>LinkedIn</i>.

          .tarjeta.tarjeta-rosa.p-4(titulo="Orientación")
            p La segmentación en redes sociales consiste en encontrar a personas en las plataformas de redes sociales una por una y hacerlas partícipes de sus servicios. Esto incluye encontrar y tuitear a personas en <i>Twitter</i> basándose en su descripción o en tweets con palabras clave, contactar con alguien directamente en <i>LinkedIn</i> para una venta B2B o comentar un post de un bloguero.

          .tarjeta.tarjeta-rosa.p-4(titulo="Gamificación <br>del <i>marketing</i>")
            p Es cuando usted crea su propio contenido viral que generalmente promueve indirectamente su marca o servicios. Esto incluye la creación de un vídeo viral, la organización de un concurso o la creación de un sitio novedoso para llamar la atención de la gente. Algunos ejemplos, respetablemente, son las marcas registradas como Movistar, Nutresa, Almacenes Éxito, entre otros.

          .tarjeta.tarjeta-rosa.p-4(titulo="Promoción de los <br>marcadores sociales")
            p Los sitios de marcadores sociales son servicios en los que la gente comparte recursos a través de una URL de referencia en lugar del propio contenido. Estos sitios incluyen <i>Digg</i>, <i>Mixx</i>, <i>Delicious</i> y docenas más. El objetivo de esta técnica es aparecer en la primera página o estar en los primeros puestos de estos sitios, conduciendo toneladas y toneladas de tráfico a su sitio <i>web</i>.

          .tarjeta.tarjeta-rosa.p-4(titulo="Campaña de <br>influenciadores")
            p se trata de contar con personas influyentes que son blogueros populares, tuiteros, creadores de vídeos, etc., para que promocionen sus productos y servicios. Esta es probablemente la forma más efectiva y poderosa de hacer <i>marketing</i> en las redes sociales. El mayor problema es que se necesita mucho tiempo para crear esa confianza con el público en línea, desde meses hasta años. En una campaña de influenciadores, se aprovecha el compromiso y la confianza que otros han construido durante meses y años.

      .col-8.col-lg-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img17.svg', alt='Imágen decorativa')

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.3 Técnicas de optimización de contenidos y relevancia de datos

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") La optimización de las redes sociales es una forma eficaz de conseguir y mantenerse por delante de la competencia en los canales de las redes sociales como <i>Twitter</i>, <i>LinkedIn</i>, <i>Facebook</i>, YouTube, entre otros.

      p(data-aos="fade-right") La optimización de los medios sociales puede definirse como un proceso de acceso a nuevos clientes mediante el descubrimiento de los canales de medios sociales predominantes; existen varias técnicas y estrategias, como los canales RSS, los sitios <i>web</i> de medios sociales, los <i>blogs</i> y los videos, y los sitios <i>web</i> de noticias sociales.

      p(data-aos="fade-left") A continuación, se presenta los beneficios de la implementación de técnicas de optimización, que son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordion")
        .row.p-4(titulo="Público objetivo")
          p Puede dirigirse directamente a su público en función de sus intereses, grupo de edad, habilidades, etc. Los canales de las redes sociales le dan la oportunidad de relacionarse con sus clientes y aumentar la visibilidad de su marca; puede compartir actualizaciones o reseñas en los sitios <i>web</i> de las redes sociales.

        .row.p-4(titulo="Mejora los resultados de los motores de búsqueda")
          p La optimización de los medios sociales también mejora la clasificación de los sitios <i>web</i> en los motores de búsqueda, le resultará fácil encontrar resultados rápidos y efectivos ante los sitios <i>web</i>, es decir, no es necesario esperar mucho tiempo para encontrar tráfico genuino en su sitio <i>web</i>.

        .row.p-4(titulo="Video")
          p Los post de video son aún más llamativos hoy en día. En el video post, usted puede inspirar a la audiencia y hacerles saber acerca de sus productos/servicios y cómo esos productos/servicios les ayudarán. Esta estrategia se está haciendo popular en los últimos años y se utiliza como una parte importante para las ventas. 

        .row.p-4(titulo="Blogging")
          p Es una de las técnicas más populares porque siempre tiene contenido genuino de calidad y la gente puede encontrar resultados originales. Los profesionales están utilizando el blogging como la técnica principal para la optimización de cualquier sitio <i>web</i> mediante el uso de backlinks en el blog y el contenido sobre el sitio <i>web</i> de la empresa. Las palabras clave también se utilizan en el contenido para llegar a una audiencia máxima de internet.

        .row.p-4(titulo="Contenido viral")
          p Usted debe tratar de crear contenido que puede ser viral fácilmente. Será muy exitoso en el <i>marketing</i> de medios sociales para cualquier sitio <i>web</i> si tiene cualquier contenido escrito, imagen o vídeo y es lo suficientemente interesante para conseguir ser viral. 

        .row.p-4(titulo="Manténgase conectado")
          p También aumenta los canales de comunicación con diferentes personas, que pueden ayudarle a promover su sitio <i>web</i> o podrían ser sus clientes directos para los sitios sociales. Los clientes pueden ponerse en contacto con usted en cualquier momento con preguntas, siempre y cuando usted se esfuerce por responder a esas preguntas en un plazo determinado. 

        .row.p-4(titulo="Aumentar la credibilidad")
          p La optimización de las redes sociales significa que una persona real mantiene los perfiles y publica artículos, <i>blogs</i> e información sobre productos y servicios. Esto construye e impulsa la credibilidad también activamente ejecutar y participar en la plataforma de medios sociales.

        .row.p-4(titulo="Tráfico para los sitios <i>web</i>")
          p La optimización de los medios sociales le ayuda a generar tráfico relevante para su sitio <i>web</i> sin ningún gasto. La optimización de los medios sociales ayuda a llegar a un público más amplio y que responde mucho mejor y los visitantes podrán llegar a usted también. Publicar y compartir contenidos en las redes sociales, foros y <i>blogs</i> ayuda a generar un gran tráfico. Le ayuda a conseguir más tráfico a su sitio <i>web</i> con una publicación atractiva en diferentes canales de medios sociales.

        .row.p-4(titulo="Fidelización de clientes")
          p La optimización de los medios sociales le ayuda a generar tráfico relevante para su sitio <i>web</i> sin ningún gasto. La optimización de los medios sociales ayuda a llegar a un público más amplio y que responde mucho mejor y los visitantes podrán llegar a usted también. Publicar y compartir contenidos en las redes sociales, foros y <i>blogs</i> ayuda a generar un gran tráfico. Le ayuda a conseguir más tráfico a su sitio <i>web</i> con una publicación atractiva en diferentes canales de medios sociales.

        .row.p-4(titulo="Aumentar la visibilidad social")
          p Los medios sociales son una gran herramienta para establecer una relación con su público sin comprometer sus preferencias. Los contenidos compartidos, <i>blogs</i>, posts, etc. hacen que la gente conozca su marca y su sitio <i>web</i>. Los medios sociales permiten escribir información sobre el negocio con un enlace al sitio <i>web</i>, lo que ayuda a generar más clientes potenciales y a obtener una ventaja sobre los competidores. 

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.4 Métrica: técnicas de identificación y barrido

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") Las métricas son los datos que se recopilan y utilizan para medir el rendimiento de sus campañas en las redes sociales. Estas métricas ayudan a determinar si el tiempo que se dedica al <i>marketing</i> en redes sociales está dando sus frutos en cuanto al retorno de la inversión. Estas métricas dan una idea de cómo ven los demás la empresa y su contenido; también le dan una visión precisa de su inversión en esta plataforma de <i>marketing</i> en constante cambio.

      p(data-aos="fade-right") Las siguientes tres métricas son las más universales y se deben tener en cuenta para el logro de los objetivos de una empresa:

    .row.justify-content-center.align-items-center.mb-5
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-4(x="40.5%" y="41.8%" numero="1")
          p #[b Alcance:] se refiere al número de personas que realmente ven su contenido, le ayudará a entender hasta dónde llega su contenido y cuán grande es su audiencia.

        .tarjeta.color-acento-contenido.p-4(x="36.6%" y="65%" numero="2")
          p #[b Impresiones:] es el número de veces que su contenido se muestra o se presenta a una audiencia, se basa en si una persona hace o no clic en su contenido.

        .tarjeta.color-acento-contenido.p-4(x="64.4%" y="26.5%" numero="3")
          p #[b Compromiso:] considerada la más importante, se describe como el objetivo final de su contenido. Esta métrica le dice que la gente está actuando en su contenido, y eso hace que sea muy probable que se aventuren a visitar su sitio, blog o página de producto.


    p.mb-5(data-aos="fade-right") Aunque el compromiso no puede darse sin el alcance y las impresiones, es una calle de doble sentido. El algoritmo está ajustado para que una publicación con un compromiso significativo se muestre frente a más audiencias lo que significa más impresiones.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

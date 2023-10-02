<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <i>Big Data</i>

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Imágen decorativa')

      .col-lg-9
        p(data-aos="fade-left") Una de las grandes herramientas que apoya la analítica de datos son los diferentes <i>software</i> especializados o herramientas ofimáticas que se encuentran en el mercado. Los datos que generalmente se procesan son semiestructurados o estructurados y tienen diferentes orígenes, estos son muy usados en las industrias, pues la información obtenida es la base para tomar decisiones, lo cual puede generar beneficios en el incremento de ingresos, establecer mejoras en los procesos y maximizar campañas publicitarias; sin embargo, el principal objetivo de la analítica de datos es dar impulso al rendimiento o beneficio empresarial.

        p(data-aos="fade-left") El análisis de datos o también conocido como <i>Big Data</i>, es aplicado a los análisis cualitativos; es decir, se realiza el análisis de datos numéricos, los cuales tienen variables que pueden ser cuantificables, así como compararse y medirse a través de la estadística; es de anotar que el análisis cualitativo es de carácter interpretativo, a través de interpretaciones de los estadísticos, con base en la comprensión que se haga de los datos que no son numéricos. Como beneficio del <i>Big Data</i> se puede mencionar, que permite obtener respuestas más completas, porque se dispone de más información que implica una mayor confianza en los datos, lo que supone un enfoque completamente diferente a la hora de abordar los problemas.

        p(data-aos="fade-left") Los <i>Big Data</i> pueden ayudar a abordar una serie de actividades empresariales, desde la experiencia del cliente hasta la analítica.

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-rosa.p-5(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imágen decorativa')

          .col-lg-1
          .col-lg-8
            .titulo-segundo.color-acento-contenido
              h2 Casos de uso de <i>Big Data</i>

            p.mb-5 Para ampliar la información sobre la importancia del <i>Big Data</i>, descargue el siguiente documento.

            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexos/casos_de_uso_de_big_data.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 1.1 <i>Open source</i>

    p.mb-5 La definición de #[b #[i Open source]] (en español #[b #[i código abierto]]), es un código fuente que se pone a disposición del público y que todos pueden ver para su posible modificación y distribución. Para conocer más acerca de este código abierto, se invita a revisar la siguiente información:

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-left")
        img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa')


    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 1.2 Herramientas de gestión y métodos de normalización de data

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p(data-aos="fade-right") Una herramienta de gestión de datos combina y gestiona datos de numerosas fuentes con el objetivo de extraer, limpiar, virtualizar, transformar e integrar los datos sin comprometer su integridad para que se pueda acceder a ellos en un formato fácil de usar. Estas potentes herramientas denominadas “ETL” se utilizan para cumplir estos objetivos empresariales, la capacidad del <i>software</i> para manejar varios tipos de consultas desempeña un papel crucial en el perfeccionamiento de los datos de acuerdo con los requisitos del negocio.

        p(data-aos="fade-right") La responsabilidad de gestionar la información y los datos del <i>software</i> no depende únicamente del equipo de TI (Tecnologías de la Información), es una decisión empresarial que puede mejorar y apoyar todas las facetas de una empresa. Por esto, el uso de estas herramientas es esencial para sacar el máximo partido a la información, puesto que ayuda a minimizar los errores humanos y ofrece una forma segura para que todos los usuarios puedan acceder y utilizar los datos siempre que lo deseen.

      .col-8.col-lg-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-rosa.p-5(data-aos="flip-down")
        .row.justify-content-center.align-items-center
          .col-6.col-lg-3
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='Imágen decorativa')

          .col-lg-1
          .col-lg-8
            .titulo-segundo.color-acento-contenido
              h2 Herramientas de base de datos

            p.mb-5 Con la intención de profundizar en el tema, le invitamos a que acceda en los materiales complementarios de este subtema, donde se relaciona un artículo <i>web</i> sobre las “7 herramientas de administración de bases de datos que debe conocer como DBA o Sysadminy”; así conocerá más sobre las diversas herramientas de administración de base de datos.

            .col-sm-auto
              a.boton.color-acento-botones(href="https://geekflare.com/es/database-management-tools/" target="_blank")
                span Enlace
                i.fas.fa-link

    p.mb-5 Ahora, es importante conocer muy bien todo el tema de normalización de data, esto es:

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema1/img6.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-rosa.p-5(data-aos="flip-down")
        .row.justify-content-center.align-items-center
          .col-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imágen decorativa')

          .col-lg-1
          .col-lg-8
            .titulo-segundo.color-acento-contenido
              h2 Formas normales

            p.mb-5 Para conocer más sobre las formas normales, su descripción, características y función, descargue el siguiente documento.

            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexos/formas_normales.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 1.3 Criterios de identificación de uso de algoritmos

    p(data-aos="fade-left") Un algoritmo de redes sociales es una compilación de reglas y datos que toman decisiones sobre lo que los usuarios quieren ver en la plataforma. #[b Los sitios de redes sociales crean algoritmos únicos para cada persona que utiliza el sitio,] lo que significa que no habrá dos personas que tengan exactamente el mismo hilo de noticias en las redes sociales. Esencialmente, los algoritmos de las redes sociales analizan el comportamiento de los usuarios y priorizan el contenido que la plataforma cree que el usuario quiere ver y con el que es más probable que participe.

    p.mb-5(data-aos="fade-left") Cada una de las principales plataformas de redes sociales tiene su propia versión de un algoritmo de estilo #[b #[i "news feed"]]; a continuación, se ofrece un resumen de lo que los algoritmos de estas plataformas tienen en cuenta a la hora de priorizar el contenido, esto es:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta.tarjeta-morada.mb-3(data-aos="flip-left")
          .row.justify-content-center
            img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imágen decorativa')
          .p-4  
            h4 Compromiso
            p Cuando se crea por primera vez una cuenta en una plataforma de redes sociales, es muy probable que vea una mezcla de contenido aleatorio que puede no alinearse con sus gustos, pero a medida que participa las plataformas de las redes sociales empiezan a conocer sus intereses y preferencias muy rápidamente; una vez que tiene una buena idea de lo que un usuario quiere o le gusta, van a dar prioridad a ese tipo de contenido en el <i>feed</i> del usuario.

      .col-lg-6
        .tarjeta.tarjeta-morada.mb-3(data-aos="flip-right")
          .row.justify-content-center
            img(src='@/assets/curso/temas/tema1/img9.svg', alt='Imágen decorativa')
          .p-4  
            h4 Tiempo en la plataforma
            p <b style= 'color:#232997;'>¿Por qué es tan importante lo que se ve?</b>
            p Porque cuanto más tiempo esté participando, más tiempo pasa en una plataforma y cuando esto sucede, es susceptible de ver (y comprar) la publicidad que se te muestra. Cuanto más tiempo pasa participando en una plataforma de medios sociales, más información tendrá esa plataforma sobre sus preferencias, compras y hábitos.

    p.mb-5(data-aos="fade-left") Continuando con este importante aprendizaje, ahora se profundizará en los detalles de cómo funcionan los algoritmos de <i>Facebook</i>, <i>Twitter</i> e <i>Instagram</i>, se puede ver:

    .row.justify-content-center.align-items-center.mb-5
      SlyderF(columnas="col-lg-6")
        .tarjeta.tarjeta-rosa.p-5
          .row.mb-3
            .col-4.col-lg-3
              img(src='@/assets/curso/temas/tema1/img10.svg', alt='Imágen decorativa')
          
            p.mt-3 #[b #[i Facebook:]] el algoritmo de la sección de noticias tiene en cuenta cientos de variables y puede predecir si un usuario determinado dará "Me gusta", comentará, compartirá, entre otras. Esta predicción se cuantifica en un único número llamado "puntuación de relevancia" que es específico tanto para usted como para esa publicación, una vez este se les asigna a todas las publicaciones que podrían aparecer en su feed, el algoritmo las clasifica y las coloca en el orden en que acaban apareciendo en su feed. Esto significa que, la publicación que ve en la parte superior ha sido elegida entre miles como la que probablemente le hará reaccionar y participar más.

        .tarjeta.tarjeta-rosa.p-5
          .row.mb-3
            .col-4.col-lg-3
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imágen decorativa')
            
            p.mt-3 #[b #[i Twitter:]] ha adoptado históricamente un enfoque muy diferente con lo que llama "<i>Timeline</i>". Este es el flujo de tweets de los usuarios que sigue que aparece en la página de inicio de su cuenta cuando usted se conecta por primera vez. Solía estar compuesto por todos los tweets de todos los usuarios que seguía en orden cronológico, pero se descubrió que los usuarios sentían que se perdían los mejores tweets de las personas que más les importaban.

        .tarjeta.tarjeta-rosa.p-5
          .row.mb-3
            .col-4.col-lg-3
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imágen decorativa')
            p.mt-3 #[b #[i Instagram:]] cuenta con más de 1,2 millones de usuarios activos en la plataforma, es la plataforma más nueva en comparación con las otras dos de esta lista, es el mejor lugar para empezar  desde abajo con el algoritmo que ha evolucionado ampliamente, cuando comenzó a clasificar las noticias de los usuarios por orden de relevancia en lugar de por la frecuencia. Ahora, el algoritmo funciona de forma similar al de su empresa matriz.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 1.4 Técnicas de uso de herramientas <i>analytics</i> (geolocalización, tempolocalización, uso de <i>software</i>, comportamiento de consumo)

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img13.svg', alt='Imágen decorativa')

      .col-lg-8
        p(data-aos="fade-left") La analítica de la localización ofrece un análisis estadístico de cualquier dato geográfico o espacial relativo a la ubicación del usuario. Este tipo de análisis puede aportar información útil sobre las atracciones que interesan a los viajeros o los patrones de visita de un grupo demográfico, a partir de estos datos, se puede mejorar la toma de decisiones estratégicas de las agencias de viajes, como por ejemplo el diseño de paquetes turísticos.

        .cajon.color-primario.p-4.mb-3(data-aos="fade-left")
          p Estudios recientes sugieren dos clases principales de soluciones de análisis de localización:
          
          ul.lista-ul--color
            li 
              i.fas.fa-circle
              b Análisis predictivo de localización.
            li 
              i.fas.fa-circle
              b Análisis de extracción de localización.

        p(data-aos="fade-left") El <i>software</i> de gestión de datos permite identificar patrones en los datos que ayudan a tomar decisiones de <i>marketing</i> más inteligentes sobre dónde invertir el tiempo y el presupuesto. El objetivo de casi cualquier comercializador es maximizar la eficacia de las actividades de <i>marketing</i> y justificar las inversiones; con las herramientas de análisis de <i>marketing</i>, los equipos pertenecientes a esta área pueden mejorar sus esfuerzos y demostrar su valor.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11.mb-4
        .tarjeta-naranja.p-4(data-aos="flip-up")
          p Las mejores herramientas de análisis de <i>marketing</i> le permiten hacer un seguimiento como el siguiente:

          ul.lista-ul--color
            li 
              i.fas.fa-check
              b Procedencia de sus usuarios y dispositivos que utilizan.
            li 
              i.fas.fa-check
              b Impacto global de sus canales de <i>marketing</i>, como la búsqueda orgánica, la búsqueda de pago, las redes sociales, las referencias, etc.
            li 
              i.fas.fa-check
              b Cómo se comportan los usuarios en su sitio <i>web</i> e interactúan con sus diferentes iniciativas de <i>marketing</i>.
            li 
              i.fas.fa-check
              b Qué fuentes de clientes potenciales están generando el mayor valor comercial.

      .col-6.col-lg-1
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img14.svg', alt='Imágen decorativa').img14

    p.mb-5(data-aos="fade-right") A continuación, se enumera algunos factores que puede tener en cuenta para ayudar a encontrar las herramientas y el <i>software</i> de análisis de <i>marketing</i> adecuados para su empresa:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4(data-aos="flip-down")
          .tarjeta-numerada__numero
            .h2 A
          p Antes de seleccionar una herramienta de análisis, debe saber qué se vende y a qué precio. No es raro que los proveedores cobren tarifas adicionales por la configuración de la cuenta, las integraciones y el uso adicional, vale la pena saber en qué se está involucrando para evitar cualquier cargo inesperado más adelante.

      .col-md-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4(data-aos="flip-down")
          .tarjeta-numerada__numero
            .h2 B
          p Debe decidir si busca una solución independiente o integrada. Si necesita hacer un seguimiento de sus clientes potenciales a lo largo de todo el ciclo de ventas, es mejor que invierta en una herramienta de análisis de <i>marketing</i> que pueda integrarse perfectamente con su CRM y otras herramientas de generación de informes.

      .col-md-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-4(data-aos="flip-down")
          .tarjeta-numerada__numero
            .h2 C
          p Si genera sus clientes potenciales diligenciando formularios, llamando por teléfono o a través de un chat en directo, tiene sentido utilizar una herramienta de análisis de <i>marketing</i> que tenga capacidades de seguimiento tanto <i>online</i> como <i>offline</i>. 

      .col-md-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-4(data-aos="flip-down")
          .tarjeta-numerada__numero
            .h2 D
          p Si hay varias personas en sus equipos de <i>marketing</i> y ventas, asegúrese de elegir una herramienta de análisis de <i>marketing</i> que admita varios usuarios.


</template>
<script>
import SlyderF from '@/components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
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

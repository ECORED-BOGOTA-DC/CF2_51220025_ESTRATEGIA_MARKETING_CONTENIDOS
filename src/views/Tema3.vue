<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de contenidos

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Imágen decorativa')

      .col-lg-9
        p(data-aos="fade-left") La producción de contenidos digitales considera una gran variedad de características bajo criterios de seguridad, originalidad, derechos de autor, ética y responsabilidad profesional, siendo <i>internet</i> el medio de comunicación masivo como puente de difusión que permite que cualquier persona comparta y reciba información. Por tanto, la gestión de contenidos digitales está basada en administrar día a día todo lo que ocurre con las plataformas y los sitios <i>web</i> propiedad de la empresa o marca. En otras palabras, es la técnica para mantener un entorno digital actualizado, activo, accesible, adaptable y visible.

        p(data-aos="fade-left") Ahora bien, un gestor de contenidos digitales debe poseer las características esenciales que asegure el éxito en la organización, este debe ser capaz de identificar características de narración multimedia, impulsar narrativas digitales de calidad, comprender fundamentos de la red como medio, facilitar la inmersión en nuevas tecnologías, y desarrollar habilidades en la gestión de proyectos digitales.

    p.mb-5(data-aos="fade-right") Se puede ver entonces las herramientas que sirven para esto:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.my-5.text-center <i>blog</i>
              p.my-5.text-center Es un sitio <i>web</i> personal donde se publica cualquier tema que se desee compartir, este se actualiza de manera periódica y recopila textos y artículos cronológicamente de uno o varios autores.

      .col-lg-5.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.mt-5.text-center Landing Page
              p.text-center Es una página <i>web</i> diseñada como destino o “aterrizaje” que permite convertir visitantes en clientes finales. Su funcionamiento es sencillo, al ofrecer algo que llame la atención del usuario, estará más dispuesto a dejar información a través de algún formulario, así al quedar registrado en la base de datos del dueño de la página podrá acceder a diversos contenidos de interés.

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") De nada sirve gastar tiempo y recursos en fantásticas publicaciones en <i>Facebook</i> y muchos <i>tweets</i> si luego no se sabe cómo controlar eficazmente su impacto e influencia. Contar el número de seguidores que se tiene solo cuenta una parte de la historia.

      p(data-aos="fade-left") Por ejemplo, aunque las empresas suelen considerar que las redes sociales son esenciales, a menudo no se dan cuenta de que el público de estas no está en un estado de ánimo transaccional, por lo que las ventas directas no suelen funcionar a menos que estén limitadas en el tiempo. Sin embargo, como plataformas de comunicación para el desarrollo de la marca, los medios sociales pueden ser muy eficaces.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 3.1 Línea editorial

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img4.svg', alt='Imágen decorativa')

      .col-lg-8
        p(data-aos="fade-left") A menudo el llamado <i>marketing</i> de contenidos o carta editorial, está estrechamente vinculada a la referenciación natural, ella planifica las acciones que sirven para aumentar sus posiciones en los motores de búsqueda como Google sin invertir un presupuesto colosal en una campaña de <i>Adwords</i>. Para construir la estrategia editorial, se debe definir en primer lugar el objetivo de la estrategia, es decir, por qué escribe y sobre qué tema, a quién se dirige, cuándo decide hacerlo y dónde.

        p(data-aos="fade-left") La línea editorial son todas las reglas que le permiten garantizar la armonía entre los diferentes contenidos que publica, defina sus objetivos, su tono, sus canales de distribución y oriente la selección de los temas a tratar en función de los intereses de su público objetivo. Al igual que una carta gráfica la línea editorial ayuda a guiar al escritor en la creación de contenidos.

        p(data-aos="fade-left") Al tener la línea editorial, esta refleja el sector y la marca. Por ejemplo, una empresa especializada en muebles para el hogar debería publicar en su <i>blog</i> y redes sociales talleres de bricolaje, consejos de decoración o nuevas tendencias en muebles, entre otras cosas.

    .row.mb-5
      .col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/titulo3.svg', alt='Imágen decorativa')

    p.mb-5(data-aos="fade-left") Cualquier empresa que se dedique a la creación de contenidos necesita una línea editorial, esto puede parecer un paso tedioso, pero en definitiva es muy útil dado que proporciona las siguientes ventajas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10.mb-4
        .tarjeta-morada-3.p-4
          .row
            .col-lg-10
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-check
                  p.mb-0 Un marco de referencia. Gracias a la línea editorial, todas las personas que participan en la creación de contenidos (editores, community manager, etc.) tienen un documento que les sirve de guía y garantiza la coherencia entre todos.
                li 
                  i.fas.fa-check
                  p.mb-0 Ayuda a los redactores a autocontrolarse e imponer una regularidad en la publicación de contenidos.
                li 
                  i.fas.fa-check
                  p.mb-0 Permite definir los temas relevantes que se pueden tratar y facilita la priorización de los mismos.
                li 
                  i.fas.fa-check
                  p.mb-0  Puede controlar la imagen de la empresa.
                li 
                  i.fas.fa-check
                  p.mb-0 Ayuda a optimizar el SEO, al seleccionar palabras clave relevantes para el sector y el público, se posiciona en los primeros resultados de búsqueda de sus objetivos. 
                li 
                  i.fas.fa-check
                  p.mb-0 Cuando hayan encontrado las respuestas a sus preguntas en su sitio, le identificarán como una referencia y tenderán a volver a usted para otras necesidades.

      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img5.svg', alt='Imágen decorativa').img5-tm3

    p.mb-5(data-aos="fade-left") En definitiva, la línea editorial representa un ahorro de tiempo, energía y eficacia para todas las personas que se dedican a la creación de contenidos.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 3.2 Comunicación escrita

    p.mb-5(data-aos="fade-left") La comunicación es la herramienta más importante que se tiene para establecer una relación con las demás personas, es lo que permite compartir y expresar lo que se piensa o se siente; esto en los diferentes entornos donde hay un desenvolvimiento laboral, académico o familiar. Esta se logra haciendo uso de los mensajes verbales y no verbales, es decir a través de la expresión corporal, pero en muchas ocasiones la comunicación no se logra, y no se lleva a cabo una comunicación efectiva, la cual es la encargada de que la comunicación que se da entre dos o más personas sea objetiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imágen decorativa')

      .col-lg-8
        p(data-aos="fade-left") La escritura en las redes sociales, en efecto, aunque utiliza viejos y nuevos grafemas, es más inmediata, más parecida a la expresión oral. Además, el vocabulario y las estructuras complejas son, por tanto, bastante limitados, en ocasiones debido a la falta de cultura de sus usuarios, y también porque es un medio de comunicación simple, tan simple como el intercambio oral, permite un intercambio capaz de crear formas híbridas, ya que en las redes sociales, como en las conversaciones presenciales, las relaciones son más relevantes que cualquier otra cosa. Así que, para decirlo claramente, en las redes sociales se escribe como se habla.

        p(data-aos="fade-left") Pero hay más que eso, la oralidad escrita en las redes sociales es un medio de comunicación inusual, con un fuerte impacto en la percepción del contexto social, mostrando una realidad, peor de lo que realmente es. Sin embargo, también se debe a una especie de juicio erróneo pues paradójicamente, en las redes sociales se tiene la misma libertad que en la comunicación escrita, aunque las formas escritas pueden ser juzgadas de forma más estricta, ya que en la escuela se enseña a tomarlas más en serio, y puesto que la teoría es más conservadora que la práctica. El resultado es que esto perjudica al contexto cultural, fomentando la idea de una decadencia infundada, o más bien sobrevalorada.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 3.3 Plan de mejoramiento

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p(data-aos="fade-right") Cuando se piensa en crear una estrategia de redes sociales para una empresa, probablemente vengan a la mente de inmediato algunas de las principales plataformas: <i>Facebook</i>, Instagram, Twitter, y quizás YouTube o Pinterest, dependiendo del sector. Sin embargo, existen muchos tipos de redes sociales, con nuevas plataformas y formatos que aparecen regularmente. Algunos son bastante especializados, mientras que otros tienen el potencial de convertirse en el próximo Instagram o <i>TikTok</i>.

        p(data-aos="fade-right") Una cosa que ha cambiado desde los primeros días de las redes sociales es que muchas plataformas solían centrarse en una función, como las redes sociales o el intercambio de imágenes. Ahora, la mayoría de las plataformas de medios sociales establecidas se han ampliado para incorporar la transmisión en vivo, la realidad aumentada, las compras, el audio social y más. Así que, en lugar de ofrecer descripciones de alto nivel, pueden

        p(data-aos="fade-right") encontrarlas en cualquier sitio, se han agrupado una amplia variedad de plataformas en nueve categorías generales que se centran en casos de uso específicos y en lo que las empresas pueden conseguir al utilizarlas.

      .col-10.col-lg-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imágen decorativa')

    .row.mb-5
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/titulo4.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") Con el creciente número de plataformas de redes sociales, puede resultar abrumador preguntarse constantemente si cada una de ellas merece su tiempo. Para evitar perder demasiado tiempo aprendiendo los secretos de cada nueva plataforma, se debe dejar que la estrategia de <i>marketing</i> en redes sociales guíe estas decisiones y que se entre solo en las redes que apoyan los objetivos.

      p(data-aos="fade-left") Basado en lo anterior, a continuación, se encuentran tres consejos para construir criterios propios que ayudarán a evaluar cualquier nueva plataforma de medios sociales, sin importar cuál sea o cómo funcione:

    .tarjeta.bg-slyder.mb-5
      SlyderA(tipo="b").p-5
        .row
          .col-md-6.mb-4.mb-md-0
            h4.my-5 Conozca a su público

            p La primera pregunta que debe hacerse antes de unirse a una nueva plataforma de medios sociales es: ¿Dónde está su público?

            p Tiene más sentido ir a donde su público ya está, que unirse a una nueva plataforma y atraer a su público hacia ella. Lo segundo que hay que entender es cómo utiliza su audiencia esa plataforma. ¿Qué tipo de contenido buscan? ¿Qué tipo de cuentas siguen? ¿Son consumidores pasivos o creadores de contenidos?

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Manténgase al día con las estadísticas de las redes sociales

            p Cada vez que surge una nueva plataforma de medios sociales, es esencial saber la diferencia entre un objeto nuevo y brillante y una plataforma de rápido crecimiento que tiene el potencial de permanecer.

            p Aunque nadie puede predecir el futuro, una forma de saber si una plataforma tiene capacidad de permanencia es comparar sus estadísticas con las de plataformas de medios sociales ya establecidas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='Imágen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Alineación con los objetivos clave de su negocio

            p <b style= 'color:#6936C1;'>Pregúntese:</b> ¿Qué plataformas se ajustan mejor a los objetivos de su negocio?

            p Por ejemplo, si uno de sus objetivos es dar a conocer un nuevo producto o servicio que podría beneficiarse de los videotutoriales, debería centrarse en plataformas solo de vídeo (como YouTube y Vimeo) o en formatos de vídeo disponibles en los sitios en los que ya está activo (como Instagram Stories y Reels, <i>Facebook</i> Live, etc.).

            p Sin importar cuáles sean sus necesidades y objetivos, es seguro que encontrará una forma de utilizar las redes sociales en beneficio de su negocio siempre realizando planes de mejora y actualización de las plataformas

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imágen decorativa')



</template>

<script>
export default {
  name: 'Tema3',
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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg1
      .row.justify-content-center.align-items-center.mb-5
        .col-5.col-md-2.col-lg-1
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Imágen decorativa')

        .col-md-10.col-lg-11
          p(data-aos="fade-left") Estimado aprendiz, bienvenido a este momento de aprendizaje, donde se abordarán diferentes herramientas y técnicas para el posicionamiento de la imagen en las redes sociales, además de reconocer los conceptos de manejo, Big Data, evaluación de contenido y gestión de contenidos, lo que permitirá lograr los objetivos de optimizar la imagen en redes sociales acorde con las variables del mercado. Antes de empezar se invita a revisar el siguiente video para identificar el contexto de aprendizaje:

      .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/123456789" title="Comunicación de marketing digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

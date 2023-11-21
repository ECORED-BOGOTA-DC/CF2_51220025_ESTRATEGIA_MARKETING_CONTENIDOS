<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Cuando los usuarios buscan algo en la web lo primero que hacen es abrir un buscador, introducen la palabra o frase relacionada con su interés y el buscador devuelve una amplia gama de resultados, estos, vienen determinados por diversos factores, pero para las empresas, es primordial estar en las primeras páginas de los resultados y así tener mayores visitas que se transforman en mayores posibilidades de ventas. El orden en que son visualizados los resultados en el buscador es lo que determina el posicionamiento web y en la actualidad es vital para tener éxito en cualquier empresa, existe una serie de técnicas que optimizan el uso e incrementa la relevancia y visibilidad del sitio, entre las que se encuentran las estrategias de SEO y SEM pero sin dejar de lado la calidad en la gestión de los contenidos digitales a publicar. 

    p.mb-5 Sabiendo esto de manera ya detallada y lo visto en el componente formativo, se presenta el siguiente esquema que resume todo esto:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que muestra el mapa conceptual donde señala los 3 grandes aspectos dentro de la optimización de la imagen en las redes sociales, los cuales son: 1. el big data que incluye open source, herramientas de gestión, criterios de identificación y técnicas de herramientas de analytics;  2. la evaluación de contenidos que tiene factores y métodos SEO y SEM, técnicas de valorización de información y optimización de contenidos, así como métricas relacionadas con el barrido; 3. la gestión de contenidos que incluye línea editorial, comunicación efectiva y plan de mejoramiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

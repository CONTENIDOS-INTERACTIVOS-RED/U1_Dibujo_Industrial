<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 1. Introducción a la Paz y Resolución de Conflictos: Causas y Dinámicas del Conflicto'" :subTitulo="'SINTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 En la Unidad 1, se aprenden los conceptos fundamentales relacionados con la paz, los conflictos y las dinámicas que los generan. Se explicará la diferencia entre paz negativa (ausencia de violencia directa) y paz positiva (creación de justicia y bienestar), siendo esta última, crucial para fomentar un entorno equitativo y de respeto a los derechos humanos (Galtung, 1996).

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/sintesis/1.png', alt='')
        .col-lg-8
          p(data-aos="fade-up") Se explora la cultura de paz, que la UNESCO (1995) define como un conjunto de valores y comportamientos que favorecen el diálogo y la resolución pacífica de los mismos. Además, identificará los tipos y niveles de conflicto (intrapersonal, interpersonal, comunitario y estructural) y se entenderá cómo los factores sociales, económicos y políticos, pueden desencadenar estos conflictos.

          p(data-aos="fade-up") También se analizan los factores estructurales y las dinámicas de poder, que frecuentemente perpetúan las desigualdades y generan tensiones. Comprender estas dinámicas, permitirá desarrollar estrategias para la mediación y la resolución pacífica.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
  </template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>

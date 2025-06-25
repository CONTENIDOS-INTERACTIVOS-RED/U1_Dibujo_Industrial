<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'UNIDAD 1. FUNDAMENTOS DEL DIBUJO TÉCNICO'" :subTitulo="'SÍNTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 En esta unidad, se abordan los fundamentos del dibujo técnico, una representación gráfica de objetos y sistemas esencial para la comunicación visual en la ingeniería y otras disciplinas técnicas. Sus principales propósitos son la comunicación, al transmitir ideas de manera clara, y la documentación, al registrar especificaciones técnicas.


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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Introducción a la Paz y Resolución de Conflictos: Causas y Dinámicas del Conflicto'" :subTitulo="'2. TIPOS O NIVELESDE CONFLICTO'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-up") El análisis de los tipos y niveles de conflicto, resulta esencial para comprender la diversidad de situaciones que pueden surgir en diferentes contextos sociales. Los conflictos no son simples ni uniformes; cada uno tiene sus particularidades, dependiendo tanto de su origen como del entorno en el que se desarrolla. Por eso, entender las diferencias entre los diversos tipos y niveles, es clave para poder abordarlos de manera adecuada. 

        p(data-aos="fade-up") Por lo tanto, nos enfocaremos en cuatro niveles principales de conflicto: 


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Nivel 1
                p.mb-0 El intrapersonal, que se da en el interior de cada persona. 
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Nivel 2
                p.mb-0 El interpersonal, que ocurre entre dos o más individuos. 
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Nivel 3
                p.mb-0 El comunitario, que involucra a grupos dentro de una sociedad.
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Nivel 4
                p.mb-0 El estructural, que refleja desigualdades más profundas en la sociedad.


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10

            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Tipos de fuentes
                      p Teniendo claras las diferencias en los tipos de fuentes, es importante profundizar qué contiene cada una de estas y para ello lo invitamos a consultar el PDF #[strong Tipos de fuentes]
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-arrow-right



    h2(data-aos="fade-up")#t_2_1 Factores desencadenantes de los conflictos
    
    p(data-aos="fade-up") Los conflictos no surgen de manera aislada; son el resultado de tensiones acumuladas por una variedad de factores desencadenantes que afectan a individuos, grupos o sociedades. Estos factores pueden ser sociales, económicos, políticos y culturales, y cada uno juega un papel importante en la dinámica y evolución. 

    p(data-aos="fade-up") A continuación, se exploran estos factores con ejemplos claros de cómo afecta la vida cotidiana:

    .bg-full-width.bg-fondo-3.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Factores sociales
              p Desencadenan disputas cuando las relaciones entre individuos o grupos se ven afectadas por desigualdades, discriminación o exclusión social. La discriminación racial, la desigualdad de género y la exclusión de minorías, son ejemplos comunes de factores sociales que generan tensiones y malestar en una comunidad. Según Galtung (1996), estos tipos de desigualdades contribuyen a la violencia estructural, que impide que ciertos grupos accedan a los mismos derechos y oportunidades que los demás.

              p Un ejemplo típico es la lucha por los derechos civiles de los grupos denominados minoría. La falta de acceso a oportunidades educativas y laborales, combinada con la discriminación sistémica, provoca tensiones entre los grupos marginados y la mayoría dominante. Esto se puede observar en las protestas contra la brutalidad policial y la discriminación racial, donde las comunidades buscan justicia y equidad en un sistema que las excluye.

            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')
          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Factores económicos
              p Juegan un papel clave en el desencadenamiento de los conflictos, especialmente en sociedades en las que existe una marcada desigualdad en la distribución de los recursos. Cuando un grupo tiene acceso privilegiado a recursos esenciales como la tierra, el agua o el empleo, mientras que otros carecen de estas oportunidades, las tensiones aumentan inevitablemente. La falta de justicia económica, a menudo conduce a enfrentamientos entre quienes poseen y quienes no, creando divisiones profundas en la sociedad.
              p Un conflicto económico recurrente entre los trabajadores y los empleadores, es cuando el primer grupo exige mejores salarios y condiciones laborales. Si los empleados sienten que no están siendo remunerados de manera justa o que no tienen acceso a oportunidades de promoción, las tensiones se convierten en huelgas o protestas laborales, como el aumento de huelgas en sectores como el transporte o la educación.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/6.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Factores políticos
              p Los factores políticos desencadenan enfrentamientos cuando las políticas gubernamentales, la distribución del poder o los procesos electorales son percibidos como injustos o corruptos. En muchos casos, las disputas políticas surgen de la lucha por el control del poder, ya sea dentro de un gobierno o entre diferentes facciones políticas. Las tensiones también pueden aumentar cuando un grupo percibe que sus derechos políticos son ignorados o violados, como ocurre en situaciones donde se restringen las libertades democráticas.
              p Un conflicto político es el que surge durante un proceso electoral, cuando un partido o candidato alega fraude o manipulación de resultados. Esto puede generar protestas y choques violentos entre los partidarios de los diferentes candidatos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/7.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Factores culturales
              p Se refieren a las tensiones que surgen entre grupos con diferentes valores, creencias, costumbres o religiones. La globalización ha intensificado los contactos entre culturas diversas, lo que puede ser positivo en términos de intercambio cultural, pero también puede generar peleas cuando un grupo percibe que su identidad o sus tradiciones están amenazadas por otro. 
              p Según Lederach (2003), este factor, a menudo, surge cuando no se respeta la diversidad cultural o cuando un grupo intenta imponer sus creencias a otro.
              p Un ejemplo es cuando las comunidades autóctonas luchan por preservar sus tradiciones frente a proyectos de desarrollo que amenazan su forma de vida. Por ejemplo, en muchos países, los pueblos indígenas han protestado contra la construcción de infraestructuras en sus tierras ancestrales, lo que ha generado luchas con los gobiernos y las empresas que promueven estos proyectos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema2/8.png', alt='')

    .bg-color-2.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/10.png', alt='')
        .col-lg
          .px-5
            p.mb-0(data-aos="fade-up") Los conflictos no surgen de manera aislada, sino que son el resultado de una combinación de factores sociales, económicos, políticos y culturales. Comprender estos factores desencadenantes, permite identificar las raíces de los choques y abordarlos de manera más efectiva. Al reconocer las causas subyacentes, como la desigualdad económica, la discriminación social o las tensiones políticas, es posible desarrollar estrategias de resolución, que promuevan una paz positiva y contribuyan a la estabilidad social.
      
    .row.material-complementario.mt-5
      h2 MATERIAL COMPLEMENTARIO
      .col-12.col-md-6.col-lg-7
        p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Peña, G. E. G. (2021). Las fuentes del derecho. Lecciones de introducción al derecho, 189
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Suárez, E. (2020). Introducción al derecho. Ediciones UNL
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span De Sousa, M. T. (2019). Introducción al derecho. Temis 
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          span Nieto, A. (2019). Una introducción al derecho.
      .col-12.col-md-6.col-lg-3.offset-lg-1
        figure
          img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'

export default {
  name: 'Tema2',
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
.download-card
  display: flex
  justify-content: space-between
  align-items: center
  border-radius: 0px
  background-color: #fff

  &__content
    display: flex
    align-items: center
    gap: 1rem
    flex: 1

  &__text
    flex: 1

  &__action
    margin-left: 1rem

  .download-btn
    display: inline-flex
    align-items: center
    padding: 0.5rem 1rem
    background-color: #1172B3
    color: white
    border-radius: 0px
    box-shadow: 0 4px 8px rgba(0,0,0,0.1)

    &:hover
      opacity: 0.9

.pdf-icon
  width: 90px
  min-width: 90px
  display: flex
  align-items: center
  justify-content: center

  img
    width: 100%
    height: auto
    display: block

a.bg-ppal-azul-primary
  transition: opacity 0.3s ease
  &:hover
    opacity: 0.9
</style>

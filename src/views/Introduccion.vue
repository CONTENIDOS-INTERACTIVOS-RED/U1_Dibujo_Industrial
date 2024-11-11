<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 1: Introducción a la Paz y Resolución de Conflictos - Causas y Dinámicas del Conflicto'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p.mb-4(data-aos="fade-up") Bienvenidos a la Unidad 1 de la asignatura sobre Cátedra de la Paz y Resolución Pacífica de Conflictos. En esta unidad, se abordarán los conceptos fundamentales que permitirán comprender las causas y dinámicas de los conflictos en diferentes contextos sociales, identificando los factores que influyen en su manifestación y evolución. Además, se conocerán las bases teóricas y prácticas que resultan esenciales para cualquier persona interesada en desempeñar un papel activo en la construcción de una sociedad más pacífica, justa y equitativa.
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          .bg-color-1.p-4.mb-4
            p.mb-0(data-aos="fade-up") El tema de la paz y la resolución de conflictos ha adquirido una gran relevancia en el mundo contemporáneo, donde los conflictos, ya sean a nivel interpersonal, comunitario o estructural, afectan a millones de personas. Los conflictos no solo se manifiestan en formas violentas, como guerras o enfrentamientos directos, sino también en tensiones subyacentes como la discriminación, la desigualdad económica y la injusticia social.
        
          p.mb-0(data-aos="fade-up") En esta unidad, se introducirá el concepto de paz, diferenciando entre la paz negativa, que se refiere a la mera ausencia de violencia, y la paz positiva, que implica la creación de condiciones de justicia y equidad que promuevan el bienestar colectivo. A su vez, se explorará la cultura de paz, un enfoque promovido por la UNESCO, que enfatiza la necesidad de valores y comportamientos que favorezcan el diálogo y la cooperación para la convivencia pacífica. También se estudiarán los diferentes tipos y niveles de conflicto, desde el conflicto intrapersonal hasta el estructural, y se analizarán los factores sociales, económicos, culturales y políticos, que desencadenan los conflictos.
        .col-lg-5
          figure
            img(src='@/assets/curso/intro/1.png', alt='')
  
      .bg-color-2.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/intro/2.png', alt='')
          .col-lg
            .px-5
              p.mb-0(data-aos="fade-up") Al finalizar esta unidad, se habrán adquirido las herramientas necesarias para reconocer las causas y dinámicas de los conflictos en diversos contextos sociales, tanto a nivel personal como comunitario. Además, serán capaces de identificar los factores estructurales, relacionales y culturales que influyen en el surgimiento de los conflictos, y aplicar este conocimiento para evaluar casos concretos. Estos conocimientos son esenciales no solo para quienes se dedican a la resolución de conflictos en el ámbito profesional, sino también para quienes desean mejorar su capacidad de mediación y diálogo en su vida personal y profesional.
      
  
      p.mb-4(data-aos="fade-up") La Unidad 1 está organizada en tres subtemas principales que permitirán obtener una comprensión integral de las causas y dinámicas de los conflictos:
  
  
      .row.justify-content-center.align-items-start.mb-5
        .col-lg-7
          AcordionA(tipo="b")
            .div(titulo="Conceptos de paz y cultura de paz")
              p Se analizarán los conceptos fundamentales de paz negativa y paz positiva (Galtung, 1996), y se explorará el enfoque de la cultura de paz, tal como lo promueve la UNESCO.
  
            .div(titulo="Tipos y niveles de conflicto")
              p Se estudiarán los diferentes tipos de conflicto (intrapersonal, interpersonal, comunitario y estructural), así como los factores que los desencadenan, como las tensiones sociales, económicas y culturales.
  
            .div(titulo="Factores estructurales y dinámicas de poder en los conflictos")
              p Se centrará en los conflictos sociales, económicos, culturales y políticos, y en cómo las dinámicas de poder influyen en el surgimiento y evolución de los conflictos.
  
        .col-lg-5
          figure
            img(src='@/assets/curso/intro/3.png', alt='')

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7 
          figure
            img(src='@/assets/curso/intro/4.png', alt='')
        .col-lg-5
          p.mb-4(data-aos="fade-up") Además de los contenidos teóricos, la unidad incluye dos actividades principales que le permitirán aplicar los conceptos aprendidos de manera práctica: un cuestionario de diagnóstico para evaluar sus conocimientos iniciales, la creación de un storytelling sobre un conflicto real o ficticio, y el análisis de un caso. En equipo, aplicarán los conceptos estudiados para proponer una resolución pacífica.

          p.mb-0(data-aos="fade-up") Para aprovechar al máximo este espacio, es fundamental el compromiso dinámico con los contenidos y las actividades propuestas. La participación en el cuestionario, el storytelling y el estudio de caso en equipo, será crucial para su desarrollo académico y personal. Se espera que se realicen todas las lecturas asignadas, se participe en los foros de discusión y se apliquen las técnicas de mediación y escucha activa, en las actividades propuestas.

  
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

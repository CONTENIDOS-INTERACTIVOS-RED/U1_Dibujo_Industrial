<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Introducción a la Paz y Resolución de Conflictos: Causas y Dinámicas del Conflicto'" :subTitulo="'1. CONCEPTOS DE PAZ Y CULTURA DE PAZ'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-4(data-aos="fade-up") El concepto de paz es mucho más amplio que la simple ausencia de conflicto o violencia. En los estudios de paz y resolución de conflictos, resulta esencial distinguir entre la paz negativa y la paz positiva, términos desarrollados por Johan Galtung (1996). 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/1.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Paz negativa
                p.mb-0 Se refiere a la ausencia de violencia directa o física, es decir, a la situación en la que no hay guerra o enfrentamientos violentos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Paz positiva
                p.mb-0 Abarca la construcción de estructuras sociales que promueven la justicia, la igualdad y el bienestar para todos los individuos, más allá de la mera ausencia de violencia.


    .bg-color-3.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/3.svg', alt='')
        .col-lg
          .px-5
            p.mb-0 El concepto de cultura de paz, según la UNESCO (1995), consiste en un conjunto de valores, actitudes y comportamientos que favorecen el diálogo, el respeto mutuo y la cooperación, en lugar de recurrir a la violencia como medio de resolución de disputas. Este enfoque promueve una convivencia pacífica basada en la equidad, la justicia social y el respeto por los derechos humanos, tal como lo establece la Declaración Universal de los Derechos Humanos (Naciones Unidas, 1948).


    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") El concepto de paz
            p.mb-4(data-aos="fade-right") El concepto de paz puede parecer sencillo, pero encierra una complejidad profunda que ha sido objeto de estudio durante siglos. En el PDF Concepto de paz, exploramos las ideas de Johan Galtung (1996), quien distingue entre la paz negativa y la paz positiva, dos enfoques que van más allá de la mera ausencia de violencia. A través de ejemplos concretos, veremos cómo estas definiciones nos ayudan a comprender y mejorar las dinámicas cotidianas en nuestras comunidades y lugares de trabajo, y descubriremos por qué la construcción de una paz genuina exige mucho más que evitar conflictos abiertos.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto de paz

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/5.png', alt='')
      .col-lg-8
        p.mb-4(data-aos="fade-up") Después de comprender los conceptos de paz negativa y paz positiva, es fundamental explorar el concepto de cultura de paz, dado que este es un componente esencial para alcanzar una paz duradera y justa, y se define como:

        .bloque-texto-c.bg-color-3(data-aos="fade-left")
          i.fas.fa-quote-left.mb-4
          p.mb-4 Un conjunto de valores, actitudes y comportamientos que promueven la resolución pacífica, la cooperación y el respeto mutuo, en lugar de recurrir a la violencia, como medio para resolver las disputas
          span (UNESCO, 1995)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") La Declaración Universal de los Derechos Humanos (Naciones Unidas, 1948), también subraya la importancia de los derechos fundamentales en la promoción de una cultura de paz.

        p.mb-4(data-aos="fade-up") Al garantizar que todas las personas tengan acceso a los derechos básicos como la libertad de expresión, la igualdad ante la ley y la educación, se crea un entorno más propenso a la convivencia pacífica. 

        .bg-color-4.p-4(data-aos="zoom-in")
          p.mb-0 En otras palabras, la cultura de paz no solo se enfoca en prevenir la violencia directa, sino también en garantizar que todos los miembros de una sociedad, tengan las mismas oportunidades para desarrollarse plenamente.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/6.png', alt='')

    h2(data-aos="flip-up")#t_1_1 Componentes de una cultura de paz

    p.mb-5(data-aos="fade-up") Como parte de este proceso de aprendizaje, es crucial entender que la cultura de paz se construye a partir de varios componentes fundamentales. La UNESCO (1995), identifica estos elementos claves que deben estar presentes en una sociedad que aspira a la paz duradera:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Promoción de los derechos humanos")
            p El respeto y la promoción de los derechos humanos son esenciales para prevenir el surgimiento de conflictos. Los derechos humanos garantizan que todos los individuos, sin importar su origen, religión o estatus social, sean tratados con dignidad y respeto. Un entorno en el que los derechos humanos son violados, es propenso a la aparición de tensiones sociales que pueden desencadenar conflictos. Por ejemplo, la falta de acceso equitativo a la educación o la discriminación racial, son violaciones de derechos humanos que, si no se abordan, perpetúan las desigualdades estructurales y fomentan la paz negativa.

          .div(titulo="Equidad y justicia social")
            p Para lograr una paz positiva, es necesario que las sociedades eliminen las desigualdades que marginan a ciertos grupos. La justicia social se refiere a la creación de condiciones en las que todos los individuos tienen las mismas oportunidades para participar en la vida económica, social y política de su comunidad. Un claro ejemplo de justicia social, es la implementación de políticas inclusivas que aseguran el acceso igualitario a servicios básicos como la educación, la salud y la vivienda. Sin estos elementos, no se puede hablar de una verdadera paz.

          .div(titulo="Educación para la paz")
            p Según Freire (2000), la educación es una herramienta fundamental para "la emancipación de los oprimidos" y para el desarrollo de una sociedad pacífica. La educación no solo debe centrarse en la transmisión de conocimientos, sino también en la formación de individuos críticos que comprendan la importancia de los valores de la paz, el respeto y la cooperación. Las escuelas, por ejemplo, pueden ser espacios donde se enseñe a los estudiantes a resolver conflictos a través del diálogo y la mediación, en lugar de recurrir a la violencia.
          
          .div(titulo="Diálogo y participación:")
            p El diálogo es una herramienta poderosa en la construcción de la paz. El fomento de una cultura de paz requiere de espacios de participación en los que todos los actores involucrados puedan expresar sus opiniones y resolver sus diferencias, de manera pacífica. El diálogo no solo debe limitarse a los niveles institucionales o formales; es importante que se promueva también a nivel comunitario, familiar y personal. A través de la participación y el diálogo constructivo, es posible prevenir que se intensifiquen y garantizar que se resuelvan, de manera equitativa y justa.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") La cultura de paz es esencial porque crea un marco estructural y cultural que reduce las probabilidades que las disputas desemboquen en violencia. En sociedades donde los valores de respeto mutuo, equidad y justicia están profundamente arraigados, la paz positiva tiene más probabilidades de sostenerse. Al fomentar una cultura de paz, se contribuye no solo a la prevención, sino también a la creación de un entorno en el que los derechos humanos y la justicia social sean la norma.

        .bloque-texto-c.bg-color-5(data-aos="fade-left")
          i.fas.fa-quote-left.mb-4
          p.mb-4 "La paz no es simplemente la ausencia de guerra, sino que implica la construcción de una cultura basada en el diálogo, la comprensión y la cooperación".
          span (UNESCO, 1995)
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/8.png', alt='')


    .bg-color-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/9.png', alt='')
        .col-lg
          .px-5
            p.mb-0 Esto significa que la paz no puede reducirse a evitar la violencia; requiere un esfuerzo constante para transformar las estructuras sociales y garantizar que los conflictos se resuelvan de manera pacífica. En este sentido, la cultura de paz no es un objetivo final, sino un proceso continuo que necesita el compromiso activo de todas las partes de la sociedad.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") Un aspecto importante de la cultura de paz, es su capacidad para transformar actitudes y comportamientos a largo plazo. En lugar de ver el conflicto como algo inherente negativo, la cultura de paz promueve la idea de que el conflicto es una oportunidad para el crecimiento, el entendimiento mutuo y la cooperación. Las sociedades que adoptan una cultura de paz, tienden a ser más resilientes, puesto que desarrollan los mecanismos necesarios para resolver las tensiones, de manera no violenta y constructiva.     

        p.mb-4(data-aos="fade-up") En la vida diaria, los efectos de la cultura de paz se pueden ver en entornos donde se valoran el respeto, la cooperación y la inclusión. En una escuela, por ejemplo, la cultura de paz se manifiesta cuando los estudiantes y profesores trabajan juntos para crear un ambiente de aprendizaje respetuoso, en el que las diferencias son aceptadas y los enfrentamientos se resuelven mediante el diálogo. 

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/10.png', alt='')


    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/11.png', alt='')
      .col-lg-8
        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          h4 Freire (2000)
          p.mb-0 En una empresa, la cultura de paz puede manifestarse a través de iniciativas como la implementación de programas de formación en conflictos, la promoción de la participación democrática y la creación de espacios para la expresión de opiniones. Estas prácticas no solo fomentan la resolución pacífica de disputas, sino que también contribuyen a la mejora de la comunicación y la colaboración entre los empleados.

        p.mb-0(data-aos="fade-up") Por lo tanto, el fomento de una cultura de paz no puede limitarse a las esferas políticas o sociales; debe integrarse en todos los niveles de la educación. Esto incluye desde la enseñanza básica hasta la educación superior, donde los estudiantes deben aprender no solo sobre los conceptos de justicia social y derechos humanos, sino también sobre cómo aplicarlos en la vida diaria. La promoción de habilidades como la escucha activa, la empatía y la negociación pacífica, son fundamentales para construir una sociedad más justa y pacífica.

    
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
          img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

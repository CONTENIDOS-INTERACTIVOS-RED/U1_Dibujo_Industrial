<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'UNIDAD 1. FUNDAMENTOS DEL DIBUJO TÉCNICO'" :subTitulo="'3.Tipos de líneas, proyecciones ortogonales y escalas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p(data-aos="fade-up").mb-5 En el dibujo técnico, los tipos de líneas definen bordes, ejes y detalles ocultos. Las proyecciones ortogonales descomponen un objeto en vistas (frontal, lateral y superior), mientras que las escalas ajustan el tamaño del dibujo al formato, manteniendo la proporción con las dimensiones reales del objeto.


    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5.pb-md-5
        h2(data-aos="fade-up")#t_3_1 Tipos de líneas

        p(data-aos="fade-up").mb-5 #[strong Según la NTC 1777], que establece normas para el dibujo técnico en Colombia, se definen varios tipos de líneas que deben usarse en un plano técnico. A continuación, encontramos los principales tipos de líneas y sus usos específicos:

        .row.justify-content-center.align-items-center
          .col-lg-12
            SlyderF(columnas="col-12 col-lg-6 col-xl-4")
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/1.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea continua
                p.text-center Contornos visibles de objetos, la línea más común en los dibujos técnicos. Ejemplo: bordes y límites de piezas.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/2.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea discontinua (o de trazo y espacio)
                p.text-center Contornos invisibles o bordes ocultos. Ejemplo: bordes de piezas que no son visibles desde la vista actual.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/3.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de centro
                p.text-center Indica ejes de simetría y centros de círculos. Ejemplo: ejes de rotación.


              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/10.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de cota (o dimensión)
                p.text-center Muestra medidas y dimensiones, incluye flechas y textos explicativos. Ejemplo: longitudes, diámetros y alturas.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/11.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de sección
                p.text-center Indica la línea de corte en un dibujo en sección, representada con una línea gruesa. Ejemplo: cortes realizados para mostrar el interior de un objeto.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/12.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de proyección
                p.text-center Indica la dirección de las proyecciones en un plano. Ejemplo: líneas que muestran cómo se proyectan las vistas ortogonales

              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/13.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de sombra
                p.text-center Representa áreas sombreadas en un dibujo, ayudando a visualizar la tridimensionalidad. Ejemplo: sombras en vistas isométricas.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/14.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de indicador
                p.text-center Señala características adicionales o direcciones. Ejemplo: flechas que indican movimientos o flujos.
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema3/15.png' alt='AvatarTop').mx-auto.mb-4
                h5.text-center.mb-4 Línea de esbozo
                p.text-center Contornos preliminares y bocetos, generalmente más ligeras. Ejemplo: esbozos iniciales de un diseño.

    h2(data-aos="fade-up")#t_3_2 Proyecciones ortogonales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-up") Las proyecciones ortogonales son un método de representación gráfica empleado en el dibujo técnico para mostrar un objeto desde diferentes vistas bidimensionales. Este método es fundamental en la ingeniería y el diseño, ya que facilita la representación precisa de la forma y dimensiones de un objeto.
        .bg-color-2.p-4.mb-4(data-aos="fade-up")
          p.mb-0 Las proyecciones ortogonales son representaciones de un objeto en las que las líneas de proyección son perpendiculares a los planos de proyección. Esto garantiza que las dimensiones y proporciones del objeto se mantengan exactas, evitando distorsiones en las vistas.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/4.png', alt='')

    
    h2(data-aos="fade-up")#t_3_3 Vistas principales

    p(data-aos="fade-up") Generalmente, se emplean tres vistas principales en las proyecciones ortogonales:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 1. 
          span Vistas de un objeto  
        figure
          img(src='@/assets/curso/tema3/5.png', alt='') 
          figcaption Nota. #[span Tomado de Méndez, G. (2017)]
      .col-lg-6
        ol.lista-ol--cuadro.mt-5
          li 
            .lista-ol--cuadro__vineta
              span A
            | #[strong Vista de frente o alzado]: muestra la altura y el ancho del objeto. Es la vista más comúnmente utilizada.
          li 
            .lista-ol--cuadro__vineta
              span B
            | #[strong Vista superior o planta]: muestra el ancho y la profundidad del objeto, desde arriba.
          li 
            .lista-ol--cuadro__vineta
              span C
            | #[strong Vista derecha o lateral derecha]: muestra la altura y la profundidad del objeto desde un lado
          li 
            .lista-ol--cuadro__vineta
              span D
            | #[strong Vista izquierda o lateral izquierda]: muestra la altura y la profundidad del objeto desde un lado
          li 
            .lista-ol--cuadro__vineta
              span E
            | #[strong Vista inferior]: muestra el ancho y la profundidad del objeto, desde abajo.
          li 
            .lista-ol--cuadro__vineta
              span F
            | #[strong Vista posterior]: muestra la altura y el ancho del objeto, desde atrás. 


    h2(data-aos="fade-up")#t_3_4 Organización de las vistas

    p(data-aos="fade-up") #[strong Las normas ISO (Organización Internacional de Normalización)] que son esenciales en el dibujo técnico, indican que #[strong ISO-A] e #[strong ISO-E] se refieren a diferentes métodos de proyección utilizados en los dibujos técnicos de la siguiente manera:


    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sistema Americano ISO-A" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Sistema Americano ISO-A
            p Conocido como el método de proyección del tercer ángulo, es más común en América del Norte. Aquí, el plano de proyección se coloca entre el observador y el objeto
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sistema Europeo ISO-E" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Sistema Europeo ISO-E
            p También conocido como el método de proyección del primer ángulo, es comúnmente utilizado en Europa y Asia. En este método, el objeto se coloca entre el observador y el plano de proyección.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/7.png', alt='')


    h2(data-aos="fade-up")#t_3_5 Dimensiones y cotas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-color-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/8.svg', alt='')
            .col-lg
              p.mb-0 Las proyecciones ortogonales incluyen cotas y dimensiones para especificar medidas críticas, como longitud, ancho, altura y diámetros. Esto es esencial para la fabricación y el ensamblaje.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/9.png', alt='')

    h2(data-aos="fade-up")#t_3_6 Proyecciones auxiliares

    p(data-aos="fade-up") Además de las vistas principales, pueden crearse proyecciones auxiliares para representar ángulos o características que no se pueden mostrar claramente en las vistas estándar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-figura.mb-2
          h5 Figura 2. 
          span Plano auxiliar
        figure
          img(src='@/assets/curso/tema3/5.png', alt='') 
          figcaption #[strong Nota]. #[span Tomado de Universidad Nacional de San Juan. (2020).]
      .col-lg-6
        p.mb-4 Las ventajas de las proyecciones ortogonales son: 
        .bg-color-3.p-4.mb-2(v-for="item in items" :key="item.text" data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
            .col-lg
              p.mb-0(v-html="item.text")
        .bg-color-4.p-4.mt-4
          h5 Ejemplo práctico
          p Para conocer sobre la aplicación de proyecciones ortogonales lo invitamos a consultar el PDF ejemplo práctico.
          a.anexo.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo práctico



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/221321" target="_blank" rel="noopener noreferrer") Ayllón, F. (2022) Elementos básicos de dibujo técnico I: libro de apoyo. Grupo Editorial Éxodo

            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/5BBL9HG1Wes?si=oXB0FSXtwIpHFYNM" target="_blank" rel="noopener noreferrer") Cecilia Inchauste. (22 de noviembre de 2019) Metodología de trazado de las vistas. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      items: [
        {
          text:
            '<b>Claridad.</b> Permiten una comprensión clara de la geometría del objeto.',
        },
        {
          text:
            '<b>Precisión.</b> Mantienen las dimensiones reales, evitando distorsiones.',
        },
        {
          text:
            '<b>Estándar.</b> Facilitan la comunicación entre ingenieros, arquitectos y fabricantes.',
        },
      ],
      cuestionario: {
        tema: 'Sistemas numéricos y álgebra de Boole',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Para qué se utilizan las proyecciones ortogonales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Para ver un objeto desde una sola perspectiva',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Para representar un objeto en diferentes vistas bidimensionales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Para sombrear el objeto',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Para mostrar únicamente su vista frontal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué herramienta facilita la medición de dibujos a diferentes escalas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Compás',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Escalímetro',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Transportador',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Lápiz técnico',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué significa una escala 2:1 en un dibujo técnico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El objeto se representa al doble de su tamaño real',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'El objeto se reduce a la mitad de su tamaño real',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'El objeto se representa al mismo tamaño',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El objeto se representa 1:2',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué método de proyección se utiliza más comúnmente en Europa y Asia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tercer ángulo (ISO-A)',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Primer ángulo (ISO-E)',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Cuarto ángulo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Segundo ángulo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué norma regula los símbolos para soldadura en el dibujo técnico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'ANSI Y14.2',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'ANSI Y14.5',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'ANSI Y14.24',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'ANSI Y14.36',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 6,
            texto:
              '¿Qué tipo de línea se utiliza para señalar características adicionales o direcciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Línea de proyección',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Línea de esbozo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Línea de centro',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Línea de indicador',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

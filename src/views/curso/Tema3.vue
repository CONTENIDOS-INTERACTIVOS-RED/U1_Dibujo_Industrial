<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Introducción a la Paz y Resolución de Conflictos: Causas y Dinámicas del Conflicto'" :subTitulo="'3. FACTORES ESTRUCTURALES Y DINÁMICAS DE PODER'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p(data-aos="fade-up").mb-5 #[strong Los factores estructurales y las dinámicas de poder], son aspectos cruciales que influyen en el surgimiento y desarrollo de estos a largo plazo. Estos factores no solo reflejan las desigualdades presentes en las estructuras sociales, políticas y económicas de una sociedad, sino que también determinan la capacidad de los grupos para acceder a los recursos y tomar decisiones en su entorno. Los conflictos estructurales están profundamente arraigados en sistemas que se unen a la violencia estructural, una forma de opresión que genera exclusión y desigualdad, lo que lleva a que estos duren y sean difíciles de resolver (Galtung, 1996).

    .bg-full-width.bg-color-7.p-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center
          .col-lg-10
            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/info1.png', alt='', style="max-width: 840px;").mx-auto

              .bg-color-1.p-3(x="55%" y="9%" numero="+")
                p #[strong Los factores estructurales] se refieren a las condiciones sistémicas que crean y perpetúan la desigualdad en una sociedad. Estos factores están presentes en las instituciones económicas, políticas y sociales, que afectan la distribución de recursos y oportunidades entre los distintos grupos. Los enfrentamientos estructurales surgen cuando estas desigualdades se vuelven insostenibles, dado que ciertos grupos no tienen acceso a los mismos derechos o recursos que otros.

              .bg-color-1.p-3(x="46%" y="32%" numero="+")
                p La distribución desigual de la riqueza y los recursos, es una de las principales causas de los conflictos estructurales. En muchas sociedades, la disparidad entre ricos y pobres genera tensiones que, si no se resuelven, pueden conducir a la desestabilización social. Por ejemplo, las altas tasas de pobreza en comunidades marginadas pueden provocar protestas y movilizaciones sociales, cuando estas comunidades sienten que sus necesidades no son atendidas por el sistema económico dominante.

              .bg-color-1.p-3(x="55%" y="50%" numero="+")
                p Los factores estructurales también incluyen el acceso desigual a servicios básicos como la educación y la salud. Cuando ciertos grupos tienen acceso limitado a estos servicios, se perennizan ciclos de pobreza y marginación. Esta falta de oportunidades genera malestar social y puede alimentar movimientos sociales que exigen una distribución más justa de los recursos.

              .bg-color-1.p-3(x="46%" y="69%" numero="+")
                p Cuando ciertos grupos son apartados de la toma de decisiones, se produce una exclusión política que puede generar tensiones profundas en la sociedad. Esta exclusión no es solo una cuestión de derechos abstractos; afecta de manera concreta la vida de las personas. Imagina que una parte de la población no tiene voz en el sistema político, sus preocupaciones no son escuchadas ni representadas, lo que crea un fuerte descontento. En este tipo de situaciones, es fácil que surjan movimientos de resistencia, o incluso violencia, como reacción ante una estructura que parece ignorarlos. Esto es particularmente evidente en regímenes autoritarios o en sistemas políticos que marginan a ciertos grupos étnicos o religiosos, en el que la falta de participación puede ser un detonante de conflictos.

              .bg-color-1.p-3(x="55%" y="90%" numero="+")
                p En muchas zonas rurales de distintos países, las comunidades tienen acceso limitado o casi nulo, a servicios básicos como la educación o la salud. Como resultado, el ciclo de pobreza se perpetúa, cerrando cada vez más las puertas al desarrollo. En estas situaciones, no solo se siente una exclusión en términos de servicios, sino también una exclusión política, ya que estas comunidades a menudo no tienen representantes que aboguen por sus necesidades. Este sentimiento de abandono por parte del Estado, puede generar malestar social. Las personas, frustradas por esta desigualdad, podrían organizarse y protestar para exigir cambios en las políticas públicas que garanticen una mejora en sus condiciones de vida.

    h2(data-aos="fade-up")#t_3_1 Dinámicas de poder en los conflictos
    p(data-aos="fade-up") Las dinámicas de poder juegan un papel fundamental en la evolución de las diferentes tensiones. El poder se refiere a la capacidad de un individuo o grupo, para influir en las decisiones que afectan a otros. En los conflictos, las dinámicas de poder determinan qué grupos controlan los recursos y quién tiene voz en los procesos de toma de decisiones. Según Lederach (2003), la forma en que se distribuye el poder en una sociedad, tiene un impacto directo en la aparición y perpetuación de estos.

    p(data-aos="fade-up").mb-3 Estas dinámicas son:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Concentración del poder" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Concentración del poder
            p Cuando el poder está concentrado en manos de unos pocos, los grupos que carecen de poder se sienten excluidos y oprimidos. Esta concentración del poder económico, político o social, crea desequilibrios que desencadenan choques, porque los grupos marginados buscan recuperar su capacidad de decisión o acceso a los recursos.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/1.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Relaciones de dominación y subordinación" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Relaciones de dominación y subordinación
            p Las relaciones de poder, se estructuran de manera jerárquica, con un grupo dominante que ejerce control sobre los recursos y las decisiones, y un grupo subordinado que carece.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Manipulación del poder político" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Manipulación del poder político
            p Con frecuencia, las élites políticas utilizan su posición para manipular el poder en su beneficio, dejando a la sociedad en una posición de vulnerabilidad. 
            p Esto puede manifestarse desde la corrupción hasta el control de los medios de comunicación o la represión de cualquier oposición. 
            p Cuando los ciudadanos empiezan a notar que quienes ostentan el poder lo están usando para su propio beneficio, y no para el bien común, las tensiones inevitablemente aumentan.         
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/4.png', alt='')
        .col-lg
          .p-4.pe-5
            p.mb-0 #[strong Ejemplo:] imaginemos que trabajamos en una empresa donde las decisiones importantes las toma únicamente la dirección, sin consultar a los empleados. Esta falta de participación genera frustración entre los trabajadores, quienes sienten que sus opiniones no son valoradas ni consideradas. A largo plazo, este malestar puede escalar en forma de huelgas o protestas, porque los empleados demandan no solo mejores condiciones laborales, sino también mayor participación en las decisiones que afectan su día a día. Lo que inicialmente era una cuestión interna de poder, termina por convertirse en un conflicto abierto donde el diálogo y la negociación, son las claves para resolverlo.
      
    h2(data-aos="fade-up")#t_3_2 Interrelación entre factores estructurales y dinámicas de poder

    p(data-aos="fade-up").mb-5 En toda sociedad, los factores estructurales y las dinámicas de poder están profundamente entrelazados. Frecuentemente, los sistemas de poder existentes perpetúan las desigualdades que ya están arraigadas en las estructuras sociales, políticas y económicas. Cuando una élite tiene un control significativo sobre los recursos y la toma de decisiones, es mucho más difícil que se produzcan los cambios necesarios para corregir esas desigualdades. Esto crea un círculo vicioso en el que las mismas estructuras que generan la desigualdad continúan intactas, reforzando y perpetuando los conflictos estructurales.


    .bg-color-6.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") #[strong Ejemplo:] en algunos países, las élites políticas y económicas, controlan la mayor parte de los recursos y las decisiones importantes. En estas sociedades, las comunidades marginadas suelen encontrarse excluidas del proceso político y, por ende, del acceso a oportunidades económicas. Estas comunidades no solo luchan por acceder a recursos, sino que además enfrentan barreras constantes para participar en la toma de decisiones que podrían mejorar sus condiciones. A medida que esta exclusión continúa, el malestar social crece y las tensiones se vuelven recurrentes, debido a que las desigualdades que alimentan esos choques, permanecen sin cambios.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/5.png', alt='')

    h2(data-aos="fade-up") Conclusión de la unidad

    p(data-aos="fade-up").mb-5 Al llegar al final de esta primera unidad, hemos logrado sentar una base sólida para comprender los conflictos sociales y las dinámicas que los generan, tanto desde una perspectiva teórica como práctica, por medio de los ejemplos y casos expuestos. A lo largo del proceso, exploramos sobre los conceptos fundamentales de paz, diferenciando entre la paz negativa y la paz positiva (Galtung, 1996). A través de esta distinción, se ha podido reflexionar sobre cómo la ausencia de violencia no es suficiente para garantizar una sociedad justa y equitativa, sino que es necesario crear estructuras que promuevan el bienestar y la justicia social.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        .bg-color-1.p-4.h-100(data-aos="fade-right")
          .row.justify-content-start.align-items-start
            .col-auto
              figure
                img(src='@/assets/curso/tema3/6.svg', alt='')
            .col
              p.mb-0 También se ha explorado la cultura de paz y su importancia en nuestras vidas cotidianas. La paz no es solo evitar enfrentamientos, sino aprender a convivir mediante el diálogo y el respeto mutuo (UNESCO, 1995). Con esta base, será más fácil reconocer las causas de los conflictos estructurales, como la injusticia y la exclusión, y pensar en cómo abordar estos problemas en la comunidad o entorno profesional.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/7.png', alt='')

    p(data-aos="fade-up").mb-5 A lo largo de esta unidad, se ha sumergido en los distintos tipos y niveles de conflicto, desde los más internos, como los intrapersonales, hasta aquellos que afectan a toda una comunidad o sociedad. Ha aprendido que cada uno tiene sus propias particularidades y requiere diferentes enfoques para ser gestionado, algo que probablemente ya se habrá notado al analizar ejemplos concretos de nuestra vida diaria.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/8.png', alt='')
      .col-lg-8
        p(data-aos="fade-up") La exclusión política, la manipulación del poder y las tensiones en los recursos compartidos, son situaciones que, como hemos visto, alimentan las disputas estructurales. Entender estas dinámicas nos ayudará a ver los choques, no solo como eventos aislados, sino como parte de un sistema más amplio que requiere cambios profundos para generar una resolución pacífica y sostenible.

        p(data-aos="fade-up").mb-0 Además, las actividades realizadas, como el storytelling y el análisis de casos, ha brindado la oportunidad de aplicar estos conceptos de manera práctica. No solo se ha enfocado en el aspecto teórico, sino que también ha comenzado a desarrollar habilidades claves, como la escucha activa y la mediación, fundamentales para gestionar estos de manera efectiva.

    .row.material-complementario
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
  name: 'Tema3',
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

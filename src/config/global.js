export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      // {
      //   nombreRuta: 'inicio',
      //   icono: 'fas fa-home',
      //   titulo: 'Volver al inici',
      // },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 1.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '1.',
        titulo: 'Conceptos de paz y cultura de paz',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes de una cultura de paz',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '2.',
        titulo: 'Tipos o niveles de conflicto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Factores desencadenantes de los conflictos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '3.',
        titulo: 'Factores estructurales y dinámicas de poder',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Dinámicas de poder en los conflictos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Interrelación entre factores estructurales y dinámicas de poder',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '4.',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Conflicto comunitario',
      significado:
        '"Son los que surgen cuando diferentes grupos o individuos dentro de una comunidad tienen intereses contrapuestos, generalmente relacionados con el acceso a recursos o decisiones colectivas que afectan a toda la comunidad." (Lederach, 2003).',
    },
    {
      termino: 'Conflicto estructural',
      significado:
        '"Es el conflicto que surge a partir de las desigualdades sistémicas dentro de una sociedad, ya sea en términos económicos, sociales o políticos. Estas desigualdades perpetúan la injusticia y marginación de ciertos grupos." (Galtung, 1996).',
    },
    {
      termino: 'Conflicto interpersonal',
      significado:
        '"Es el enfrentamiento que se presenta entre dos o más personas debido a discrepancias en valores, creencias o expectativas, lo cual puede generar tensiones y malentendidos." (Fisher, Ury, Patton, 2011).',
    },
    {
      termino: 'Conflicto intrapersonal',
      significado:
        '"Es el conflicto que ocurre dentro de una persona, cuando sus deseos, valores o creencias están en contradicción, lo que genera tensión y estrés interno." (Galtung, 1996).',
    },
    {
      termino: 'Cultura de paz',
      significado:
        '"Conjunto de valores, actitudes y comportamientos que rechazan la violencia y previenen los conflictos, abordando sus causas para resolverlos mediante el diálogo y la negociación". (UNESCO, 1995).',
    },
    {
      termino: 'Dinámicas de poder',
      significado:
        '“Son la forma en que se distribuye y utiliza el poder dentro de una sociedad o grupo. Quienes controlan los recursos y las decisiones suelen tener más poder, mientras que otros se ven subordinados o excluidos." (Lederach, 2003).',
    },
    {
      termino: 'Exclusión social',
      significado:
        '"La exclusión social ocurre cuando ciertos grupos de la sociedad son marginados y se les niega el acceso equitativo a los recursos, derechos y oportunidades, perpetuando la desigualdad." (Martínez, 2001)',
    },
    {
      termino: 'Factores desencadenantes',
      significado:
        '"Son de los conflictos pueden ser sociales, económicos, políticos o culturales, y actúan como causas inmediatas que provocan tensiones o enfrentamientos entre los actores implicados". (Freire, 2000)',
    },
    {
      termino: 'Mediación',
      significado:
        '“Proceso de resolución de conflictos en el que un tercero neutral ayuda a las partes a alcanzar un acuerdo mediante el diálogo y la cooperación." (Fisher, Ury, Patton, 2011).',
    },
    {
      termino: 'Paz negativa',
      significado:
        '“Se refiere a la ausencia de violencia directa o física, sin abordar las causas estructurales que pueden seguir perpetuando el conflicto a nivel más profundo." (Galtung, 1996).',
    },
    {
      termino: 'Paz positiva',
      significado:
        '“se refiere a la construcción de una sociedad donde las estructuras promuevan la justicia, la igualdad y el bienestar para todos los individuos, más allá de la mera ausencia de violencia." (Galtung, 1996).',
    },
    {
      termino: 'Violencia estructural',
      significado:
        'Es la violencia que se manifiesta cuando las instituciones y estructuras sociales perpetúan la exclusión, la desigualdad y la injusticia, generando tensiones y conflictos que no se resuelven con la mera ausencia de violencia física." (Galtung, 1996).',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

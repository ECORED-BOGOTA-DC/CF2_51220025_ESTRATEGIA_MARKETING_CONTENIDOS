export default {
  global: {
    componenteFormativo: 'Optimización de imagen en redes sociales',
    descripcionCurso:
      'Un motor de búsqueda es la herramienta en línea diseñada para buscar sitios web en internet; permite revisar los resultados en su propia base de datos, los clasifica y hace una lista ordenada de estos, utilizando algoritmos de búsqueda únicos. Por lo que el uso de estas herramientas, permite optimizar una marca como propósito que tiene una empresa continuamente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '<i>Big Data</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '<i>Open source</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Herramientas de gestión y métodos de normalización de data',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Criterios de identificación de uso de algoritmos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Técnicas de uso de herramientas <i>analytics</i> (geolocalización, tempolocalización, uso de <i>software</i>, comportamiento de consumo)',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación de contenido y optimización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Factores y métodos posicionamiento SEO y SEM',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de masificación de información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Técnicas de optimización de contenidos y relevancia de datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Métrica: técnicas de identificación y barrido',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Línea editorial ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comunicación escrita',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Plan de mejoramiento',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/51220025_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Herramientas de gestión y métodos de normalización de data',
      referencia:
        'EWebik. (2021). <i>Normalización de base de datos.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NTZPG7KycBw&ab_channel=EWebik',
    },
    {
      tema: '1.2 Herramientas de gestión y métodos de normalización de data',
      referencia:
        'Díaz, D. (2021). <i>7 herramientas de administración de bases de datos que debe conocer como DBA o Sysadmin.</i>',
      tipo: 'Página web',
      link: 'https://geekflare.com/es/database-management-tools/',
    },
    {
      tema: '2.1 Factores y métodos posicionamiento SEO y SEM',
      referencia:
        'Cyberclick • Marketing Digital. (2019). <i>SEM y Google Ads - ¿Cómo funciona?</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=vVWyGjTsdxw&ab_channel=Cyberclick%E2%80%A2MarketingDigital',
    },
    {
      tema: '2.1 Factores y métodos posicionamiento SEO y SEM',
      referencia:
        'Mi Pyme Online. (2020). <i>¿Qué es SEO y Cómo funciona?</i> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=m6vikmaiS0Q&ab_channel=MiPymeOnline',
    },
    {
      tema: '2.1 Factores y métodos posicionamiento SEO y SEM',
      referencia:
        'Marketing4eCommerce. (2017). <i>Qué es el SEM: claves del Search Engine Marketing.</i> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=voxDnfOre-U&ab_channel=Marketing4eCommerce',
    },
    {
      tema: '3.2 Comunicación escrita',
      referencia: 'Zuñiga Gracia, Z. B. (2001). <i>Comunicación escrita.</i>',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000002956',
    },
  ],
  glosario: [
    {
      termino: 'Blacklinks',
      significado:
        'enlaces en sitios web distintos del suyo que remiten a una página de su sitio web. Los <i>backlinks</i> también se denominan enlaces entrantes porque representan el tráfico de otro sitio web que llega a su propio sitio. ',
    },
    {
      termino: '<i>Digg</i>',
      significado:
        'es la página principal de Internet, con los mejores artículos, vídeos y contenidos originales de los que se habla en la red en este momento.',
    },
    {
      termino: 'ETL',
      significado:
        'modelo de integración de datos que consta de tres pasos: extrae, transforma y limpia, utilizados para combinar datos de diferentes fuentes.',
    },
    {
      termino: 'Feed RSS',
      significado:
        'son las siglas en inglés de <i>Really Simple Syndication</i>, y en español se conoce como distribución realmente sencilla. Se trata de una manera sencilla de mantenerse al tanto de las noticias y la información de su interés, y no necesita de métodos convencionales para explorar y buscar información en los sitios web.<br>Recurso para la distribución de contenidos en tiempo real basado en el lenguaje XML.',
    },
    {
      termino: 'Mixxx',
      significado:
        'desarrollado por una comunidad internacional de DJs, programadores y artistas. Debido a que Mixxx es libre (como en la libertad y el precio), el <i>software</i> de código abierto, cualquiera puede participar.',
    },
    {
      termino: 'Tokenización',
      significado:
        'proceso mediante el cual se reemplazan datos confidenciales por símbolos de identificación exclusivo del usuario que retiene toda la información de los datos sin arriesgar su seguridad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balmes Zúñiga, Z. y González De López, G. (2001). <i>Comunicación Escrita.</i> Trillas Print.',
      link: '',
    },
    {
      referencia:
        'Díaz, D. (2021). <i>7 herramientas de administración de base de datos que debe conocer como DBA o Sysadmin</i>. Geekflare. ',
      link: 'https://geekflare.com/es/database-management-tools/',
    },
    {
      referencia:
        'Lahoz-Beltrá, R. (2019). <i>En las entrañas del big data: una aproximación a la estadística.</i> Emse Edapp, Prisanoticias Colecciones.',
      link: '',
    },
    {
      referencia:
        'Ríos Insúa, D. (2019). <i>Big data: conceptos, tecnologías y aplicaciones.<i> CSIC, Los Libros de la Catarata.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Margarita Rosa Triana Sánchez',
          cargo: 'Experta Temática',
          centro:
            'Región Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Experta Temática',
          centro:
            'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
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

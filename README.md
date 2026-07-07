# 📖 Revista CARAS - Landing Page

Una landing page moderna, responsiva y altamente accesible para la prestigiosa revista **CARAS** (Moda, belleza y celebridades). Este proyecto ha sido desarrollado utilizando **React**, **TypeScript** y **Styled Components**, bajo los más altos estándares de desarrollo web y accesibilidad (A11y).

---

## 🚀 Tecnologías Principales

El proyecto utiliza un stack de tecnologías modernas orientadas al rendimiento y la mantenibilidad:

*   **[React (v18.2.0)](https://react.dev/)** - Biblioteca principal para la construcción de interfaces de usuario.
*   **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para garantizar la robustez y calidad del código.
*   **[Styled Components (v6.4.2)](https://styled-components.com/)** - Estilos CSS-in-JS con alcance modular y soporte para diseño dinámico y temas.
*   **[Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Suite completa de pruebas para garantizar el comportamiento esperado del sitio.
*   **[PNPM](https://pnpm.io/)** - Gestor de paquetes eficiente para dependencias rápidas y seguras.

---

## ✨ Características y Secciones

1.  **Cabecera de Navegación Accesible (`<Header />`):** Menú responsivo con enlaces de navegación que redirigen a secciones específicas de la página. Soporte multilingüe utilizando atributos `lang` y etiquetas semánticas.
2.  **Portada de la Semana:** Sección Hero que resalta la noticia principal con carga priorizada (`loading="eager"`) y layouts adaptables.
3.  **Tendencias:** Grid interactivo que muestra las noticias más populares con categorías estilizadas (Moda, Entretenimiento, Sports).
4.  **En Profundidad:** Espacio dedicado a artículos patrocinados y lanzamientos de alta gama (Bulova, Hublot, Tiffany & Co.).
5.  **Testimonios:** Carrusel/Sección de reseñas de lectores y profesionales del sector con tarjetas interactivas adaptadas para navegación por teclado (`tabIndex={0}`).
6.  **Formulario de Suscripción:** Formulario interactivo con validación en tiempo real (nombre y correo electrónico), control de estados (éxito/error) y accesibilidad avanzada (`aria-invalid`, `aria-describedby`, alertas de estado dinámicas).
7.  **Pie de Página (`<Footer />`):** Créditos de la revista y navegación simplificada.

---

## ♿ Accesibilidad (A11y) y Rendimiento

Este sitio fue optimizado siguiendo las pautas de accesibilidad web (WCAG):
*   **Estructura Semántica:** Uso riguroso de elementos HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h2>` ocultos para lectores de pantalla).
*   **Navegación por Teclado:** Elementos interactivos enfocables y ordenados lógicamente.
*   **Optimización de Imágenes:** Atributos de dimensiones explícitas (`width` y `height`) para evitar el desplazamiento de diseño (CLS - Cumulative Layout Shift), uso de formatos optimizados (`.webp`) y carga diferida (`loading="lazy"`) para las imágenes debajo del pliegue.

---

## 📁 Estructura del Proyecto

```text
caras-landing/
├── public/                # Recursos públicos (imágenes, logos, index.html)
├── src/
│   ├── Components/        # Componentes modulares y reutilizables
│   │   ├── Footer/        # Pie de página y derechos de autor
│   │   └── HEADER/        # Cabecera, Portada, Tendencias, Testimonios y Suscripción
│   │       ├── Buttons/   # Botones globales
│   │       ├── MAIN-C/    # Layout principal de contenido
│   │       ├── NewsComponent/ # Tarjetas de noticias de tendencias
│   │       ├── ProfundidadComponent/ # Sección de artículos en profundidad
│   │       ├── Subscribe/ # Formulario de suscripción con validaciones
│   │       └── Testimonials/ # Tarjetas de reseñas
│   ├── theme/             # Configuración de Styled Components (Variables globales y reset)
│   ├── tests/             # Archivos de pruebas unitarias y de integración
│   ├── types/             # Definiciones de tipos TypeScript globales
│   ├── utils/             # Helpers y lógica de validación de entradas
│   ├── App.tsx            # Componente raíz de la aplicación
│   └── index.tsx          # Punto de entrada de React
├── package.json           # Dependencias y scripts de desarrollo
└── tsconfig.json          # Configuración de TypeScript
```

---

## 🛠️ Instalación y Configuración

### Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior) y de preferencia [pnpm](https://pnpm.io/) (o npm en su defecto).

### Pasos para iniciar localmente

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/caras-react.git
    cd caras-react/caras-landing
    ```

2.  **Instala las dependencias:**
    ```bash
    pnpm install
    # o bien
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    pnpm start
    # o bien
    npm start
    ```
    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🧪 Ejecución de Pruebas

El proyecto cuenta con cobertura de pruebas unitarias y de comportamiento para los formularios y la navegación.

Para ejecutar las pruebas en modo interactivo:
```bash
pnpm test
# o bien
npm test
```

---

## 📦 Construcción para Producción

Para compilar la aplicación optimizada para producción:
```bash
pnpm build
# o bien
npm build
```
Esto creará una carpeta `build` lista para ser desplegada en plataformas de hosting como **Vercel**, **Netlify** o **GitHub Pages**.


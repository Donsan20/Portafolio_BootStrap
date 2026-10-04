# Proyecto Portafolio Web - Estado y Pendientes

## Contexto del Proyecto
- **Estudiante**: Cristian Daniel Santos Florez.
- **Tecnologías requeridas**: HTML5, CSS3, Bootstrap 5, jQuery, FontAwesome.
- **Objetivo**: Trabajo Práctico Universitario.

## Arquitectura y Decisiones de Diseño Clave
- **Sticky Footer**: Implementado limpiamente usando Flexbox (`min-height: 100vh` en el body y `flex-grow-1` en el main), sin usar trucos de `position: absolute`.
- **Modal Reutilizable (DRY)**: En `projects.html` hay un ÚNICO bloque de código modal. jQuery lee el atributo `data-video` del botón clickeado e inyecta dinámicamente el iframe.
- **Prevención de fugas de audio**: Script de jQuery configurado para vaciar el `src` del iframe cuando el modal se cierra, evitando que el video siga sonando en segundo plano.
- **Jerarquía Visual**: La sección de Habilidades usa componentes `list-group` con íconos de FontAwesome agrupados semánticamente en lugar de listas crudas.

## Tareas Completadas ✅
- [x] Estructura base de directorios y archivos (`index.html`, `projects.html`, `css/styles.css`, `js/scripts.js`).
- [x] Implementación de Navbar responsive y Footer en ambas páginas.
- [x] Maquetación completa de `index.html` (Hero, Sobre mí, Habilidades, Experiencia Profesional).
- [x] Maquetación de grilla de proyectos y ventana modal en `projects.html`.
- [x] Lógica de interacción en jQuery para los videos.

## Tareas Pendientes ⏳ (Próximos Pasos)
- [ ] **Completar proyectos faltantes**: Definir título y descripción corta de los 2 proyectos restantes (actualmente solo está documentado "Web Talent Map").
- [ ] **Enlaces de YouTube**: Conseguir y colocar las 3 URLs de los videos de YouTube en los atributos `data-video` de los botones en `projects.html`.
- [ ] **Despliegue / Publicación**: Configurar y subir el código a un hosting gratuito (GitHub Pages o Netlify) para obtener la URL final solicitada por el profesor.

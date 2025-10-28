# Portfolio Personal - Carlos Sánchez Recio

Portfolio personal SPA (Single Page Application) desarrollado con Astro, React, TypeScript y Tailwind CSS.

## 🚀 Características

-  **SPA completa**: Navegación mediante anclas (#home, #skills, #career, #posts)
-  **Animaciones suaves**: Transiciones placenteras y efectos visuales
-  **Fondo interactivo**: Partículas que reaccionan al movimiento del ratón
-  **Carrusel infinito**: Tecnologías en movimiento constante
-  **Responsive**: Perfecto en desktop y mobile
-  **Dark mode ready**: Preparado para tema oscuro
-  **SEO optimizado**: Meta tags y estructura semántica

## 📋 Secciones

1. **Home**: Presentación personal y enlaces a redes sociales
2. **Skills**: Habilidades técnicas organizadas por categorías (Frontend, Backend, Mobile, Data, Otros)
3. **Career**: Experiencia laboral y formación académica
4. **Freelancing**: Servicios disponibles y enlace a portfolio externo

## 🛠️ Tecnologías

-  **Astro 5.14**: Framework principal
-  **React 19**: Componentes interactivos
-  **TypeScript**: Tipado estático
-  **Tailwind CSS 4**: Estilos utility-first
-  **Phosphor Icons**: Iconografía

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build
pnpm preview
```

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.mjs`:

-  **primary**: Azul característico (#2e98ff)
-  **shade**: Escala de grises

### Tecnologías

Edita `src/data/technologies.ts` para añadir o modificar las tecnologías mostradas.

### Carrera

Modifica `src/data/career.ts` con tu experiencia laboral y formación real.

### Información personal

-  Enlaces sociales: `src/utils/social.ts`
-  Navegación: `src/utils/nav.ts`
-  Contenido principal: `src/pages/index.astro`

## 🌐 Navegación SPA

La navegación funciona mediante anclas:

-  `/` → `#home`
-  `/career` → `#career`
-  `/skills` → `#skills`
-  `/posts` → `#posts` (Freelancing)

El navbar detecta automáticamente la sección visible y actualiza el estado activo.

## 📱 Responsive Design

-  **Desktop**: Navbar fijo en la parte superior
-  **Mobile**: Navbar estilo app móvil en la parte inferior

## ✨ Animaciones

-  Fade in al cargar secciones
-  Slide up en elementos
-  Float en iconos y elementos destacados
-  Carousel infinito de tecnologías
-  Partículas interactivas en el fondo

## 🎯 Próximos pasos

1. Reemplaza los datos mock de carrera con tu experiencia real
2. Añade tus propias imágenes o avatares
3. Personaliza los colores según tu marca personal
4. Añade más secciones si lo necesitas
5. Configura el deployment en GitHub Pages o tu hosting preferido

## 📝 Notas

-  El efecto de partículas puede afectar el rendimiento en dispositivos antiguos
-  Las imágenes de tecnologías se cargan desde CDN (devicons)
-  El proyecto está optimizado para SEO y rendimiento

## 🤝 Créditos

Desarrollado por Carlos Sánchez Recio (@CharlyMech)

---

¡Disfruta de tu nuevo portfolio! 🚀

# Dashboard Grabber Holds

Dashboard web profesional para presentaciones de venta de Grabber Holds. Una aplicación de página única (SPA) diseñada para mostrar información clave de la empresa en reuniones con socios e inversores.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Navegación Intuitiva**: Menú sticky con smooth scroll e indicador de sección activa
- **Modales Interactivos**: Para mostrar información detallada
- **Formulario de Contacto**: Con validación básica incorporada
- **Animaciones Sutiles**: Mejoran la experiencia del usuario
- **SEO Optimizado**: Meta tags y estructura semántica
- **Alto Rendimiento**: Carga rápida y código optimizado

## 📁 Estructura del Proyecto

```
dashboard-grabber/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principales
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── assets/             # Imágenes y recursos
│   ├── logo.png
│   ├── hero-image.jpg
│   ├── product1.jpg
│   ├── product2.jpg
│   └── product3.jpg
└── README.md           # Documentación
```

## 🎯 Secciones Principales

1. **Hero**: Pantalla completa de bienvenida
2. **Navegación**: Menú sticky con enlaces a secciones
3. **Inventario**: Detalle de activos y métricas clave
4. **Análisis Financiero**: Costos, ingresos y proyecciones
5. **Productos**: Catálogo con casos de éxito
6. **Proyección Futura**: Oportunidades de crecimiento
7. **Contacto**: Información y formulario de contacto
8. **Footer**: Enlaces adicionales y redes sociales

## 🛠 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, animaciones CSS
- **JavaScript ES6+**: Funcionalidades interactivas
- **Responsive Design**: Breakpoints en 480px, 768px, 1024px, 1200px

## 📱 Breakpoints Responsivos

- **Mobile Small**: ≤ 480px
- **Mobile Large**: ≤ 768px
- **Tablet**: ≤ 1024px
- **Desktop**: ≤ 1200px
- **Large Desktop**: > 1200px

## ⚡ Funcionalidades JavaScript

### Navegación
- Menú hamburguesa para móviles
- Smooth scroll entre secciones
- Indicador de sección activa
- Navbar con efecto sticky

### Interactividad
- Modales para información detallada
- Botón "volver arriba" con scroll suave
- Validación de formulario de contacto
- Sistema de notificaciones

### Optimizaciones
- Throttling en eventos de scroll
- Intersection Observer para animaciones
- Precarga de imágenes críticas
- Detección de dispositivos táctiles

## 🚀 Instalación y Uso

1. **Clonar o descargar** los archivos del proyecto
2. **Agregar imágenes** en la carpeta `assets/`:
   - `logo.png`: Logo de la empresa
   - `hero-image.jpg`: Imagen principal del hero
   - `product1.jpg`, `product2.jpg`, `product3.jpg`: Imágenes de productos
3. **Abrir** `index.html` en un navegador web
4. **Personalizar** el contenido según sea necesario

## 📝 Personalización

### Colores Principales
```css
:root {
    --primary-color: #e74c3c;     /* Rojo principal */
    --secondary-color: #2c3e50;   /* Azul oscuro */
    --accent-color: #3498db;      /* Azul claro */
    --background-light: #f8f9fa;  /* Fondo claro */
}
```

### Métricas Dinámicas
```javascript
// Actualizar métricas desde JavaScript
GrabberDashboard.updateMetrics([500000, 2500, 15]);
```

### Notificaciones
```javascript
// Mostrar notificaciones personalizadas
GrabberDashboard.showNotification('Mensaje personalizado', 'success');
```

## 🎨 Recursos Necesarios

Para un funcionamiento completo, necesitarás:

- **Logo**: PNG transparente, recomendado 200x60px
- **Imagen Hero**: JPG/PNG, recomendado 800x600px
- **Imágenes de Productos**: JPG/PNG, recomendado 400x300px
- **Iconos SVG**: Para redes sociales (opcional)
- **Documentos**: PDFs para inventario, catálogo, análisis financiero

## 📊 Criterios de Calidad Implementados

- ✅ Carga < 3 segundos
- ✅ Código modular y comentado
- ✅ Navegación intuitiva
- ✅ Identidad visual coherente
- ✅ Validación W3C compatible
- ✅ SEO básico implementado
- ✅ Accesibilidad mejorada

## 🔧 Mantenimiento

### Actualizar Contenido
1. **Métricas**: Modificar valores en las secciones correspondientes
2. **Productos**: Actualizar imágenes y descripciones en la sección productos
3. **Información de Contacto**: Editar datos en la sección contacto

### Optimización Continua
- Comprimir imágenes regularmente
- Minificar CSS y JS para producción
- Actualizar meta tags según necesidades SEO
- Monitorear rendimiento con herramientas como Lighthouse

## 📞 Soporte

Para dudas sobre implementación o personalización:
- Revisar el código comentado en los archivos
- Consultar la documentación en línea de las tecnologías utilizadas
- Utilizar las herramientas de desarrollador del navegador para debugging

## 📄 Licencia

Este proyecto está desarrollado específicamente para Grabber Holds y contiene código propietario adaptado a sus necesidades específicas.

---

**Versión**: 1.0  
**Última actualización**: 2024  
**Desarrollado para**: Grabber Holds  
**Tiempo de desarrollo**: 3-4 semanas según especificaciones
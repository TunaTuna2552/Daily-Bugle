# Historias de Usuario-Daily-Bugle

# HU-01: Visualización de Noticias Destacadas
* **Como** lector de noticias,
* **Quiero** ver una sección principal con la noticia del momento al ingresar al sitio,
* **Para** enterarme rápidamente del hecho más relevante.

* **Criterios de Aceptación**:
1. La noticia principal debe destacar con un tamaño de letra e imagen mayor según la jerarquía visual.
2. Debe incluir título, resumen corto y fecha de publicación.

# HU-02: Secciones Temáticas en la Página de Inicio
* **Como** usuario
* **Quiero** ver las noticias organizadas por categorías (Nacional, Deportes, Tecnología, etc.)
* **Para** acceder directamente a los temas de mi interés

* **Criterios de Aceptación**:
1. Menú de navegación accesible en la parte superior.
2. Cada categoría debe mostrar un bloque con sus noticias más recientes.

# HU-03: Tarjetas de Noticia Secundarias
* **Como** lector
* **Quiero** ver un listado en cuadrícula o lista de noticias secundarias
* **Para** explorar variedad de titulares sin saturar la pantalla

* **Criterios de Aceptación**:
1. Cada tarjeta debe incluir imagen miniatura, título y categoría.
2. Mantener contraste adecuado de texto y fondo para legibilidad.

# HU-04: Encabezado y Navegación Fija
* **Como** usuario
* **Quiero** tener acceso constante al menú de navegación mientras navego en el inicio
* **Para** cambiar de sección rápidamente sin scroll excesivo

* **Criterios de Aceptación**:
1. El header debe contener el logo de Daily-Bugle y enlaces a las categorías principales.
2. El logo redirige siempre al inicio (index.html).

# HU-05: Pie de Página Informativo
* **Como** visitante
* **Quiero** ver un pie de página con información del sitio y enlaces legales
* **Para** conocer más sobre el medio informativo

* **Criterios de Aceptación**:
1. Incluir derechos de autor, enlaces a redes sociales y mapa básico del sitio.

# HU-06: Indicador de Fecha y Hora del Último Momento
* **Como** lector recurrente
* **Quiero** ver la fecha actual y la hora de última actualización en el inicio
* **Para saber** qué tan reciente es la información que estoy consumiendo
  
* **Criterios de Aceptación**:
 1. Ubicado en el área superior del encabezado.

# HU-07: Registro de Nuevos Usuarios
* **Como** nuevo usuario
* **Quiero** crear una cuenta ingresando mis datos básicos
* **Para** formar parte de la comunidad de Daily-Bugle
  
* **Criterios de Aceptación**:
1. Formulario con campos: Nombre, Correo y Contraseña.
2. Validación básica HTML5 para correo válido y campos obligatorios.

#HU-08: Inicio de Sesión de Usuarios
* **Como** usuario registrado
* **Quiero** iniciar sesión con mis credenciales
* **Para** acceder a funciones personalizadas

* **Criterios de Aceptación**:
1. Formulario de login accesible desde el encabezado principal.
2. Botón de envío que valide la presencia de datos.

HU-09: Verificación de Datos de Registro
* **Como** sistema
* **Quiero** verificar que los datos ingresados cumplan con las reglas mínimas de formato
* **Para** asegurar la calidad de las cuentas registradas

Criterios de Aceptación:
1. Mostrar mensaje de error visual en CSS si la contraseña no cumple la longitud mínima o el correo es inválido.

#HU-10: Cierre de Sesión
* **Como** usuario autenticado
* **Quiero** poder cerrar sesión en cualquier momento
* **Para** proteger mi cuenta en dispositivos compartidos

* **Criterios de Aceptación**:
1. Botón visible "Cerrar sesión" en el menú superior cuando la sesión está activa.

# HU-11: Recuperación de Acceso
* **Como** usuario que olvidó su contraseña
* **Quiero** ver un formulario para solicitar restablecimiento
* **Para** iniciar el proceso de recuperación

* **Criterios de Aceptación**:
1. Enlace "¿Olvidaste tu contraseña?" en el módulo de Login.
2. Formulario flotante o página dedicada para ingresar el correo.

# HU-12: Buscador Interno de Noticias
* **Como** lector
* **Quiero** contar con una barra de búsqueda de palabras clave
* **Para** encontrar rápidamente noticias antiguas y recientes

* **Criterios de Aceptación**:
1. Barra de búsqueda visible en la cabecera o sección principal del módulo biblioteca.
2. Botón o tecla Enter para ejecutar la acción de búsqueda.

# HU-13: Filtro de Noticias por Fecha
* **Como** investigador o lector
* **Quiero** filtrar la biblioteca de noticias por rango de fechas (recientes vs. antiguas)
* **Para** solucionar la dificultad de encontrar hechos pasados

* **Criterios de Aceptación**:
1. Opciones de ordenamiento: "Más recientes primero", "Más antiguas primero".

# HU-14: Filtro de Noticias por Categoría en Biblioteca
* **Como** usuario
* **Quiero** aplicar filtros por categoría dentro de la biblioteca
* **Para** reducir el volumen de artículos mostrados a mi área de interés

* **Criterios de Aceptación**:
1. Casillas de selección (checkboxes) o menú desplegable con las secciones del periódico.

# HU-15: Vista Detallada del Artículo/Noticia
* **Como** lector
* **Quiero** hacer clic en una noticia y abrir su contenido completo
* **Para** leer el desarrollo, imágenes asociadas y fecha exacta de publicación

* **Criterios de Aceptación**:
1. Titular, autor, fecha, imagen representativa y cuerpo del texto claramente estructurado con espacio blanco adecuado.

# HU-16: Paginación en la Biblioteca de Noticias
* **Como** usuario
* **Quiero** navegar por páginas numeradas en la biblioteca
* **Para** explorar el archivo histórico de artículos sin tiempos de carga excesivos

* **Criterios de Aceptación**:
1. Controles "Anterior", "Siguiente" y números de página al final de la lista.

# HU-17: Galería Multimedia en Artículos
* **Como** lector
* **Quiero** ver imágenes complementarias dentro de las noticias completas
* **Para** tener una experiencia informativa más dinámica

* **Criterios de Aceptación**:
1. Disposición gráfica adaptada al texto para no romper la lectura.

# HU-18: Adaptación Móvil del Menú de Navegación
* **Como** usuario que accede desde un smartphone
* **Quiero** un menú colapsable (tipo hamburguesa)
* **Para** navegar por las secciones sin que el menú ocupe toda la pantalla

* **Criterios de Aceptación**:
1. Implementado exclusivamente con HTML y CSS.
2. Funcional en pantallas menores a 768px.

# HU-19: Layout Responsive para Pantallas Móviles
* **Como** lector móvil
* **Quiero** que las columnas de noticias se reordenen verticalmente en mi teléfono
* **Para** leer cómodamente sin necesidad de hacer zoom ni scroll horizontal

* **Criterios de Aceptación**:
1. Rediseño mediante Media Queries en CSS para vistas menores a 480px y 768px.
2. Las imágenes deben ajustarse al 100% del ancho del contenedor.

# HU-20: Modo de Lectura Cómodo (Legibilidad)
* **Como** lector de noticias
* **Quiero** que la tipografía y el contraste del sitio estén optimizados
* **Para** evitar la fatiga visual durante lecturas prolongadas

* **Criterios de Aceptación**:
1. Tamaño mínimo de fuente de 16px para cuerpo de texto.
2. Contraste mínimo que cumpla con los estándares visuales sobre fondos claros.









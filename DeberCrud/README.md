Angular-Django Fullstack Project

Este proyecto combina un frontend en Angular con un backend en Django para manejar la gestión de productos y autenticación de usuarios.

Tabla de Contenidos

Descripción

Características

Tecnologías Utilizadas

Instalación y Configuración

Backend (Django)

Frontend (Angular)

Uso

Contribuciones

Licencia

Descripción

Este proyecto permite gestionar productos mediante un CRUD (Crear, Leer, Actualizar, Eliminar) y cuenta con un sistema de autenticación de usuarios. El frontend está construido en Angular y el backend en Django, ofreciendo una experiencia completa para los desarrolladores y usuarios.

Características

Sistema de autenticación de usuarios con JWT.

Gestión de productos con un CRUD completo.

Interceptores HTTP para manejar tokens de autenticación.

Uso de rutas protegidas para garantizar la seguridad.

Diseño moderno utilizando Tailwind CSS.

Tecnologías Utilizadas

Frontend: Angular, Tailwind CSS

Backend: Django, Django REST Framework (DRF)

Base de Datos: SQLite (puede ser sustituido por PostgreSQL, MySQL, etc.)

Instalación y Configuración

Backend (Django)

Clonar el repositorio:

git clone https://github.com/usuario/repo.git
cd repo/backend

Crear un entorno virtual:

python -m venv env
source env/bin/activate  # En Windows: env\Scripts\activate

Instalar las dependencias:

pip install -r requirements.txt

Realizar las migraciones y correr el servidor:

python manage.py makemigrations
python manage.py migrate
python manage.py runserver

Configurar las variables de entorno para las claves secretas y la conexión a la base de datos en un archivo .env.

Frontend (Angular)

Ir al directorio del frontend:

cd repo/frontend

Instalar las dependencias:

npm install

Ejecutar la aplicación:

ng serve

Abrir en el navegador: http://localhost:4200

Uso

Acceder al sistema de login en la ruta /login.

Iniciar sesión con las credenciales registradas.

Gestionar productos a través de la interfaz de usuario.

Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, abre un issue o envía un pull request.

Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver más detalles en el archivo LICENSE.


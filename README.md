# Proyecto de Autenticación con React

Este proyecto es una aplicación de autenticación desarrollada con React + Vite.

Permite a los usuarios registrarse e iniciar sesión con un token, una vez en el panel el usuario puede editar su perfil y sus datos. La aplicación se conecta a una API pública de registro y autenticación de usuarios para gestionar las operaciones de autenticación.

## Tecnologías y dependencias utilizadas

- React
- Axios
- React Router
- React Toastify

## Funcionalidades

### 1. Inicio de Sesión

- Los usuarios pueden iniciar sesión con su nombre de usuario y contraseña.
- Se valida la entrada del usuario y se muestran mensajes de error si las credenciales son incorrectas.
- Se realiza una solicitud a la API de autenticación para obtener un token de acceso.

### 2. Registro de Usuario

- Los usuarios pueden registrarse proporcionando su nombre de usuario, nombre, apellido, correo electrónico y contraseña.
- Se validan los campos del formulario de registro así como la confirmación de la contraseña, además se muestran mensajes de error si los datos proporcionados son inválidos.
- Se realiza una solicitud a la API de registro de usuarios para crear una nueva cuenta.

### 3. Panel de Usuario

- Después de iniciar sesión, los usuarios pueden ver su perfil de usuario.
- Tienen la opción de editar su nombre, apellido, correo electrónico y contraseña.
- Se realizan validaciones en el formulario de edición para garantizar que todos los campos estén completos antes de guardar los cambios.
- Se realiza una solicitud a la API de actualización de usuarios para guardar los cambios en el perfil.

## Instalación y Uso

1. Crea un clone de este repositorio en tu máquina local.

2. Abre una terminal en la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.

3. Ejecuta `npm run dev` para iniciar la aplicación en modo de desarrollo.

4. La aplicación estará disponible en `http://localhost:5173`.

¡Y eso es todo! Ahora puedes explorar las funcionalidades de la aplicación y realizar pruebas.

## Créditos

Este proyecto fue creado por Esac-86 como respuesta a un reto Frontend.

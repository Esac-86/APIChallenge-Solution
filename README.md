
# APIChallenge - Solution



**Bienvenid@**

Este repositorio está pensado para ser utilizado como una plantilla para dar solución al reto, que se describe a continuación.

## Objetivo

El participante podrá mostrar sus habilidades básicas de programación para resolver un caso práctico de uso de una API en una aplicación web.

## Instrucciones

1. Crea un fork de este repositorio para que puedas trabajar en él.
2. Escribe tu código, pero no borres ni modifiques ningún archivo que forme parte de este repo.
3. Asegurate que tu solución cumpla con los requerimientos y que esté adecuadamente documentada. Esto quiere decir que debe contener las instrucciones para poder replicarla
4. Comparte con nosotros el repositorio con tu solución.

## Requerimientos

Deberás desarrollar una aplicación web que se comunique con una API de autenticación, creación, edición y eliminación de usuarios. El endpoint es [authchallenge-202404.up.railway.app](authchallenge-202404.up.railway.app). Puedes entrar a la [documentación](authchallenge-202404.up.railway.app/redoc) o al [swagger](authchallenge-202404.up.railway.app/docs) para saber como comunicarte con la API.



Cada etapa de la aplicación tendrá un puntaje diferente. No es necesario que termines todo, lo importante es que se haga de la forma más robusta posible. Las etapas son:

* **Creación de usuarios**: La aplicación deberá contar con un formulario que permita crear un nuevo usuario. Lo que se espera es que:

    * Verifique que los campos son del tipo esperado (texto, contraseña, correo). Si no lo son, deberé marcar un error para que el usuario pueda corregirlo. Las restricciones de las contraseñas deben ser: mínimo 8 caracteres, una mayúscula, un número y un símbolo (._?-/) *(10pts)*
    * Haga una doble verificación de la contraseña, es decir, que el usuario deba escribirla dos veces y que sea la misma. *(10pts)*
    * Al enviar el formulario deberá avisar de el éxito o fracaso de la operación. *(5pts)*

* **Inicio de sesión**: La aplicación deberá poder dejar al usuario recién creado iniciar sesión. El comportamiento esperado es que :

    * Se use la imagen `imgs/fake-logo.jpeg` en el formulatio *(5pts)*
    * Verifique que los campos son del tipo esperado *(10pts)*
    * Use el correo para la autenticación *(5pts)*
    * Al enviar el formulario dé aviso de los posibles errores al iniciar sesión, en caso de haber. *(10pts)*
    * Al tener un inicio válido, redirija a un dashboard del usuario con sus datos. *(20pts)*

* **Edición de datos del usuario**: La aplicación deberá tener una vista que permita al usuario cambiar datos como: nombre, apellido, correo y contraseña. El comportamiento esperado es que:

    * Exista un formulario para el cambio de los datos. Es decir, que desde un solo formulario se pueda cambiar cualquier campo. *(5pts)*
    *  Verifique que los nuevos datos cumplan con el tipo de campo (texto, email o contraseña). *(5pts)*
    * Avise del éxito o fracaso de la operación al enviar el formulario. *(5pts)*


## Detalles finales

En cuestiones de diseño, es espera que sea minimalista y se deja en manos del participante la selección de colores o dimensiones.

Se espera que la aplicación sea responsiva a diferentes tamaños de pantalla.

Toda comunicación será por medio del correo electrónico por el que te hicimos llegar este challenge. 

Se requiere de una llave API, la cual la podrás encontrar en el correo que te mandamos.

Cualquier duda o comentario, ya sabes, por el mismo correo.

**¡¡¡Te deseamos el mayor de los éxitos!!!**



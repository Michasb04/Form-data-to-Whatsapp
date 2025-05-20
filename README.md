# Formulario de Contacto con Envío a WhatsApp

Este proyecto es un formulario web de contacto que permite a los usuarios enviar su nombre, correo electrónico y mensaje directamente a un número de WhatsApp. Utiliza **HTML**, **CSS**, **JavaScript** y **Required** para mostrar mensajes de validación.

## Funcionalidades

- ✅ Formulario responsive con campos de:
  - Nombre
  - Correo electrónico
  - Mensaje

- ✅ Validación de campos con usando **Required**:
  - Si algún campo está vacío, se muestra una alerta amigable antes de permitir el envío.

- ✅ Envío de datos a WhatsApp:
  - Los datos del formulario se formatean como texto y se abren en una nueva pestaña de WhatsApp con el mensaje prellenado.
  - Se usa `https://wa.me/` para construir la URL con el número del destinatario y los datos.

- ✅ Estilo visual moderno:
  - Fondo con imagen borrosa (blur) usando `filter: blur()` y un `div.background`.
  - Diseño responsivo y atractivo con colores personalizados desde `:root`.

## Estructura del Proyecto

📁 proyecto/
├── index.html
├── styles.css
├── js/
│ └── sendMessage.js
├── img/
│ └── anime01.webp

## Cómo usar

1. Clona el repositorio o descarga los archivos.
2. Reemplaza el número de WhatsApp en `sendMessage.js` por el tuyo:
   ```js
   let phoneNumber = "+573212948732";

![image](https://github.com/user-attachments/assets/cccad54d-5978-4d4d-a479-4068f9176bb5)

![image](https://github.com/user-attachments/assets/08019bc8-e9de-4133-b553-f94c55062b40)




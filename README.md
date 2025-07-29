# 🏥 Calculadora de Infusión Médica PWA

Aplicación web progresiva (PWA) para cálculo de infusiones médicas con notificaciones persistentes y funcionamiento offline.

## ✨ Características

- 📱 **Instalable como app nativa** en Android/iOS
- 🔔 **Notificaciones persistentes** incluso con navegador cerrado
- 📳 **Vibración optimizada** para dispositivos Android
- 🔊 **Alarmas sonoras** similares a equipos médicos
- 🌐 **Funciona 100% offline** una vez instalada
- ⏰ **Alertas de tiempo restante** (5 min y 1 min)
- 🎯 **Interfaz optimizada** para dispositivos móviles

## 🚀 Cómo Desplegar GRATIS

### Opción 1: GitHub Pages (Recomendado)

1. **Crear cuenta en GitHub** (gratis): https://github.com
2. **Crear nuevo repositorio**:
   - Nombre: `calculadora-infusion`
   - ✅ Público
   - ✅ Add README file
3. **Subir archivos**:
   - Arrastra todos los archivos a GitHub
   - O usa GitHub Desktop
4. **Activar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save
5. **Tu app estará en**: `https://tu-usuario.github.io/calculadora-infusion`

### Opción 2: Netlify

1. **Ir a** https://netlify.com
2. **Drag & Drop** la carpeta completa
3. **¡Listo!** - URL automática generada

### Opción 3: Vercel

1. **Ir a** https://vercel.com
2. **Import Project** desde GitHub
3. **Deploy** automático

## 📱 Cómo Instalar la App

### En Android:
1. Abrir la URL en Chrome
2. Tocar el botón "📱 Instalar App" que aparece
3. O ir a Menú → "Agregar a pantalla de inicio"
4. ✅ La app aparecerá como cualquier app nativa

### En iPhone:
1. Abrir la URL en Safari
2. Tocar el botón "Compartir" 📤
3. "Agregar a pantalla de inicio"
4. ✅ Icono agregado al home screen

## 🔔 Configurar Notificaciones

1. **Primera vez**: La app pedirá permisos automáticamente
2. **Si no aparece**: Tocar el 🔔 en la esquina superior derecha
3. **Permitir notificaciones** en el navegador
4. **¡Listo!** - Recibirás alertas incluso con la app cerrada

## 📂 Archivos del Proyecto

```
📁 Calculadora-Infusion/
├── 📄 infusion_calculadora.html  # App principal
├── 📄 manifest.json              # Configuración PWA
├── 📄 sw.js                      # Service Worker
├── 🖼️ icon-192.png              # Icono 192x192
├── 🖼️ icon-512.png              # Icono 512x512
└── 📄 README.md                  # Este archivo
```

## 🌍 Compartir con Otros

### ✅ Totalmente GRATIS para uso no comercial:

1. **Comparte la URL** directamente
2. **Código QR**: Genera uno con la URL
3. **Redes sociales**: Comparte el enlace
4. **WhatsApp/Telegram**: Envía la URL
5. **Email**: Incluye instrucciones de instalación

### 📋 Mensaje para compartir:

```
🏥 Calculadora de Infusión Médica

📱 App gratuita para cálculo de infusiones
✅ Funciona offline
🔔 Notificaciones persistentes
📳 Optimizada para móviles

🔗 Instalar: [TU-URL-AQUI]

Instrucciones:
1. Abrir enlace en el móvil
2. Tocar "Instalar App"
3. ¡Listo para usar!
```

## 🛠️ Personalización

### Cambiar colores:
- Editar `manifest.json` → `theme_color` y `background_color`
- Modificar CSS en `infusion_calculadora.html`

### Cambiar iconos:
- Reemplazar `icon-192.png` y `icon-512.png`
- Mantener las dimensiones exactas

### Agregar funciones:
- Editar `infusion_calculadora.html`
- Actualizar `sw.js` si es necesario

## 🔧 Solución de Problemas

### "No se puede instalar":
- ✅ Verificar que sea HTTPS
- ✅ Comprobar que `manifest.json` sea válido
- ✅ Iconos deben existir y ser accesibles

### "No llegan notificaciones":
- ✅ Verificar permisos del navegador
- ✅ Comprobar que el Service Worker esté registrado
- ✅ En Android: verificar configuración de batería

### "No funciona offline":
- ✅ Instalar como PWA (no solo marcador)
- ✅ Verificar que el Service Worker esté activo
- ✅ Abrir la app al menos una vez online

## 📞 Soporte

Esta es una aplicación de código abierto para uso médico no comercial.
Puedes modificarla y distribuirla libremente.

## ⚖️ Licencia

Uso libre para fines no comerciales.
Para uso comercial, contactar al desarrollador.

---

**¡Disfruta tu nueva app médica profesional! 🏥📱**
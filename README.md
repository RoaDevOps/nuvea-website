# NUVÉA — Web v2

Esta versión está organizada para que cambiar las imágenes sea muy fácil.

## 📁 Estructura

```text
NUVEA_web_v2/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo/
    │   └── README.txt
    └── images/
        ├── hero/
        │   └── hero-principal.svg
        ├── servicios/
        │   ├── cejas.svg
        │   ├── labios.svg
        │   ├── retoques.svg
        │   └── valoracion.svg
        ├── resultados/
        │   ├── cejas-antes-despues-01.svg
        │   ├── cejas-antes-despues-02.svg
        │   ├── labios-antes-despues-01.svg
        │   └── labios-antes-despues-02.svg
        ├── fundadora/
        │   └── rogeidys.svg
        └── testimonios/
            ├── clienta-01.svg
            └── clienta-02.svg
```

## 🖼️ Cómo cambiar imágenes

Puedes reemplazar los SVG de ejemplo por fotografías reales. Lo más sencillo es conservar los mismos nombres y actualizar la extensión en `index.html` si usas JPG/WEBP.

Recomendación:
- Hero: `1600×1000` aprox.
- Servicios: `900×700` aprox.
- Resultados: `1200×900` aprox.
- Rogeidys: retrato vertical.
- Testimonios: fotos cuadradas.

## 📱 Responsive

La página está diseñada mobile-first y tiene ajustes para:
- celulares pequeños
- celulares grandes
- tablets
- laptops
- pantallas grandes

En móvil aparece un menú desplegable y las tarjetas pasan a una columna.

## ⚙️ Antes de publicar

1. Cambiar `52XXXXXXXXXX` en `script.js`.
2. Reemplazar las imágenes de ejemplo.
3. Agregar logo real en `assets/logo/`.
4. Agregar Instagram/Facebook/TikTok reales.
5. Confirmar ubicación.
6. Reemplazar testimonios de ejemplo.
7. Revisar textos, precios, políticas y preguntas frecuentes.

## Tecnología

HTML + CSS + JavaScript vanilla. No necesita Node.js ni base de datos para esta primera versión.

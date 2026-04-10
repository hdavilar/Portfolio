/**
 * Carga de forma dinámica de imágenes.
 * 
 * @param ruta (string) Ruta relativa de la carpeta de components con la imagen a cargar.
 * @returns Un objeto con las rutas de las imágenes, donde la clave es el nombre del archivo sin extensión.
 */
export function importarImgs(ruta) {
  const contexto = require.context('../components', true, /\.(png|jpe?g|svg|webp)$/);

  const iconos = {};
  //console.log(contexto.keys());
  contexto.keys().filter(key => key.includes(ruta)).forEach((key) => {
    if (!key.includes("/img/")) return;
    //console.log(key);
    const nombre = key.split("/").pop().replace(/\.(png|jpe?g|svg|webp)$/, "").toLowerCase();
    //console.log(nombre);
    const modulo = contexto(key);
    //console.log(modulo);

    iconos[nombre] = modulo;
    //console.log(iconos[nombre]);
  });
  //console.log(iconos)
  return iconos;
}
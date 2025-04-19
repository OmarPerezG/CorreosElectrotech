function accederIONOS(button) {
  const correo = button.closest('tr').querySelector('.correo').textContent;

  // Copiar el correo al portapapeles sin mostrar alerta
  navigator.clipboard.writeText(correo).then(() => {
    // Abre IONOS sin alertas
    window.open("https://id.ionos.mx/identifier?action=logout", "_blank", "noopener");
  }).catch(err => {
    // Si falla copiar (por permisos del navegador), aún abre el sitio
    console.error("Error copiando el correo:", err);
    window.open("https://id.ionos.mx/identifier?action=logout", "_blank", "noopener");
  });
}

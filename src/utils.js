export function parseDate(utcDate){
    const colombianOffset = 0; // Colombia está en UTC-5
    const localDate = new Date(utcDate.getTime() + colombianOffset * 60 * 1000);
  
    // Formatear la fecha a un formato legible
    const options = { 
    timeZone: 'America/Bogota', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
    };
    const formatter = new Intl.DateTimeFormat('es-CO', options);
  
    return formatter.format(localDate);
}
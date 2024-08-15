export function formatDate(date) {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, '0');//"14"
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');//"08" (months are 0-indexed)
    const year = dateObject.getFullYear();//2024
    return (`${day}/${month}/${year}`);
}
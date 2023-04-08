export function formatDate(date: string) {
  return new Intl.DateTimeFormat("th", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date(date));
}

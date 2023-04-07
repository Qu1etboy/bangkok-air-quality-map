export function getColor(text: string) {
  switch (text) {
    case "คุณภาพดี":
      return "text-green-500";
    case "ปานกลาง":
      return "text-yellow-500";
    case "เริ่มมีผลกระทบต่อสุขภาพ":
      return "text-orange-500";
    case "มีผลกระทบต่อสุขภาพ":
      return "text-red-500";
    default:
      return "text-blue-500";
  }
}

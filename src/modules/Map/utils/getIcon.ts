import {
  blackIcon,
  blueIcon,
  greenIcon,
  orangeIcon,
  redIcon,
  yellowIcon,
} from "../components/Icons";

export function getIcon(text: string) {
  switch (text) {
    case "คุณภาพดีมาก":
      return blueIcon;
    case "คุณภาพดี":
      return greenIcon;
    case "ปานกลาง":
      return yellowIcon;
    case "เริ่มมีผลกระทบต่อสุขภาพ":
      return orangeIcon;
    case "มีผลกระทบต่อสุขภาพ":
      return redIcon;
    default:
      return blackIcon;
  }
}

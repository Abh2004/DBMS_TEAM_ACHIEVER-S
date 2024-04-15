import Button from "./Button.jsx"
import Paper from "./Paper.jsx"
import Menu from "./Menu.jsx"
import Avatar from "./Avatar.jsx"
import TextField from "./TextField.jsx"

export default function componentOverrides(theme) {
  return Object.assign(
    Button(theme),
    Paper(theme),
    Menu(theme),
    Avatar(theme),
    TextField(theme)
  )
}
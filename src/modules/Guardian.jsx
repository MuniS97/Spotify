


export default function Guardian() {
  if (!localStorage.getItem("token")) {
    location.assign("/login")
    return;
  }
}

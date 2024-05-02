import { Audio } from "react-loader-spinner";

export default function AudioSpinner() {
  return (
    <Audio
      height="25"
      width="27"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}

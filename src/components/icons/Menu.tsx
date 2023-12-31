import { SVGProps } from "react";

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M4 7q-.425 0-.712-.288T3 6q0-.425.288-.712T4 5h16q.425 0 .713.288T21 6q0 .425-.288.713T20 7H4Zm0 12q-.425 0-.712-.288T3 18q0-.425.288-.712T4 17h16q.425 0 .713.288T21 18q0 .425-.288.713T20 19H4Zm0-6q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Z"
      ></path>
    </svg>
  );
}

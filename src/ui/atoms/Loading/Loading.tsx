import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function Loading(props: Props) {
  return <div {...props}>Loading...</div>;
}

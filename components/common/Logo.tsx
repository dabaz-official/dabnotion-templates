import Image from "next/image";
import * as React from "react"

export function Logo({className}: {
  className: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="DabNotion"
      className={className}
      height={1024}
      width={1024}
    />
  )
}

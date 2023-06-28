import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";
// este estilo se pone fuera para que no se genere una y
// otra vez cada vez que el componente se renderice, se
// pone fuera para que no este siendo re-procesado xq siempre
// es el mismo objeto
const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string,
  link: string,
}

export const ActiveLink: FC<Props> = ({ text, link }) => {
  //custom hook useRouter . Tiene una propiedad que se llama aspath que puede servir
  // para saber cual es el path en donde me encuentro, entonces lo vamos a desestructurar
  const { asPath } = useRouter();
  return (
    <Link style={asPath === link ? style : undefined} href={link}>
      {text}
    </Link>
  );
};

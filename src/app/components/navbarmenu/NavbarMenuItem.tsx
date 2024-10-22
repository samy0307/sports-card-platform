import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface NavMenuProps {
  title: string;
  href: Url;
  icon: string;
}

export default function NavmenuItem(props: NavMenuProps) {
  return (
    <Link href={props.href} className="grid justify-items-center">
      <div>{props.title}</div>
      <img src={props.icon} alt={props.title} className="h-10 py-2" />
    </Link>
  );
}

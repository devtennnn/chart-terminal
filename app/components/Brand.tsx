import Link from "next/link";
import Image from "next/image";

export default function Brand({ size = 30 }: { size?: number }) {
  return (
    <Link href="/" className="brand" aria-label="AROMVIEW home">
      <Image src="/logo.png" width={size} height={size} alt="" priority />
      <span>AROMVIEW</span>
    </Link>
  );
}

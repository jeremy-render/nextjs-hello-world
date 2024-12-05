import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        About
      </Link>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log("Environment Variables: ${process.env}");
          `,
        }}
      />
    </div>
  );
}

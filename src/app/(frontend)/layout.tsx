import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/scroll">Scroll</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <main className="flex grow flex-col">{children}</main>
    </>
  );
}

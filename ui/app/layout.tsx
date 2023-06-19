import './assets/styles/styles.scss';
import {ReactNode} from "react";
import {Providers} from "@/app/utils/providers";

export const metadata = {
  title: 'UI Title',
  description: 'My random description.',
}

export default function RootLayout({children,}: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className="">
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  )
}

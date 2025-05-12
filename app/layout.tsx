import {ReactNode} from "react"
import Layout from "components/Layout"

export default function RootLayout({children}: {children: ReactNode}) {
    return (
      <html lang="en">
        <Layout>{children}</Layout>
      </html>
    )
  }
import "../app/global.css"
import {ModeProvider}from "../app/contexts/ModeContext"

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="">
       < ModeProvider>
          {children}
       </ModeProvider>
          
          </body>
      </html>
    )
  }
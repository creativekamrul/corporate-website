import Header from "./(components)/miscs/Header";
import "../styles/globals.css"
import Footer from "./(components)/miscs/Footer";
export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head />
        <body style={{margin: "0", background: "fff", fontFamily: "Poppins"}}>
          <Header />
        {children}
          <Footer />
        </body>
      </html>
    );
  }
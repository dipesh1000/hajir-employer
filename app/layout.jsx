import { Inter } from "next/font/google";
import "./globals.css";
// import { ToastContainer } from 'react-toastify';
import AuthProvider, { useAuth } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          {/* <ToastContainer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}

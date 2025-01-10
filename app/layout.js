// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "My portfolio",
//   description: "My portfolio",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import { Lato } from "next/font/google"; // Import Lato font
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],  // Specify the subsets you need
  weight: ["400", "700"],  // Specify the font weights you want to use
});

export const metadata = {
  title: "My portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body> {/* Apply Lato font */}
    </html>
  );
}

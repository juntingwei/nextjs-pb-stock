import 'app/global.css'
import Navbar from './Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <body>
        <Navbar/>
        {children}
      </body>
  );
}

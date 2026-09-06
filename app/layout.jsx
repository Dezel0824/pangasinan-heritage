import './globals.css'; import MainLayout from '../components/templates/MainLayout';
export const metadata={title:{default:'Pangasinan Heritage Digital Showcase | Discover Pangasinan',template:'%s | Pangasinan Heritage'},description:'Explore iconic destinations, cultural treasures, and natural wonders across Pangasinan.'};
export default function RootLayout({children}){return <html lang="en"><body><MainLayout>{children}</MainLayout></body></html>}

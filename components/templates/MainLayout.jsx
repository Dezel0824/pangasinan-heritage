import HeaderNavigation from '../organisms/HeaderNavigation'; import Footer from '../organisms/Footer';
export default function MainLayout({children}){return <><HeaderNavigation/><main>{children}</main><Footer/></>}

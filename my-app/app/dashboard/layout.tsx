import SideNav from '../ui/dashboard/sidenav';
import Navbar from '../ui/dashboard/navbar';
import Home from './Home/page';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    <Home/>
    </>
  );
}

// Компонент <Layout />получает childrenсвойство. Этот дочерний элемент может быть страницей или другим макетом
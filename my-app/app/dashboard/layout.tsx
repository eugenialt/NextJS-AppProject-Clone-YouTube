
// export default function Template({ children }: { children: React.ReactNode }) {
//   return <div>{children}</div>
// }
// Компонент <Layout />получает childrenсвойство. Этот дочерний элемент может быть страницей или другим макетом


import './dashboard.css'
export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
    {props.children}
    
    </>
  )
} 
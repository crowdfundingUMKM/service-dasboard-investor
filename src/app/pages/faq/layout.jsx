import dynamic from 'next/dynamic';

const SidebarDynamic = dynamic(() => import('@/components/Sidebar'), {
  ssr: true // Ini akan memuat komponen hanya di sisi klien     
});

export default function FaqLayout({ children }) {
  return (
    <>
    
      {children}
    </>
  );
}

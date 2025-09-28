interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <section className="bg-white p-6">
    <h2 className="text-[32px] font-bold text-gray-800 mb-4">{title}</h2>
    {children}
  </section>
);

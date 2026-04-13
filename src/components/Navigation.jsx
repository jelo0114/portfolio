import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = navItems.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(navItems[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const navOffset = 76;
    const y = section.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="text-lg font-bold tracking-tight text-brandDark"
        >
          Angelo CU
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-brandBlue text-brandBlue'
                      : 'border-transparent text-brandDark hover:text-brandGreen'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="rounded-md bg-brandBlue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brandGreen"
          >
            Contact Me
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                      isActive ? 'text-brandBlue' : 'text-brandDark hover:text-brandGreen'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="mt-3 w-full rounded-md bg-brandBlue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brandGreen"
          >
            Resume / Contact
          </button>
        </div>
      )}
    </header>
  );
}

export default Navigation;

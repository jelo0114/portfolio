const quickLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <h3 className="text-lg font-semibold text-brandDark">Angelo CU</h3>
        <p className="text-sm text-slate-600">Building modern, reliable digital products.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-brandDark transition-colors hover:text-brandGreen"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500">hello@example.com | +63 900 000 0000</p>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Angelo CU. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

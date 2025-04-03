import logo from '../../public/logo.png';

export default function Header() {
  return (
    <header className="bg-white shadow-sm h-20 flex items-center gap-2 justify-between p-4">
      <img src={logo} alt="INDEC" className="h-12 w-auto xs:h-14 md:h-16" />
    </header>
  );
}

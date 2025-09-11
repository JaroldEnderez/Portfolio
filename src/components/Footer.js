export default function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <p className="text-right">jaroldenderez69@gmail.com</p>
    </footer>
  );
}

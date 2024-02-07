const Footer = () => {
  return (
     <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">Developed by Ali Alamri</p>
          <p className="text-sm">Email: aliiskran004@gmail.com</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">E-commerce Application</p>
          <p className="text-sm">Version 1.0.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
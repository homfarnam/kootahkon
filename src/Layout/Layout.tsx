import { Link } from "react-router-dom";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-between h-full min-h-screen w-full text-white  ">
        <header className="py-5 bg-[#000080]">
          <div className="flex w-full items-center justify-between">
            <div>
              <ul className="flex space-x-3 ml-5">
                <Link to="/contact-us" className=" hover:text-yellow-400">
                  <li>تماس با ما</li>
                </Link>
                <Link to="/about" className=" hover:text-yellow-400">
                  <li>درباره ما</li>
                </Link>
              </ul>
            </div>
            <div className="flex mx-5 space-x-4 font-semibold">
              <Link to="/" className="text-2xl">
                <a href="/">کوتاه کن</a>
              </Link>
            </div>
          </div>
        </header>
        {children}
      </div>
    </>
  );
};

export default Layout;

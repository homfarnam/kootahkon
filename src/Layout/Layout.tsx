interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-between h-full min-h-screen w-full text-black  ">
        <header className="py-5 bg-gradient-to-t from-blue-200 to-blue-300">
          <div className="flex w-full justify-center">
            <ul className="flex m-auto space-x-4 font-semibold">
              <li>تماس با کوتاه کن</li>
              <li>درباره کوتاه کن</li>
              <li>خانه</li>
            </ul>
          </div>
        </header>
        {children}
      </div>
    </>
  );
};

export default Layout;

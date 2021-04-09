interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <head>
        <title>Kootahkon</title>
      </head>
      <div className="flex flex-col justify-between h-full min-h-screen w-full text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
        {children}
      </div>
    </>
  );
};

export default Layout;

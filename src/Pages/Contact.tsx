import * as React from "react";
import Layout from "../Layout/Layout";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <Layout>
      <div className="w-full h-full flex justify-center text-black">
        <div className="mt-5 w-1/2 flex flex-col items-center justify-start">
          <h3 className="font-semibold text-3xl">تماس با ما</h3>
          <div className="w-1/2 mt-5 flex flex-col justify-center items-center space-y-5">
            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-2xl">محمدرضا حقیری</h4>
              <p>طراحی و پیاده‌سازی ،Backend عملیات دواپس</p>
              <p>haghiri75@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-2xl">فرنام همایونفر</h4>
              <p> Frontend طراحی رابط کاربری و پیاده‌سازی </p>
              <p>homfarnam@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

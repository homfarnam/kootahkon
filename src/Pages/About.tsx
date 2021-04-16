import * as React from "react";
import Layout from "../Layout/Layout";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout>
      <div className="w-full h-full flex justify-center text-black">
        <div className="mt-5 w-1/2 flex flex-col items-center justify-start">
          <h3 className="font-semibold text-3xl">درباره ما</h3>
          <div className="w-1/2 mt-5 text-right">
            <p style={{ direction: "rtl" }}>
              کوتاه‌کن، یک سرویس کوتاه کننده پیوند است که به عنوان یک پروژه آخر
              هفته‌ای ساخته شد. کوتاه‌کن به شما کمک می‌کند تا پیوندهای بلند خود
              را در کوتاه‌ترین زمان به پیوندهای کوتاه و قابل اشاره در جاهای دیگر
              تبدیل کنید.
            </p>
            <p style={{ direction: "rtl" }}>
              کوتاه‌کن در مدت زمانی کوتاه و با کمک تکنولوژی‌های Ruby, Sinatra,
              SQLite و React نوشته شده است.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

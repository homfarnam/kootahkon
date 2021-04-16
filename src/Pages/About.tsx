import * as React from "react";
import Layout from "../Layout/Layout";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout>
      <div className="w-full h-full flex justify-center text-black">
        <div className="mt-5 w-1/2 flex flex-col items-center justify-start">
          <h3 className="font-semibold text-3xl">درباره ما</h3>
          <div className="w-1/2 mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              corporis deserunt, magni maxime voluptate ducimus iste minima
              dolor similique dignissimos, pariatur tenetur? Placeat, iste eius
              ex reiciendis laboriosam mollitia aliquid!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

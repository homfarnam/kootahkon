import { useEffect, useRef, useState } from "react";
import Layout from "./Layout/Layout";
import axios from "axios";

function App() {
  const [url, setUrl] = useState<string>("");
  const [shortlink, setShortLink] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<string>("");
  const urlRef = useRef<any>();

  const handleChange = (
    e: React.InputHTMLAttributes<HTMLInputElement> | any
  ) => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios.post(`https://kthkn.ir`, { url }).then((res) => {
      setShortLink(res.data.shortened_url);
    });
  };

  const copyToClipboard = (e: any) => {
    // urlRef.current.select();
    // document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  };

  return (
    <Layout>
      <div className="flex w-full justify-center">
        <h1>Kootahkon</h1>
      </div>
      <div className="w-full m-auto flex flex-col items-center space-y-5 justify-center">
        <form className="space-x-2 flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-2 text-black"
            onChange={handleChange}
            value={url}
          />
          <button className="border p-2 rounded-lg" type="submit">
            Submit
          </button>
        </form>

        <div>
          <p ref={urlRef}>{shortlink}</p>
        </div>
      </div>
    </Layout>
  );
}

export default App;

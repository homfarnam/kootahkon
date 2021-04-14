import { useRef, useState } from "react";
import Layout from "./Layout/Layout";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [url, setUrl] = useState<string>("");
  const [shortlink, setShortLink] = useState<string>("");
  const [Copied, setCopied] = useState<boolean>(false);
  const urlRef = useRef<any>();

  const validURL = (str: string) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator

    console.log(!!pattern.test(str));
    return !!pattern.test(str);
  };

  const handleChange = (
    e: React.InputHTMLAttributes<HTMLInputElement> | any
  ) => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validURL(url) === true) {
      axios.post(`https://kthkn.ir`, { url }).then((res) => {
        setShortLink(res.data.shortened_url);
      });
    } else {
      return alert("لینک نیست.");
    }
  };

  return (
    <Layout>
      <div className="w-full m-auto flex flex-col items-center space-y-5 justify-center">
        <div className="w-full justify-center flex">
          <form
            className="space-x-2 flex w-full justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="p-4 text-black border border-black rounded-lg w-4/12"
              onChange={handleChange}
              value={url}
              placeholder="محل قرار دادن لینک"
            />
            <button
              className="border bg-[#1b3987] hover:bg-blue-700 w-[200px] p-3 text-white rounded-lg"
              type="submit"
            >
              کوتاه کن
            </button>
          </form>
        </div>

        <div className="flex flex-col">
          <CopyToClipboard text={shortlink} onCopy={() => setCopied(true)}>
            <span>
              لینک کوتاه شده:
              <a
                ref={urlRef}
                href={`http://${shortlink}`}
                className="underline"
                target="blank"
              >
                {shortlink}
              </a>
            </span>
          </CopyToClipboard>
          {Copied ? <span style={{ color: "red" }}>Copied.</span> : null}
        </div>
      </div>
    </Layout>
  );
}

export default App;

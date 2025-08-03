import { useEffect, useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [state, setState] = useState(0);

  const [image, setImage] = useState();
  const [countImage, countSetImage] = useState(0);

  const generatePics = async () => {
    const response = await fetch("https://picsum.photos/1920/1080");
    setImage(response.url);
    countSetImage(countImage + 1);
  };

  useEffect(() => {
    generatePics();
  }, []);

  const obj = [
    { name: "hhee", label: "asdf" },
    { name: "eree", label: "fghg" },
    { name: "hdgf", label: "jgjy" },
    { name: "nngh", label: "truy" },
    { name: "ghngh", label: "yuty" },
    { name: "gngh", label: "pmopo" },
    { name: "vsff", label: " vjdjv" },
  ];

  const newObj = obj.map((data) => {
    return {
      jeneng: data.name,
      labelss: data.label,
    };
  });

  console.log(newObj);

  return (
    <>
      <h1>hello {state}</h1>
      <button onClick={() => setState(state + 1)}>set</button>
      <button
        onClick={() => {
          setState(state - 1);
          if (state <= 0) {
            setState(state + 0);
          }
        }}
      >
        unset
      </button>
      <button onClick={() => setState(state - state)}>reset</button>

      <div style={{ marginTop: 32, display: "flex", flexDirection: "column" }}>
        <img src={image} style={{ width: 400, height: 400 }} alt="gambar" />
        <h1>req count {countImage}</h1>
        <Button name="generateGambar" funcHandler={() => generatePics()} />
      </div>
    </>
  );
}

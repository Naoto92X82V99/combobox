import React from "react";
import { useState } from "react";
import styles from "../styles/Combobox.module.scss";

const list = [
  {
    id: 1,
    value: "apple",
  },
  {
    id: 2,
    value: "banana",
  },
  {
    id: 3,
    value: "orange",
  },
];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <main className={styles.combobox}>
      <div className={styles["input-container"]}>
        <input value={keyword} onChange={handleChange} />
        <span className={styles.icon} onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? "▼" : "▲"}
        </span>
      </div>
      {/* クリックされたら表示 */}
      <div className={styles.list} hidden={isClicked && !keyword}>
        {list
          .filter(({ value }) => value.includes(keyword))
          .map(({ id, value }) => (
            <div key={id} onClick={() => setKeyword(value)}>
              {value}
            </div>
          ))}
      </div>
    </main>
  );
}

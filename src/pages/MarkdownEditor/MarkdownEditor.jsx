import React from "react";
import MarkedInput from "../../components/MarkedInput/MarkedInput";
import Result from "../../components/Result/Result";
import styles from "./MarkdownEditor.module.css";


const MarkdownEditor = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>MARKDOWN EDITOR</h1>
          
        </div>
        <div className={styles.editorContainer}>
          <MarkedInput />
          <Result />
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;

import styles from "./Hero2.module.css";


const Hero = ({address, address2, address3, address4, address5, address6, address7, address8, address9, heading1, heading2, heading3, heading4, heading5, heading6, heading7, heading8, heading9, heading10, }) => {
  return (
    <div className={styles.container}>
      <h1>{heading1}</h1>
      <p>{address}{heading2}</p>
      <p>{address2}{heading3}</p>
      <p>{address3}{heading4}</p>
      <p>{address4}{heading5}</p>
      <p>{address5}{heading6}</p>
      <p>{address6}{heading7}</p>
      <p>{address7}{heading8}</p>
      <p>{address8}{heading9}</p>
      <p>{address9}{heading10}</p>
    </div>
  );
};

export default Hero;

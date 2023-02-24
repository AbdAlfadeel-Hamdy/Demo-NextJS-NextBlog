import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/abdalfadeel.jpg"
          alt="A photo of Abd Al-fadeel"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'am Abd Al-fadeel</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};
export default Hero;

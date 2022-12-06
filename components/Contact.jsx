import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}> 
        <h2>Follow us:</h2>
        <img src="/images/google.svg" />
        <img src="/images/facebook.svg" />
        <img src="/images/twitter.svg" />
      </div>
      <div className={styles.message}>
        <h2>Contact us</h2>
        <p>
          We hope you enjoy your experience in Caffeine Grounds. Feel free to follow us at our social media platforms and email to keep in touch with our services.
        </p>
        
      </div>
    </div>
  );
};

export default Contact;

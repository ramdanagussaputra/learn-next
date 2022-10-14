import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src="/images/site/Ramdan.jpg"
                    alt="Ramdan Photo"
                    width={300}
                    height={300}
                />
            </div>

            <h1>Hi I'm Ramdan</h1>

            <p>I share information about technology especially web development</p>
        </section>
    );
};

export default Hero;

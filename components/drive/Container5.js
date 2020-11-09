import styles from './Container5.module.css'
import descriptions from '../../assets/drive-descriptions.json'

const Container5 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={background}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <text className={styles.title}>
                        {description[0].title}
                    </text>

                    <text className={styles.subtitle}>
                        {description[0].subtitle}
                    </text>

                    <text className={styles.subtitle}>
                        {description[0].subtitle2}
                    </text>
                </div>
                
                <div className={styles.image_container}>
                    esto sera la imagen
                </div>
            </div>

            <div className={styles.container2}>
                <div className={styles.image_container}>
                    esto sera la imagen
                </div>

                <div className={styles.main}>
                    <text className={styles.title}>
                        {description[0].title2}
                    </text>

                    <text className={styles.subtitle}>
                        {description[0].subtitle2}
                    </text>

                    <text className={styles.subtitle}>
                        {description[0].subtitle3}
                    </text>

                    <text className={styles.subtitle}>
                        {description[0].subtitle4}
                    </text>

                    <div className={styles.links}>
                        <a className={styles.link}>Sign up</a>
                        <a className={styles.link}>Download</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Container5;
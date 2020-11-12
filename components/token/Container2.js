import styles from './Container2.module.css'
import descriptions from '../../assets/token-descriptions.json'
import TokenSmallCard from '../cards/TokenSmallCard'
import Image from 'next/image'

const Container2 = ({ id }) => {
    
    const description = descriptions.filter( desc => desc.id === id)
    const { 
        title, subtitle, colored,
        title2, subtitle2, colored2,
        title3, subtitle3, colored3,
        title4, subtitle4, colored4,
        title5, subtitle5, colored5,
        title6, subtitle6, colored6,
    } = description[0]
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? `container` : 'container grey'

    return ( 
        <div className={background}>
            <div className={styles.main}>
                <div className={styles.images_container}>
                    <div className={styles.cube}>
                        <Image
                            src="/images/1440/Token/Section 2/left glass and cube.png"
                            width={152}
                            height={274}
                        />   
                    </div>

                    <div className={styles.hoop}>
                        <Image
                            src="/images/1440/Token/Section 2/right hoop.png"
                            width={167}
                            height={303}
                        />
                    </div>
                </div>

                <div className={styles.card_container}>
                    <TokenSmallCard title={title} subtitle={subtitle} colored={colored} />
                    <TokenSmallCard title={title2} subtitle={subtitle2} colored={colored2} />
                    <TokenSmallCard title={title3} subtitle={subtitle3} colored={colored3} />
                </div>

                <div className={styles.card_container}>
                    <TokenSmallCard title={title4} subtitle={subtitle4} colored={colored4} />
                    <TokenSmallCard title={title5} subtitle={subtitle5} colored={colored5} />
                    <TokenSmallCard title={title6} subtitle={subtitle6} colored={colored6} />
                </div>
            </div>
        </div>
     );
}
 
export default Container2;
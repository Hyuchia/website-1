import InfoCard from '../cards/InfoCard'
import styles from './Container7.module.css'
import descriptions from '../../assets/drive-descriptions.json'

const Container7 = ({ id }) => {

    const LINK_INFOCARD_1 = "https://www2.deloitte.com/us/en/pages/consulting/articles/interest-in-blockchain-continues.html"
    const LINK_INFOCARD_2 = "https://internxt.com/08893440.pdf"
    const LINK2_INFOCARD_2 = "https://internxt.com/07506680.pdf"

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)
    const { title, subtitle, subtitle2, title2, subtitle3, subtitle4 } = description[0]

    return ( 
        <div className={`${styles.cards_container} xl:my-12`}>
            <InfoCard title={title} subtitle={subtitle} subtitle2={subtitle2} linkText="Read more" link={LINK_INFOCARD_1} image="Deloitte" width={137} heigth={27} />
            <InfoCard title={title2} subtitle={subtitle3} subtitle2={subtitle4} linkText="Read study 1.0" link={LINK_INFOCARD_2} linkText2="Read study 2.0" link2={LINK2_INFOCARD_2} image="IEEE" width={130} heigth={38} />
        </div>
     );
}

export default Container7;
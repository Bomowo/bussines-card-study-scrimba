import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    return (<footer>
                <a href="https://twitter.com/vuperhut" target="_blank"  rel="noreferrer">
                    <button type="button" value=""><FontAwesomeIcon icon={faTwitter} size="xl" /></button>
                </a>
                <a href="https://github.com/Bomowo" target="_blank"  rel="noreferrer">
                    <button type="button" value=""><FontAwesomeIcon icon={faGithub} size="xl" /></button>
                </a>
            </footer>)
}
import {useContext} from "react"
import {DefaultContext} from "../../Context"

export const Footer = () => {
    const { themeColor, changeTheme } = useContext(DefaultContext)

    return(
        <footer>
            <div className="container">
                <div className="links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#"  onClick={e => changeTheme(themeColor === '#000000' ?'#ffffff' : '#000000')}>ChangeTheme</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                <div className="legal">
                    <p>
                        NFactorial, 2022. ©All right reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
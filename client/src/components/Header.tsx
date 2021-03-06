import {Component} from "react"
import {Link} from "react-router-dom"
import logoImg from "../assets/images/logo.png"
import fbLogoImg from "../assets/images/fb-logo.png"
import igLogoImg from "../assets/images/ig-logo.png"
import "../styles/Header.scss"


interface IProps {
    isLoggedIn: boolean
}

interface IState {
    navVisible: boolean
}

export default class Header extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            navVisible: false
        }
    }

    onMenuButton = () => {
        const current = this.state.navVisible
        this.setState({navVisible: !current})
    }

    render() {
        const {isLoggedIn} = this.props
        return (
            <div className={"header-left"}>
                <div className={"nav-brand"}>
                    <img src={logoImg} alt={"brand logo"}/>
                    {/*<span className={"name"}>Company name</span>*/}
                </div>
                <div className={"hr"}/>
                <div className={"navbar"}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    {!isLoggedIn ?
                        <Link to={"/login"}>Login</Link> :
                        (<>
                            <Link to={"/admin-panel"}>Admin panel</Link>
                            <Link to={"/logout"}>Logout</Link>
                        </>)
                    }
                </div>
                <div className={"hr"}/>

                <div className={"media-wrapper"}>
                    <span>Find us on:</span>
                    <div className={"media-links"}>
                        <a href={"https://facebook.com"}><img src={fbLogoImg} alt={"Facebook logo"}/></a>
                        <a href={"https://instagram.com"}><img src={igLogoImg} alt={"Instagram logo"}/></a>
                    </div>
                </div>
            </div>
        )
    }
}
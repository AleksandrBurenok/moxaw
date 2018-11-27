import React, {Component} from 'react'
import style from '../style.css'
import Header from '../components/header/header'
import Advantage from '../components/Advantage/Advantage'
import MenuToggle from '../components/MobileMenu/MobileMenu'

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={style.holder}>
                    <div className={style.headerTextWrapper}>
                        <Header/>
                        <MenuToggle/>
                        <div className={style.headerText}>
                            <p>Unique and Modern Design</p>
                            <h1>Portfolio PSD Template</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at eius ex facere
                                laboriosam sunt ullam velit voluptatem.</p>
                        </div>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <Advantage/>
                </div>
            </React.Fragment>

        )
    }
}

export default Layout
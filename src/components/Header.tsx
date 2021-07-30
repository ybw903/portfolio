import { useEffect, useState } from "react";

export default function Header() {

    const [hasBackGroundColor, sethasBackgroundColor] = useState({
        backgroundColor: false
    });
    const [state,setState] = useState({
        mobileView: false
    });

    const [fold,setFold] = useState({
        isFold: true
    })

    const {mobileView} = state;
    const {backgroundColor} = hasBackGroundColor;
    const {isFold} = fold;

    useEffect(()=>{
        const setResponsivness = () => {
            return window.innerWidth < 900
            ? setState((prevState) => ({...prevState, mobileView: true}))
            : setState((prevState) => ({...prevState, mobileView:false}));
        };
        const hasHeaderWithBackgroundColor = () => {
            const scrollPosition = (window.scrollY||document.documentElement.scrollTop);
            return scrollPosition<100
            ? sethasBackgroundColor((prevState) => ({...prevState, backgroundColor: false}))
            : sethasBackgroundColor((prevState) => ({...prevState, backgroundColor:true}));
        }
        setResponsivness();
        hasHeaderWithBackgroundColor();
        window.addEventListener('resize', () => setResponsivness());
        window.addEventListener('scroll', () => hasHeaderWithBackgroundColor());
    },[]);

    const hamburgerMenuHandler = () => {
        setFold((prevState) => ({...prevState, isFold: !isFold}));
    }
    const style = {color: '#453a33'};
    return(
        <header className={backgroundColor||mobileView? "header header-has-background-color" : "header"}>
            <div className="header-content ">
                <div className="header-title" style={backgroundColor||mobileView?style:{}}>Conner's Portfolio</div>
                {mobileView
                ? (
                    <div className="header-hamburger-wrapper" onClick = {()=> hamburgerMenuHandler()}>
                        <img src="img/hamburger.svg" alt="hamburger-menu"/>
                    </div>

                )
                : (
                    <div className="header-navigation-menu" style={backgroundColor?style:{}}>
                        <div className="header-navigation-item" style={backgroundColor?style:{}}>About me</div>
                        <div className="header-navigation-item" style={backgroundColor?style:{}}>Skills</div>
                        <div className="header-navigation-item" style={backgroundColor?style:{}}>Archiving</div>
                        <div className="header-navigation-item" style={backgroundColor?style:{}}>Projects</div>
                    </div>

                )
                }
            </div>
            {mobileView
            ?(
                <div className={isFold? "header-folded-navigation-menus header_is_folded":"header-folded-navigation-menus"} >
                    <div className="header-folded-navigation-menu">About me</div>
                    <div className="header-folded-navigation-menu">Skills</div>
                    <div className="header-folded-navigation-menu">Archiving</div>
                    <div className="header-folded-navigation-menu">Projects</div>
                </div>
            )
            :('')
            }
        </header>
    );
}
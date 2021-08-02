import { useEffect, useState } from "react";

interface props {
    handleScroll: (i: number) => void;
}

export default function Header({handleScroll}: props) {

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
    
    const moveScroll= (i:number) => {
        handleScroll(i);
    }

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
                        <div className="header-navigation-item" style={backgroundColor?style:{}} onClick={()=>moveScroll(0)}>About me</div>
                        <div className="header-navigation-item" style={backgroundColor?style:{}} onClick={()=>moveScroll(1)}>Skills</div>
                        <div className="header-navigation-item" style={backgroundColor?style:{}} onClick={()=>moveScroll(2)}>Archiving</div>
                        <div className="header-navigation-item" style={backgroundColor?style:{}} onClick={()=>moveScroll(3)}>Projects</div>
                    </div>

                )
                }
            </div>
            {mobileView
            ?(
                <div className={isFold? "header-folded-navigation-menus header_is_folded":"header-folded-navigation-menus"} >
                    <div className="header-folded-navigation-menu" onClick={()=>moveScroll(0)}>About me</div>
                    <div className="header-folded-navigation-menu" onClick={()=>moveScroll(1)}>Skills</div>
                    <div className="header-folded-navigation-menu" onClick={()=>moveScroll(2)}>Archiving</div>
                    <div className="header-folded-navigation-menu" onClick={()=>moveScroll(3)}>Projects</div>
                </div>
            )
            :('')
            }
        </header>
    );
}
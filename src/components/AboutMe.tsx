type aboutMe = {
    label:string;
    value: string;
    imgUrl: string;
}

export default function AboutMe() {

    const aboutMe:aboutMe[] = [
        {label:'이름',value:'유병우',imgUrl:'/img/about-me/person-fill.svg'}, 
        {label:'생년월일',value:'94.09.03',imgUrl:'/img/about-me/calendar-fill.svg'},
        {label:'주소지',value:'충남 천안시',imgUrl:'/img/about-me/geo-alt-fill.svg'},
        {label:'연락처',value:'010-6890-1752',imgUrl:'/img/about-me/telephone-fill.svg'},
        {label:'이메일',value:'conner903@naver.com',imgUrl:'/img/about-me/envelope-fill.svg'},
        {label:'학력',value:'충북대학교 정보통신공학부',imgUrl:'/img/about-me/pencil-fill.svg'}
    ]

    return (
        <article>
        <div className="content">
          <div className="section-title">
            <div className = "section-title-text">
            About me
            </div>
            
          </div>
          <div className="about-me-basic-infos">
            {aboutMe.map((aboutMe, idx) => 
                <div className="aboutMe-info-wrapper" key={idx}>
                    <div className = "aboutMe-basic-info">
                        <div className= "aboutMe-icon-img-wrapper"> 
                            <img className="aboutMe-icon-img" src={aboutMe.imgUrl} alt={aboutMe.label}/>
                        </div>
                        <div className = "aboutMe-field">
                            <div className = "aboutMe-field-label">{aboutMe.label}</div>
                            <div className = "aboutMe-field-value">{aboutMe.value}</div>
                        </div>
                    </div>
                </div>
            )}
          </div>
        </div>
      </article>
    );
}
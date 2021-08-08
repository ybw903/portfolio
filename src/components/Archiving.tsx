interface props {
    setItemsRef: (i:number, divRef: HTMLDivElement|null) => void
}


export default function Archiving({setItemsRef}:props) {
    return (
        <article className="archiving" >
            <div className="archiving-content"ref={(ref)=>setItemsRef(2,ref)}>
                <div className="section-title">
                    <div className = "section-title-text" style={{color:'#ffffff',borderBottomColor:'#ffffff'}}>Archiving</div>
                </div>
                <div className="archiving-container">
                    <div className="archiving-card" onClick={()=>window.open("https://github.com/ybw903")}>
                        <div className="archiving-img-wrapper">
                            <img className="archiving-img" src="img/archiving/git-hub.png" alt="github"/>
                        </div>
                        <div className="archiving-url">https://github.com/ybw903</div>
                        <div className="archiving-description">
                            <p>소스 코드 저장소</p>
                            <ul>
                                <li>학습하며 배웠던 내용의 소스 코드.</li>
                                <li>토이 프로젝트 및 학부 시절 진행했던 프로젝트의 소스코드</li>
                            </ul>
                        </div>
                    </div>
                    <div className="archiving-card" onClick={()=>window.open("https://velog.io/@ybw903")}>
                        <div className="archiving-img-wrapper">
                            <img className="archiving-img" src="img/archiving/vel.png" alt="velog" />
                        </div>
                        <div className="archiving-url">https://velog.io/@ybw903</div>
                        <div className="archiving-description">
                            <p>공부 및 지식 공유 목적의 블로그입니다.</p>
                            <ul>
                                <li>
                                    공부한 것을 진정한 나의 것으로 만들기 위한 기록
                                </li>
                                <li>
                                    지식 공유를 통한 함께 성장하는 개발자가 되기위한 실천
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </article>
    );
}
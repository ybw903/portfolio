import LineBreaker from "../utils/LineBreaker";

interface props {
    setItemsRef: (i:number, divRef: HTMLDivElement|null) => void
}

export default function Projects({setItemsRef}:props) {

    return (
        <article className="projects" >
            <div className="projects-content"ref={(ref)=>setItemsRef(3,ref)}>
                <div className="section-title">
                    <div className = "section-title-text" style={{color:'#ffffff',borderBottomColor:'#cccccc'}}>Projects</div>
                </div>
                <div className="projects-project">
                    <div className="projects-title">게시판</div>
                    <div className="projects-period">"2021-07"</div>
                    <div className="projects-info">
                        <div></div>
                        <div className="projects-descriptions">
                            <div className="projects-main-description">
                                타임리프와 스프링 부트에 대해 자세히 학습하고자 구현했던 프로젝트입니다.
                            </div>
                            <div className="projects-description">
                                <div className="projects-label">주요기능</div>
                                <div className="projects-value">회원 인증, 게시글 작성, 삭제,수정, 대댓글 작성, 삭제, 수정, 좋아하는 게시글 표시</div>
                            </div>
                            <div className="projects-description">
                                <div className="projects-label">GitHub</div>
                                <div className="projects-value">
                                    <div className="projects-url" onClick={()=>window.open("https://github.com/ybw903/SpringBoardApplication")}>https://github.com/ybw903/SpringBoardApplication</div>
                                </div>
                            </div>
                            <div className="projects-description">
                                <div className="projects-label">Front-end</div>
                                <div className="projects-value">
                                    Thymleaf
                                </div>
                            </div>
                            <div className="projects-description">
                                <div className="projects-label">Back-end</div>
                                <div className="projects-value">
                                    Spring Boot 2.43, Spring Security, Spring Data Jpa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-project">
                    <div className="projects-title">졸업 프로젝트</div>
                    <div className="projects-period">"2020-04 ~ 2020.10"</div>
                    <div className="projects-info">
                        <div></div>
                        <div className="projects-descriptions">
                            <div className="projects-main-description">
                                {LineBreaker(`졸업프로젝트로 인근에 위치한 주차장 정보 조회 및 구현한 차량번호 인식 주차시스템 예약 시스템을 구현하였습니다.
                                프로젝트에서 모바일 애플리케이션과 API서버를 담당하여 구현하였습니다.
                                Flask를 사용하여 API서버를 구현하였고 MySQL로 DB를 구축하였습니다.
                                테이블 간의 필요한 연관관계에 따라 외래키 제약조건과 정규화과정에 맞추어 DB를 설계하였고, 
                                클라이언트와 HTTP프로토콜을 사용하여 통신하는 방법에 대해 배울 수 있었습니다. 
                                또한, JWT토큰을 사용하여 사용자 인증을 구현하였고 AWS Lambda에 구현한 API서버를 배포하는 경험을 하였습니다.`)}

                            </div>
                            <div className="projects-description">
                                <div className="projects-label">주요기능</div>
                                <div className="projects-value">위치 기반 주차장 정보 조회, JWT토큰 인증,인가, 주차시스템 예약</div>
                            </div>
                            <div className="projects-description">
                                <div className="projects-label">GitHub</div>
                                <div className="projects-value">
                                    <div className="projects-url" onClick={()=>window.open("https://github.com/ybw903/Capstone-Application")}>https://github.com/ybw903/Capstone-Application</div>
                                </div>
                            </div>
                            <div className="projects-description">
                                <div className="projects-label">Front-end</div>
                                <div className="projects-value">
                                    Flutter
                                </div>
                            </div>
                            <div className="projects-description">
                                <div className="projects-label">Back-end</div>
                                <div className="projects-value">
                                    Flask, MySQL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
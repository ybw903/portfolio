
import {moveDown, moveUp} from "../utils/onMouseDetail"

type Skill = {
    skill_title: string;
    tech_stck_img_url: string;
}

interface props {
    setItemsRef: (i:number, divRef: HTMLDivElement|null) => void
}

export default function Skills({setItemsRef}:props) {
    const skills: Skill[]  = [
        {skill_title: 'Front-end',tech_stck_img_url:'img/skills/front-end.png'},
        {skill_title: 'Back-end',tech_stck_img_url:'img/skills/back-end.png'},
        {skill_title: 'Deployment',tech_stck_img_url:"img/skills/deployment.png"},
        {skill_title: 'Version Control',tech_stck_img_url:'img/skills/version-control.png'},
    ]
    

    return (
        <article className="skills" >
            <div className="skills-content" ref={(ref)=>setItemsRef(1,ref)}>
                <div className="section-title">
                    <div className = "section-title-text" style={{color:'#000000',borderBottomColor:'#000000'}}>Skills</div>
                </div>
                <div className="tech-stacks-container"> 
                    {skills.map((skill, idx) =>
                        <div className="tech-stacks" key={idx} onMouseOver={moveDown} onMouseLeave={moveUp}>
                            <div className="skill_title">{skill.skill_title}</div>
                            <img className="skill-img" src={skill.tech_stck_img_url} alt={skill.skill_title}/>
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}
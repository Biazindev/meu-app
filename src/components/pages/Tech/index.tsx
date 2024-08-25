import { Container, Item, TextItem } from "./styles"
import { FaReact, FaBootstrap, FaSass, FaLess, FaGrunt, FaGulp, FaJava } from "react-icons/fa"
import { RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri"
import { TbBrandTypescript, TbBrandRedux } from "react-icons/tb"
import { DiJqueryLogo, DiNodejs } from "react-icons/di"
import { SiHibernate, SiPostgresql, SiMongodb, SiApachemaven, SiSpringboot, SiJunit5, SiCypress } from "react-icons/si"
import { colors } from '../../../styles/variaveis'

const Tech = () => {
    return (
        <>
        <TextItem><h1>Principais Tecnologias</h1></TextItem>
        <Container>
            <Item>
                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                    <RiJavascriptLine style={{ marginRight: '4px' }} size={24} color="#F7DF1E" />
                    <p>JavaScript</p>
                </a>
            </Item>
            <Item>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <FaReact style={{ marginRight: '4px' }} size={24} color={colors.react} />
                    <p>React</p>
                </a>
            </Item>
            <Item>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                    <TbBrandTypescript style={{ marginRight: '4px' }} size={24} color={colors.typescript} />
                    <p>TypeScript</p>
                </a>
            </Item>
            <Item>
                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                    <TbBrandRedux style={{ marginRight: '4px' }} size={24} color={colors.redux} />
                    <p>Redux</p>
                </a>
            </Item>
            <Item>
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                    <FaBootstrap style={{ marginRight: '4px' }} size={24} color={colors.bootstrap} />
                    <p>BootStrap</p>
                </a>
            </Item>
            <Item>
                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                    <FaSass style={{ marginRight: '4px' }} size={24} color={colors.sass} />
                    <p>SASS</p>
                </a>
            </Item>
            <Item>
                <a href="https://lesscss.org/" target="_blank" rel="noopener noreferrer">
                    <FaLess style={{ marginRight: '4px' }} size={40} color={colors.less} />
                    <p>LESS</p>
                </a>
            </Item>
            <Item>
                <a href="https://gruntjs.com/" target="_blank" rel="noopener noreferrer">
                    <FaGrunt style={{ marginRight: '4px' }} size={24} color={colors.grunt} />
                    <p>Grunt</p>
                </a>
            </Item>
            <Item>
                <a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">
                    <FaGulp style={{ marginRight: '4px' }} size={24} color={colors.gulp} />
                    <p>GulpJs</p>
                </a>
            </Item>
            <Item>
                <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
                    <DiJqueryLogo style={{ marginRight: '4px' }} size={24} color={colors.jquery} />
                    <p>JQuery</p>
                </a>
            </Item>
            <Item>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                    <RiTailwindCssFill style={{ marginRight: '4px' }} size={24} color={colors.tailwindcss} />
                    <p>TailWindCss</p>
                </a>
            </Item>
            <Item>
                <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">
                    <FaJava style={{ marginRight: '4px' }} size={32} color={colors.java} />
                    <p>Java</p>
                </a>
            </Item>
            <Item>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                    <DiNodejs style={{ marginRight: '4px' }} size={40} color={colors.nodejs} />
                    <p>NodeJS</p>
                </a>
            </Item>
            <Item>
                <a href="https://hibernate.org/" target="_blank" rel="noopener noreferrer">
                    <SiHibernate style={{ marginRight: '4px' }} size={24} color={colors.hibernate} />
                    <p>Hibernate</p>
                </a>
            </Item>
            <Item>
                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                    <SiPostgresql style={{ marginRight: '4px' }} size={24} color={colors.postgresql} />
                    <p>PostgreSQL</p>
                </a>
            </Item>
            <Item>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                    <SiMongodb style={{ marginRight: '4px' }} size={24} color={colors.mongodb} />
                    <p>MongoDB</p>
                </a>
            </Item>
            <Item>
                <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">
                    <SiApachemaven style={{ marginRight: '4px' }} size={24} color={colors.maven} />
                    <p>Maven</p>
                </a>
            </Item>
            <Item>
                <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
                    <SiSpringboot style={{ marginRight: '4px' }} size={24} color={colors.springboot} />
                    <p>Spring Boot</p>
                </a>
            </Item>
            <Item>
                <a href="https://junit.org/junit5/" target="_blank" rel="noopener noreferrer">
                    <SiJunit5 style={{ marginRight: '4px' }} size={24} color={colors.junit} />
                    <p>JUnit</p>
                </a>
            </Item>
            <Item>
                <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">
                    <SiCypress style={{ marginRight: '4px' }} size={24} color={colors.cypress} />
                    <p>Cypress</p>
                </a>
            </Item>
        </Container>
        </>
    )
}

export default Tech

import React, { useState } from 'react';
import fundo from '../../assets/header3.png';
import { ContainerHeader, Display, DisplayHeader, Hamburguer, LinkHeader, NavMobile } from './styles';
import { useDispatch } from 'react-redux';
import { open } from '../../components/store/reducer/modal';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const openDisplay = () => {
        dispatch(open());
    }

    const [isMenuOpen, setIsMenuOpen] = useState(true)
    console.log()
    return (
        <ContainerHeader>
            <img src={fundo} alt="Header Background" />
            <DisplayHeader>
                    <nav>
                        <div>
                            <LinkHeader onClick={() => setIsMenuOpen(false)} to="/">Home</LinkHeader>
                        </div>
                        <ul>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(false)} to="/portifolio">Projetos</LinkHeader>
                            </li>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(false)} to="/agenda">Agenda</LinkHeader>
                            </li>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(false)} to="/form">Repositório</LinkHeader>
                            </li>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(false)} to={'/'}>Sobre</LinkHeader>
                            </li>
                        </ul>
                    </nav>
                </DisplayHeader>
            <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
            </Hamburguer>
            <NavMobile>
                <Display $isOpen={!isMenuOpen}>
                    <nav>
                        <div>
                            <LinkHeader onClick={() => setIsMenuOpen(true)} to="/">Home</LinkHeader>
                        </div>
                        <ul>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to="/portifolio">Projetos</LinkHeader>
                            </li>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to="/agenda">Agenda</LinkHeader>
                            </li>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to="/form">Repositório</LinkHeader>
                            </li>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to={'/'}>Sobre</LinkHeader>
                            </li>
                        </ul>
                    </nav>
                </Display>
            </NavMobile>
        </ContainerHeader>
    )
}

export default Header

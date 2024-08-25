import { useState } from "react"
import { BsFillPeopleFill } from "react-icons/bs"
import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { MdAttachEmail } from "react-icons/md"

import { Card, Container, Formulario, Sociais, ButtonEmail, ButtonZap, Env, TextItem } from "./styles"
import { cores } from "../../styles/variaveis"

const colors = {
    linkedin: "#0A66C2",
    facebook: "#1877F2",
    github: "#171515",
    instagram: "#E4405F",
    people: "#FFFFFF"
}

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmitEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const mailtoLink = `mailto:tiago.biazin02@gmail.com?subject=Contato de ${formData.nome}&body=Nome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0AMensagem: ${formData.mensagem}`
        window.location.href = mailtoLink
    }

    const handleSubmitWhatsApp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const whatsappLink = `https://api.whatsapp.com/send?phone=5517981716648&text=Nome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0AMensagem: ${formData.mensagem}`
        window.open(whatsappLink, "_blank")
    }

    return (
        <>
        <TextItem>Contato</TextItem>
        <Container>
           <Sociais>
           <Card>
                <div><h2 style={{color: `${cores.text1}`, marginTop: '8px'}}>Redes Sociais</h2></div>
                <div>
                    <span>
                        <h2>+</h2>
                        <BsFillPeopleFill style={{ marginRight: '4px' }} size={48} color={colors.people} />
                    </span>
                    <a href="https://www.linkedin.com/in/tiagobiazin/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} color={colors.linkedin} />
                    </a>
                    <a href="https://www.facebook.com/tiago.tiagobiazin?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={40} color={colors.facebook} />
                    </a>
                    <a href="https://github.com/Biazindev" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} color={colors.github} />
                    </a>
                    <a href="https://www.instagram.com/tiago_adriana_biazin?igsh=MXNsNm9rcjZ2OHc4aw==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} color={colors.instagram} />
                    </a>
                </div>
            </Card>
            <Card>
                <div><h2 style={{color: `${cores.text1}`, marginTop: '8px'}}>E-Mail</h2></div>
                <div>
                    <span>
                        <MdAttachEmail size={48} color={colors.people} />
                    </span>
                    <h3 style={{color: `${cores.text1}`}}>tiago.biazin02@gmail.com</h3>
                </div>
            </Card>
            <Card>
                <div><h2 style={{color: `${cores.text1}`, marginTop: '8px'}}>Telefone</h2></div>
                <div>
                    <span>
                        <FaWhatsapp size={48} color={colors.people} />
                    </span>
                    <h3 style={{color: `${cores.text1}`}}>+55 (17) 98171-6648</h3>
                </div>
            </Card>
           </Sociais>
            <Formulario>
            <form>
                <ul>
                    <li>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="Telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>
                        <textarea
                            name="mensagem"
                            placeholder="Mensagem"
                            value={formData.mensagem}
                            onChange={handleInputChange}
                        />
                    </li>
                </ul>
            </form>
            <Env>
                <ButtonEmail onClick={handleSubmitEmail}>
                    <MdAttachEmail size={24} color={colors.people} />
                    Enviar
                </ButtonEmail>
                <ButtonZap onClick={handleSubmitWhatsApp}>
                    <FaWhatsapp size={24} color={colors.people} />
                    Enviar
                </ButtonZap>
            </Env>
        </Formulario>
        </Container>
        </>
    )
}

export default Contato

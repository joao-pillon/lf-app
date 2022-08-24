import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/luis-felipe-de-oliveira-clemente-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-a0158b125/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.instagram.com/lfelipeclemente" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      <a href="https://whatsa.me/5511982975644/?t=Ol%C3%A1,%20tudo%20bem%20Luis?%20%20Quero%20marcar%20uma%20aula%20com%20voc%C3%AA" target="_blank" rel="noreferrer" ><FaWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials
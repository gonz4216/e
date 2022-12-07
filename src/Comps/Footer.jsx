import React from 'react'
import { Text } from "@nextui-org/react";
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { CgMouse } from 'react-icons/cg';
import { Button, } from "@nextui-org/react";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer--row">
        <a href="/" className='white'>
        <Text className='font'
         
          size={22}
          css={{
            color: "#101010",
            textAlign: "center",
            marginBottom:'-20px'
          }}
      
        >ETHAN GONSALVES</Text>
        </a>
        <div className="hero--logos asd">
          <a href="https://www.youtube.com/channel/UClGk_jEeCR0CIJM2MoWVHoA" target='_blank'><FaYoutube className='logo dsa' /></a>
          <a href="https://twitter.com/edev42" target='_blank'><FaTwitter className='logo dsa' /></a>
          <a href="#" target='_blank'><FaInstagram className='logo dsa' /></a>
          <a href="https://github.com/gonz4216" target='_blank'><FaGithubSquare className='logo dsa' /></a>

        </div>
        <Text
          css={{ color: "inherit", textAlign:'center' }}
          size={12}
          weight="bold"
          transform="uppercase"
        >
          Copyright © 2022 Ethan Gonsalves
        </Text>
      </div>
    </div>
  )
}

export default Footer
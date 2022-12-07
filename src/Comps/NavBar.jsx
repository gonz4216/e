import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
 
 
 
 

const NavBar = () => {
    const collapseItems = [
        "Home",
        "Visuals",
        "Community",
        ''
         
      ];
  return (
    <>
    <div className="row">
     <Navbar isBordered variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
           
          <Text b color="inherit" hideIn="xs" className='font'>
            ETHAN GONSALVES
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link isActive href="#">Home</Navbar.Link>
          <Navbar.Link href="https://www.figma.com/proto/oVZuzrzv1j8y3MeDSpTZBt/Untitled?page-id=0%3A1&node-id=1%3A19&viewport=3208%2C421%2C0.16&scaling=min-zoom&starting-point-node-id=1%3A19" target='_blank'>
            Visuals
          </Navbar.Link>
      
          <Navbar.Link href="https://www.developerdao.com/" target='_blank'>Community</Navbar.Link>
        </Navbar.Content>
        
         
        
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      </div>
  </ >
  )
}

export default NavBar
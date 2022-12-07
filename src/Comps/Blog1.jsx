import React from 'react'
import Blog from './Blog'

const Blog1 = () => {
    return (
        <div>
            <Blog header='What exactly is Web3?'
                para="Web3 is an umbrella term used to describe web apps that interact with a blockchain. It is horribly misused, and by virtue of being an umbrella term is basically just a catch-all for anything relating to the Internet and cryptocurrency. A lot of evangelists will preach it as the future of the internet, but it is not. It builds upon existing technologies on the internet, and most of the routes to query the blockchain are indeed just regular servers, running regular databases and caches, and only as decentralized as their own web2 infrastructure."
                
                para2="Web3 development basically comes down to a frontend Javascript framework (most often, React) that queries a smart contract or other transactional data from a blockchain. However, these apps don't have their own blockchain running inside them. Instead they rely on services like thegraph.com to provide a relay into the blockchain via traditional web2."
               para3= "Aside from the languages used to write smart contracts, it's all the same technology. Javascript/HTML/CSS frontends, pick-your-poison backends. EVMs (Ethereum Virtual Machines) run a language called Solidity, however, it's only use is in that VM and on the blockchain. Furthermore, it costs money to perform writes to the chain via a contract (called Gas). So it will pretty much never be scalable to the transfer of information such as you see on a social media platform."
               para4=" So I guess TLDR: It's all the same thing. Data querying and presentation. Pick which side you want to fall down on, but in the web3 world, JS is definitely the most marketable.
                "
                img='https://i.pinimg.com/originals/de/ae/84/deae84a95d30fa0df447b1d7a4f712f5.jpg'

            />
        </div>
    )
}

export default Blog1
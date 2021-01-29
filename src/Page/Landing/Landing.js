import React from 'react'
import Hero from '../../Components/Hero/Hero'
// import Lorem from '../../Components/LoremTest/Lorem'
import Navbar from '../../Components/Navbar/Navbar'


function Landing(props) {
    return (
        <section className="flex flex-col h-screen bg-blue-100 w-full">
            <Navbar/>
            <Hero/>
        </section>
    )
}


export default Landing


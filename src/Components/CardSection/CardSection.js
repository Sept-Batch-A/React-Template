import React from 'react'
import Card from './Card'

const CardSection = () => {
    return( 
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            
            <Card cardTitle="Card 1" cardDescription = "Hey I am card 1" buttonText="Button 1"/>
            <Card cardTitle="Card 2" cardDescription = "Hey I am card 2" buttonText="Button 2"/>
            <Card cardTitle="Card 3" cardDescription = "Hey I am card 3" buttonText="Button 3"/>
            
          </div>
        </div>
      </section>
    )
}
export default CardSection
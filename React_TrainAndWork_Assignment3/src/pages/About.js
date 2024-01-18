import React, { Component } from 'react'
import OurCompany from '../components/AboutComponents.js/OurCompany'
import OurTeam from '../components/AboutComponents.js/OurTeam'
import Addresses from '../components/AboutComponents.js/Addresses'
import ClientComments from '../components/AboutComponents.js/ClientComments'
import Brands2 from '../components/AboutComponents.js/Brands2Components/Brands2'


export default class About extends Component {
  render() {
    return (
      <div>
        <OurCompany />
        <OurTeam />
        <Addresses />
        <ClientComments />
        <Brands2 />
      </div>
    )
  }
}

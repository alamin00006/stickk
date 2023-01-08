import React, { useState } from 'react';
import './ToogleButton.css'
import { HomeIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/outline'
import { DocumentPlusIcon } from '@heroicons/react/24/outline'

const ToogleButton = () => {
    const [showSummary, setShowSummary]= useState(true);
    const [showSpecification, setShowSpecification]= useState(false);
    const [showAuthor, setShowAuthor]= useState(false);
    const [showContact, setShowContact]= useState(false);
    const [isActive1, setIsActive1]= useState(true);
    const [isActive2, setIsActive2]= useState(false);
    const [isActive3, setIsActive3]= useState(false);
    const [isActive4, setIsActive4]= useState(false);

    let toggleClassCheck1 = isActive1 ?'active':'';
    let toggleClassCheck2 = isActive2 ?'active':'';
    let toggleClassCheck3 = isActive3 ?'active':'';
    let toggleClassCheck4 = isActive4 ?'active':'';

    return (
        <div>
        <button className={`summary ${toggleClassCheck1}`} onClick={() =>{
          return(
            setShowSummary(true),
            setShowSpecification(false),
            setShowAuthor(false),
            setShowContact(false),
            setIsActive1(true),
            setIsActive2(false),
            setIsActive3(false),
            setIsActive4(false)
          )
        }} 
         style={{
          border:'none'
         }} ><HomeIcon className="h-9 w-9"/></button>
        <button className={`specification ${toggleClassCheck2}`} onClick={() =>{
          return(
            setShowSummary(false),
            setShowSpecification(true),
            setShowAuthor(false),
            setShowContact(false),
            setIsActive1(false),
            setIsActive2(true),
            setIsActive3(false),
            setIsActive4(false)
         
          )
        }}
        style={{
          border:'none'
         }} ><BellIcon className="h-9 w-9"/></button>
        <button className={`author ${toggleClassCheck3}`} onClick={() =>{
          return(
            setShowSummary(false),
            setShowSpecification(false),
            setShowAuthor(true),
            setShowContact(false),
            setIsActive1(false),
            setIsActive2(false),
            setIsActive3(true),
            setIsActive4(false)
            
          )
        }} 
        style={{
          border:'none'
         }}
         
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
            </svg>
          </button>
        <button className={`author ${toggleClassCheck4}`} onClick={() =>{
          return(
            setShowSummary(false),
            setShowSpecification(false),
            setShowAuthor(false),
            setShowContact(true),
            setIsActive1(false),
            setIsActive2(false),
            setIsActive3(false),
            setIsActive4(true)
            
          )
        }} 
        style={{
          border:'none'
         }}
         
          >
            <DocumentPlusIcon className="h-9 w-9"/>
          </button>
        {/* {showSummary?<Product3Summary></Product3Summary>:null}
        {showSpecification?<Product3Specification></Product3Specification> :null}
        {showAuthor?<Product3Author></Product3Author>:null} */}
      </div>
    );
};

export default ToogleButton;
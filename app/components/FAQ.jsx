"use client"
import { useState } from 'react';

export default function FAQ() {
    return (
    <section className='' id='faq'>
        <h2 className='text-cyan-950 font-bold'>Frequently <span className="text-emerald-700">Asked Questions</span></h2>
            <div className='mt-10 grid gap-4'>            
                    <Accordion Title="What factors influence the cost of a landscaping project?"  
                               Content={ 
                               <ul>
                                  <li>Garden Size</li>
                                  <li>Design Complexity</li>
                                  <li>Materials</li>
                                  <li>Site Conditions</li>
                                  <li>Labor Costs</li>
                                  <li>Access and Site Accessibility</li>
                                  <li>Plant Selection and Maintenance Requirements</li>
                              </ul>}/>
                    <Accordion Title="How often should I schedule landscape maintenance services?"  
                               Content="The frequency of landscape maintenance services can vary depending on several factors, including the type of plants, the climate, the specific needs of your landscape, and your personal preferences"/>    
                    <Accordion Title="What landscaping services do you offer?"  
                                Content={
                                  <ul>
                                    <li>Landscape Design</li>
                                    <li>Lawn Care and Maintenance</li>
                                    <li>Planting and Garden Installation</li>
                                    <li>Hardscape Construction</li>
                                    <li>Irrigation and Water Features</li>
                                    <li>Sustainable Landscaping</li>
                                    <li>Mulching and Soil Amendment</li>
                                  </ul>
                                }/>
                    <Accordion Title="Do you provide sustainable and eco friendly landscaping options?"  
                               Content="Yes, We can provide information and guidance on sustainable and eco-friendly landscaping options. Sustainable landscaping, often referred to as green or eco-friendly landscaping, is a design approach that prioritizes environmental responsibility, resource conservation, and the promotion of biodiversity. Here are some key principles and practices for sustainable landscaping"/>
                    <Accordion Title="Can you assist with obtaining permits for landscaping projects?"  
                               Content={
                                <ul>
                                  <li>Research Local Regulations</li>
                                  <li>Determine the Need for a Permit</li>
                                  <li>Consult with a Professional</li>
                                  <li>Follow the Rules and Regulations</li>
                                  <li>Completion and Final Inspection</li>
                                </ul>
                              }/>
            </div>
    </section>
  )
}

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (    
        <div className="min-h-[3rem] bg-slate-100 border border-gray-300 rounded-md overflow-hidden">
            <button 
             onClick={toggleAccordion} 
             type='button'
             className="w-full  px-4 py-2 text-lg text-left text-cyan-950 font-semibold 
                        flex justify-between items-center gap-4" 
             >{props.Title}
                <span className='text-emerald-700 font-semibold text-[2rem]'>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (<p className='p-4 text-zinc-600'>{props.Content}</p>)}
      </div>
    );
  };

import { React, useState } from 'react'
import { Plus } from 'lucide-react';

const FAQSection = () => {

    const FAQData = [
        {
            "question": "What services do you offer?",
            "answer": "We offer residential and commercial interior design, space planning, furniture selection, and custom design solutions."
        },
        {
            "question": "How do I start working with you?",
            "answer": "Contact us to schedule a consultation, where we’ll discuss your design needs and vision."
        },
        {
            "question": "Do you offer virtual consultations?",
            "answer": "Yes, we offer virtual consultations for clients who prefer to work remotely."
        },
        {
            "question": "How much does interior design cost?",
            "answer": "Cost depends on the project size and scope. We'll provide a tailored quote after our consultation."
        }
    ]


    // State to track the open/close of answers
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the answer visibility
    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close if clicked again
        } else {
            setOpenIndex(index); // Open the clicked answer
        }
    };



    return (
        <section className='lg:flex gap-20'>
            <div className='lg:w-[80%] mb-5 lg:mb-0'>
                <img src="./Mask group.png" alt="" className='h-full' />
            </div>

            <div className='flex flex-col justify-between'>
                <div className="flex flex-col gap-5">
                <h3>Designing Your Dream With Brilliance</h3>
                <p>Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience</p>
                </div>


                <div className="my-5">
                    {FAQData.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question">
                                <h3 onClick={() => handleToggle(index)} className="flex items-center justify-between">{faq.question}<Plus onClick={() => handleToggle(index)}/> </h3>
                                {openIndex === index && (
                                    <div className="faq-answer"><p>{faq.answer}</p></div>
                                )}
                                <hr className="my-5"/>
                            </div>

                        </div>
                    ))}

                    
                </div>
                <div>
                <button className="btn">Learn More</button>
                </div>
            </div>


        </section>
    )
}

export default FAQSection

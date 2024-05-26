import React from 'react'

// Icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";

const Benefits = () => {
    return (
        <section className='benefits-section'>
            <div className="container">
                <div className="benefits-section__content">
                    <div>
                        <LiaShippingFastSolid />
                        <h3>FREE SHIPPING</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                        <RiRefund2Line />
                        <h3>100% REFUND</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                        <MdSupportAgent />
                        <h3>SUPPORT 24/7</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits
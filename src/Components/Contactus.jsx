import React, { useState } from 'react';
import MainLayout from "../Layouts/MainLayout";
import imgcontact from "../Assest/contactus.png"
const Contactus = () => {
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setConfirmationMessage('Your message has been sent successfully!');
        e.target.reset(); 
    };

    return (
        <>
            <MainLayout>
                <div className="container mt-5">
                    <div className="row"></div>
                    <div className="row mt-5">
                        <div className="col-md-6 mt-3">
                            <p className="text-start mt-">We’d love to hear from you! If you have any questions, comments, or concerns, our team is here to assist you. 
                                We strive to ensure your experience with Luna's Tales is as smooth and enjoyable as possible. 
                                You can reach out to us through the channels listed below or send us a message using the contact form. 
                                We look forward to connecting with you! using the form.</p>
                            <p className="text-start">We look forward to connecting with you!</p>
                            <div className='justify-content-center'>
                                <img src={imgcontact} width={460} height={400}></img>
                            </div>
                        </div>

                        <div className="col-md-6 wow animated fadeInRight mt-3" data-wow-delay=".2s">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <form className="shake" role="form" onSubmit={handleSubmit}>
                                        <div className="form-group label-floating">
                                            <label className="control-label" htmlFor="name">Name</label>
                                            <input
                                                className="form-control"
                                                id="name"
                                                type="text"
                                                name="name"
                                                required
                                                data-error="Please enter your name"
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group label-floating">
                                            <label className="control-label" htmlFor="email">Email</label>
                                            <input
                                                className="form-control"
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                data-error="Please enter your Email"
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group label-floating">
                                            <label className="control-label">Subject</label>
                                            <input
                                                className="form-control"
                                                id="msg_subject"
                                                type="text"
                                                name="subject"
                                                required
                                                data-error="Please enter your message subject"
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group label-floating">
                                            <label htmlFor="message" className="control-label">Message</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                id="message"
                                                name="message"
                                                required
                                                data-error="Write your message"
                                            ></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        {confirmationMessage && (
                                            <div className="text-success text-center mb-3">
                                                {confirmationMessage}
                                            </div>
                                        )}

                                        <div className="form-submit mt-3 text-center">
                                            <button className="btn btn-outline-dark btn-rounded" id="addbutton" type="submit">
                                                <i className="material-icons mdi mdi-message-outline"></i> 
                                                Send Message
                                            </button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default Contactus;
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { name, subject, email, message } = data;

        const templateParams = {
            from_name: name,
            subject: subject,
            from_email: email,
            message: message
        };

        emailjs.send('service_gwtturt', 'portfolio-contact', templateParams, 'ojMHQSVQUurZVEZb5')
            .then(function (response) {
                if (response.status === 200) {
                    toast.success('Message Sent Successfully', {
                        position: toast.POSITION.BOTTOM_CENTER
                    })
                }


            }, function (error) {
                toast.error('Fail to sent.Try again!', {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            });

    }

    return (
        <div id='contact' className='px-4 lg:px-12 pt-12 lg:py-12  scroll-mt-[50px]'>
            <div className='pb-12'>
                <h1 className=' whitespace-nowrap  uppercase text-2xl lg:text-4xl font-semibold border-b-4 border-primary pb-2 w-60'> Contact</h1>
                <h2 className='font-bold text-[25px] lg:text-[50px] leading-tight text-accent'>Send me a message!</h2>
            </div>

            <div className="card w-96 lg:w-[1000px] bg-base-100 contact-info mx-auto ">
                <div className="card-body sm:mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className='gap-5'>

                        {/* your name */}
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: 'Field is required'
                            },
                            minLength: {
                                value: 5,
                                message: 'Minimum length should be 5.'
                            }
                        })} type="text" placeholder="Type name" className="input input-bordered w-full sm:w-[400px]  lg:w-[815px]" />

                        {
                            errors?.name &&
                            <label className="label pt-0 ml-1">
                                <span className="label-text-alt text-red-500 flex justify-center"><MdError className='' /><p className=''> {errors?.name?.message}</p></span>
                            </label>
                        }



                        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                            <div>
                                {/* subject */}
                                <input {...register("subject", {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Minimum length should be 5.'
                                    }
                                })} type="text" placeholder="Type subject" className="input input-bordered w-full max-w-[800px] lg:w-[400px]" />

                                {
                                    errors?.subject &&
                                    <label className="label pt-0 ml-1">
                                        <span className="label-text-alt text-red-500 flex justify-center"><MdError className='' /><p className=''> {errors?.subject?.message}</p></span>
                                    </label>
                                }
                            </div>

                            <div>
                                {/* your email */}
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address.'
                                    }
                                })} type="text" placeholder="Type email" className="input input-bordered w-full max-w-[400px] lg:w-[400px]" />

                                {
                                    errors?.email &&
                                    <label className="label pt-0 ml-1">
                                        <span className="label-text-alt text-red-500 flex justify-center"><MdError className='' /><p className=''> {errors?.email?.message}</p></span>
                                    </label>
                                }
                            </div>



                        </div>
                        {/* message */}
                        <textarea  {...register("message", {
                            required: {
                                value: true,
                                message: 'Field is required'
                            },
                            minLength: {
                                value: 10,
                                message: 'Message has minimum 10 character.'
                            }
                        })} type="textarea " placeholder="Type message..." className="textarea  input-bordered w-full lg:w-[815px] lg:h-36" />

                        {
                            errors?.message &&
                            <label className="label pt-0 ml-1">
                                <span className="label-text-alt text-red-500 flex justify-center"><MdError className='' /><p className=''> {errors?.message?.message}</p></span>
                            </label>
                        }

                        <div className='pb-6 ml-2 mt-2 mx-auto flex'>
                            <button type='submit' className="btn btn-primary rounded-full hover:bg-secondary hover:text-white border-0 w-36 lg:w-44">Send message</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;
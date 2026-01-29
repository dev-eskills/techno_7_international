import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactForm() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Replace these with your actual IDs from EmailJS Dashboard
        // Use import.meta.env for Vite projects
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                toast.success('🚀 Message sent successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                form.current.reset();
            }, (error) => {
                toast.error('❌ Failed to send. Please try again later.');
                console.error(error.text);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-12 max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg text-black/60">
                        Have questions about our courses or need technical support? We're here to help you succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">

                    {/* Left Side: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40">Visit Us</h3>
                            <p className="mt-3 text-lg text-black">4th Floor, Apollo Avenue, Above Nafees Restaurant,</p>
                            <p className="text-lg text-black">Guitar Square, Old Palasia, Indore</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40">Email Us</h3>
                            <p className="mt-3 text-lg text-black">techno7international@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40">Support Hours</h3>
                            <p className="mt-3 text-lg text-black">Monday — Friday, 9am — 6pm IST</p>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-6 border-t border-black/5 pt-8 lg:border-none lg:pt-0">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-black">First Name</label>
                                <input
                                    type="text"
                                    name="first_name" // Ensure this matches {{first_name}} in your template
                                    id="first-name"
                                    required
                                    className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                    placeholder="Aaisha"
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-black">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last-name"
                                    required
                                    className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                    placeholder="Khan"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                required
                                className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-black">Interested Course</label>
                            <select
                                id="course"
                                name="course_name"
                                className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black appearance-none"
                            >
                                <option>Graphic Designing</option>
                                <option>Digital Marketing</option>
                                <option>Video Editing</option>
                                <option>Graphic Design + Video Editing</option>
                                <option>All-In-One Course</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className={`w-full rounded-md px-6 py-4 text-sm font-bold text-white transition active:scale-[0.98] ${isSending ? 'bg-black/50 cursor-not-allowed' : 'bg-black hover:bg-black/90'}`}
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}


// import React from 'react';

// export default function ContactForm() {
//     return (
//         <section className="bg-white py-16 md:py-24">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//                 {/* Header Section */}
//                 <div className="mb-12 max-w-2xl">
//                     <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
//                         Get in Touch
//                     </h2>
//                     <p className="mt-4 text-lg text-black/60">
//                         Have questions about our courses or need technical support? We're here to help you succeed.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">

//                     {/* Left Side: Contact Info */}
//                     <div className="space-y-8">
//                         <div>
//                             <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40">Visit Us</h3>
//                             <p className="mt-3 text-lg text-black">4th Floor, Apollo Avenue, Above Nafees Restaurant,</p>
//                             <p className="mt-3 text-lg text-black">Guitar Square, Old Palasia, Indore</p>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40">Email Us</h3>
//                             <p className="mt-3 text-lg text-black">techno7international@gmail.com</p>
//                         </div>
//                         <div>
//                             <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40">Support Hours</h3>
//                             <p className="mt-3 text-lg text-black">Monday — Friday, 9am — 6pm IST</p>
//                         </div>
//                     </div>

//                     {/* Right Side: The Form */}
//                     <form className="space-y-6 border-t border-black/5 pt-8 lg:border-none lg:pt-0">
//                         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                             <div>
//                                 <label htmlFor="first-name" className="block text-sm font-medium text-black">First Name</label>
//                                 <input
//                                     type="text"
//                                     id="first-name"
//                                     className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
//                                     placeholder="Aaisha"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="last-name" className="block text-sm font-medium text-black">Last Name</label>
//                                 <input
//                                     type="text"
//                                     id="last-name"
//                                     className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
//                                     placeholder="Khan"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
//                                 placeholder="you@example.com"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="course" className="block text-sm font-medium text-black">Interested Course</label>
//                             <select
//                                 id="course"
//                                 className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black appearance-none"
//                             >
//                                 <option>Graphic Designing</option>
//                                 <option>Digital Marketing</option>
//                                 <option>Video Editing</option>
//                                 <option>Other</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
//                             <textarea
//                                 id="message"
//                                 rows={4}
//                                 className="mt-2 block w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
//                                 placeholder="How can we help you?"
//                             ></textarea>
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full rounded-md bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-black/90 active:scale-[0.98]"
//                         >
//                             Send Message
//                         </button>
//                     </form>

//                 </div>
//             </div>
//         </section>
//     );
// }
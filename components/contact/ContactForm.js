import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import Notification from '../ui/notification';

import styles from './ContactForm.module.css';

const ContactForm = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!status && status === 'pending') return;

        const timer = setTimeout(() => {
            setError(null);
            setStatus('');
            notif = null;
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [status]);

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());

        setStatus('pending');

        try {
            const res = await axios.post('/api/contact', formData);
            setStatus('success');
        } catch (err) {
            console.log(err);
            setError(err);
            setStatus('error');
        }
    };

    let notif;
    if (status === 'pending') {
        notif = {
            title: 'Loading',
            message: 'Please wait...',
            status: 'pending',
        };
    }

    if (status === 'success') {
        notif = {
            title: 'Message send',
            message: 'Successfully send a message',
            status: 'success',
        };
    }

    if (status === 'error') {
        notif = {
            title: 'Error!',
            message: error.message || 'Something went wrong',
            status: 'error',
        };
    }

    return (
        <section className={styles.contact}>
            <h1>Feel Free to Send Me A Message</h1>

            <form onSubmit={submitHandler} ref={formRef} className={styles.form}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className={styles.control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                </div>

                <div className={styles.control}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required />
                </div>

                <div className={styles.actions}>
                    <button>Send</button>
                </div>
            </form>

            {notif && (
                <Notification
                    title={notif.title}
                    status={notif.status}
                    message={notif.message}
                />
            )}
        </section>
    );
};

export default ContactForm;

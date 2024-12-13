import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add your logic for API calls here to send data to AWS
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
            >
                <option value="">Select Service</option>
                <option value="Cloud">Cloud</option>
                <option value="Network Security">Network Security</option>
                <option value="Digital Commerce">Digital Commerce</option>
                <option value="Learning & Development">Learning & Development</option>
                <option value="Process Consulting">Process Consulting</option>
                <option value="AI & Analytics">AI & Analytics</option>
                <option value="Marketing, Sales Consulting and Strategy">Marketing, Sales Consulting and Strategy</option>
                <option value="Cyber Risk Advisory">Cyber Risk Advisory</option>
                <option value="Talent Resourcing and Management">Talent Resourcing and Management</option>
                <option value="Brand Communications & PR">Brand Communications & PR</option>
                <option value="Customer Communications Management">Customer Communications Management</option>
                <option value="Sentiment Analysis & Opinion Mining">Sentiment Analysis & Opinion Mining</option>
                {/* Add more options as needed */}
            </select>
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit Query</button>
        </form>
    );
};

export default ContactForm;

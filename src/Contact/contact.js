import { useState, useEffect } from "react";
import './contact.css';


function Contact() {
    const initialValues = { name: "", email: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormerrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value });  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormerrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);  
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    },[formErrors])
    const validate = (values) => {
        const errors = {}
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if(!values.email) {
            errors.email = "Email is required!";
        } else if(!regex.test(values.email)) {
            errors.email = "This is not an email!";
        }
        if(!values.message) {
            errors.message = "Are you sure you don't want to type a message?";
        } else if (values.message.length < 4) {
            errors.password = "Feedback must be more than 4 characters";
        }else if (values.message.length > 100) {
            errors.message = "Feedback must be less than 100 characters";
        }
        return errors;
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Reach Out Us</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Name" 
                          value={ formValues.name}
                          onChange={handleChange}
                          />
                    </div>
                    <p>{ formErrors.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Email" 
                          value={ formValues.email}
                          onChange={handleChange}
                          />
                    </div>

                    <div className="message2">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="b2"></textarea>
                    </div>
                    <p>{formErrors.message}</p>
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
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
            errors.email = "This is not a valid email format!";
        }
        if(!values.message) {
            errors.message = "Message is required!";
        } else if (values.message.length < 4) {
            errors.password = "Feedback must be more than 4 characters";
        }else if (values.message.length > 100) {
            errors.message = "Feedback must be less than 100 characters";
        }
        return errors;
    };

    return (
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Submitted!</div>
            ) : (
              <pre>{ JSON.stringify(formValues, undefined, 2)}</pre>
            )}
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
                    <p>{ formErrors.email}</p>
                    <div className="field">
                        <label>Leave a Message</label>
                        <input
                          type="password" 
                          name="password" 
                          placeholder="Message" 
                          value={ formValues.message}
                          onChange={handleChange}
                          />
                    </div>
                    <p>{formErrors.message}</p>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
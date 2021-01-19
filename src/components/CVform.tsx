import { useForm } from "react-hook-form";
import {useState} from "react";
import "./cv-form.css";

export default () => {
    const [works, setWorks] = useState([]);
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
        <div className="cv-header">
            <h1>Resumenator - Easy-to-use resume generator</h1>
        </div>

        <div className="cv-form">
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="basic-info form-data">
            <h2>Basic information</h2>
            <h3>Name</h3>
                <input type="text" placeholder="John Doe" 
                name="name" ref={register({required: "Name required"})} />
                {errors.title && <p>{errors.name.message}</p>}

                <h3>Date of birth</h3>
                <input type="text" placeholder="1.1.1900" name="dateofbirth" 
                ref={register({required: "Date of birth required"})} />
                {errors.dateofbirth && <p>{errors.dateofbirth.message}</p>}

                <h3>Address</h3>
                <input type="text" placeholder="example street 33" name="address"
                ref={register({required: "Address required"})} />
                {errors.address && <p>{errors.address.message}</p>}

                <h3>City</h3>
                <input type="text" placeholder="Washington DC" name="city"
                ref={register({required: "City required"})} />
                {errors.city && <p>{errors.city.message}</p>}

                <h3>Postal code</h3>
                <input type="text" placeholder="00010" name="postcode"
                ref={register({required: "Postal code required"})} />
                {errors.postcode && <p>{errors.postcode.message}</p>} 

                <h3>Telephone</h3>
                <input type="text" placeholder="00 123 4657" name="telephone"
                ref={register({required: "Telephone required"})} />
                {errors.telephone && <p>{errors.telephone.message}</p>}

                <h3>Email</h3>
                <input type="text" placeholder="john.doe@examplemail.com" name="email"
                ref={register({required: "Email required"})} />
                {errors.email && <p>{errors.email.message}</p>}

                <h3>Make sure every field is filled!</h3>
                <button onClick={() => {
                    const basicInfo = document.getElementsByClassName("basic-info") as HTMLCollectionOf<HTMLElement>;
                    const profile = document.getElementsByClassName("profile") as HTMLCollectionOf<HTMLElement>;
                    basicInfo[0].style.display = "none";
                    profile[0].style.display = "flex";
                }} >Next</button>
            </div>



            <div className="profile form-data">
                Write a short description of yourself
                <textarea name="description" id="profile-description"
                rows={25} placeholder="My name is John Doe and I like strawberries"
                ref={register({required: "Description is required"})} />
                <h3>Make sure every field is filled!</h3>
                 <button onClick={() => {
                    const workingExperience = document.getElementsByClassName("working-experience") as HTMLCollectionOf<HTMLElement>;
                    const profile = document.getElementsByClassName("profile") as HTMLCollectionOf<HTMLElement>;
                    profile[0].style.display = "none";
                    workingExperience[0].style.display = "flex";
                }} >Next</button>
            </div>
                

            <div className="working-experience form-data">

                <h2>Working experience</h2>
                {
                    [0, 1, 2, 3, 4].map(i => {
                        if (i === 0) {
                            return (
                                <div className="work" key={i}>
                                    <h3>Company</h3>
                                    <input type="text" name={"company" + i.toString()} placeholder="Example company Inc"
                                    ref={register} />

                                    <h3>Role</h3>
                                    <input type="text" name={"role" + i.toString()} placeholder="Janitor" ref={register} />

                                    <h3>What did you do?</h3>
                                    <textarea rows={6}name={"working-experience" + i.toString()} placeholder="I cleaned up places" />

                                    <h3>When did you work there?</h3>
                                    <input type="text" name={"working-date" + i.toString()} placeholder="2014-" ref={register} />
                                 </div>
                            );
                        } else {
                            return (
                                <div className="work" key={i}>
                                <h3>Company</h3>
                                <input type="text" name={"company" + i.toString()} placeholder=""
                                ref={register} />

                                <h3>Role</h3>
                                <input type="text" name={"role" + i.toString()} placeholder="" ref={register} />

                                <h3>What did you do?</h3>
                                <textarea rows={6} name={"working-experience" + i.toString()} placeholder="" />

                                <h3>When did you work there?</h3>
                                <input type="text" name={"working-date" + i.toString()} placeholder="" ref={register} />
                             </div>
                            );
                        }
                        
                    })
                }
                <input type="submit" />
            </div>

                
            </form>
        </div>
        </>
    );
}
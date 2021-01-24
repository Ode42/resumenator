import { useForm } from "react-hook-form";
import {useState} from "react";
import dataStructure from './utils/dataStructure';
import "./cv-form.css";
import unformattedData from './utils/interfaces/unformattedData';
import {Link} from 'react-router-dom';

export default (props:any) => {
    const [cvData, setCvData] = useState({});
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data:unformattedData) => {
        setCvData(dataStructure(data));
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
                    window.scroll(0, 0);
                }} >Next</button>
            </div>



            <div className="profile form-data">
                Write a short description of yourself
                <textarea name="description" id="profile-Description"
                rows={25} cols={45} placeholder="My name is John Doe and I like strawberries"
                ref={register({required: "Description is required"})} />
                <h3>Make sure every field is filled!</h3>
                 <button onClick={() => {
                    const workingExperience = document.getElementsByClassName("working-experience") as HTMLCollectionOf<HTMLElement>;
                    const profile = document.getElementsByClassName("profile") as HTMLCollectionOf<HTMLElement>;
                    profile[0].style.display = "none";
                    workingExperience[0].style.display = "flex";
                    window.scroll(0, 0);
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
                                    <textarea rows={6}name={"workingExperience" + i.toString()} placeholder="I cleaned up places" ref={register} />

                                    <h3>When did you work there?</h3>
                                    <input type="text" name={"workingDate" + i.toString()} placeholder="2014-" ref={register} />
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
                                <textarea rows={6} name={"workingExperience" + i.toString()} placeholder="" ref={register} />

                                <h3>When did you work there?</h3>
                                <input type="text" name={"workingDate" + i.toString()} placeholder="" ref={register} />
                             </div>
                            );
                        }
                        
                    })
                }
                <button onClick={() => {
                const education = document.getElementsByClassName("education") as HTMLCollectionOf<HTMLElement>;
                const workingExperience = document.getElementsByClassName("working-experience") as HTMLCollectionOf<HTMLElement>;
                workingExperience[0].style.display = "none";
                education[0].style.display = "flex";
                window.scroll(0, 0);
                }}>Next</button>
            </div>


            <div className="education form-data">
                <h2>Education</h2>
                {
                    [0, 1, 2, 3].map(i => {
                        if (i !== 0) {
                        return (
                            <div className="school" key={i}>
                                <h3>School</h3>

                                <input type="text" name={"school" + i.toString()}
                                placeholder="" ref={register} />

                                <h3>Degree</h3>
                                <input type="text" name={"degree" + i.toString()}
                                placeholder="" ref={register} />

                                <h3>What did you study?</h3>
                                <textarea rows={6} name={"orientation" + i.toString()}
                                placeholder="" ref={register} />

                                <h3>When did you study there?</h3>
                                <input type="text" name={"studyDate" + i.toString()}
                                ref={register} />
                            </div>
                        );
                        } else {
                            return (
                                <div className="school" key={i}>
                                <h3>School</h3>

                                <input type="text" name={"school" + i.toString()}
                                placeholder="Harvard University" ref={register} />

                                <h3>Degree</h3>
                                <input type="text" name={"degree" + i.toString()}
                                placeholder="doctor" ref={register} />

                                <h3>What did you study?</h3>
                                <textarea rows={6} name={"orientation" + i.toString()}
                                placeholder="I studied biology" ref={register} />

                                <h3>When did you study there?</h3>
                                <input type="text" name={"studyDate" + i.toString()}
                                placeholder="1999-2007" ref={register} />
                                </div>
                            );
                            
                        }
                    })
                }
                <button onClick={() => {
                const languages = document.getElementsByClassName("languages") as HTMLCollectionOf<HTMLElement>;
                const education = document.getElementsByClassName("education") as HTMLCollectionOf<HTMLElement>;
                education[0].style.display = "none";
                languages[0].style.display = "flex";
                window.scroll(0, 0);
                }}>Next</button>
            </div>

            <div className="languages form-data">
                <h2>Language knowledge</h2>
                {
                    [0, 1, 2, 3].map(i => {
                        if (i !== 0 && i !== 1) {
                            return (
                                <div className="language" key={i}>
                                    <h3>Language</h3>
                                    <input type="text" name={"language" + i.toString()}
                                    ref={register} />

                                    <h3>Skill level</h3>
                                    <input type="text" name={"languageSkill" + i.toString()}
                                    ref={register} />
                                </div>
                            );
                        } else if (i === 0) {
                            return (
                                <div className="language" key={i} >
                                    <h3>Language</h3>
                                    <input type="text" name={"language" + i.toString()}
                                    placeholder="English" ref={register} />

                                    <h3>Skill level</h3>
                                    <input type="text" name={"languageSkill" + i.toString()}
                                    placeholder="mother tongue" ref={register} />
                                </div>
                            );
                        } else {
                            return (
                                <div className="language" key={i}>
                                    <h3>Language</h3>
                                    <input type="text" name={"language" + i.toString()}
                                    placeholder="Finnish" ref={register} />

                                    <h3>Skill level</h3>
                                    <input type="text" name={"languageSkill" + i.toString()}
                                    placeholder="excellent" ref={register} />
                                </div>
                            );
                        }
                    })
                }
            <button onClick={() => {
                const courses = document.getElementsByClassName("courses") as HTMLCollectionOf<HTMLElement>;
                const languages = document.getElementsByClassName("languages") as HTMLCollectionOf<HTMLElement>;
                languages[0].style.display = "none";
                courses[0].style.display = "flex";
                window.scroll(0, 0);
                }}>Next</button>
            </div>
            <div className="courses form-data">
                <h2>Certifications</h2>
                {
                [0, 1, 2, 3, 4].map(i => {
                    if (i !== 0) {
                        return (
                            <div className="course" key={i}>
                                <h3>Course</h3>
                                <input type="text" name={"course" + i.toString()}
                                ref={register} />

                                <h3>Graduate date</h3>
                                <input type="text" name={"courseDate" + i.toString()}
                                ref={register} />
                            </div>
                        );
                    } else {
                        <div className="course" key={i}>
                                <h3>Certification</h3>
                                <input type="text" name={"course" + i.toString()}
                                placeholder="hygiene proficiency certification" ref={register} />

                                <h3>Graduate date</h3>
                                <input type="text" name={"courseDate" + i.toString()}
                                placeholder="4.4.1999" ref={register} />
                            </div>
                    }
                })
                }
            <button onClick={() => {
                const references = document.getElementsByClassName("references") as HTMLCollectionOf<HTMLElement>;
                const courses = document.getElementsByClassName("courses") as HTMLCollectionOf<HTMLElement>;
                courses[0].style.display = "none";
                references[0].style.display = "flex";
                window.scroll(0, 0);
                }}>Next</button>
            </div>


            <div className="references form-data">
                <h2>References</h2>
                {
                    [0, 1, 2, 3].map(i => {
                        if (i !== 0) {
                            return (
                                <div className="reference" key={i}>
                                    <h3>Reference</h3>
                                    <input type="text" name={"reference" + i.toString()}
                                    ref={register} />

                                    <h3>Contact details</h3>
                                    <input type="text" name={"referenceContact" + i.toString()}
                                    ref={register} />
                                </div>
                            );
                        } else {
                            return (
                                <div className="reference" key={i}>
                                    <h3>Reference</h3>
                                    <input type="text" name={"reference" + i.toString()}
                                    placeholder="John Doe sr." ref={register} />

                                    <h3>Contact details</h3>
                                    <input type="text" name={"referenceContact" + i.toString()}
                                    placeholder="Phone: 01 234 2132, email: john.doe@inc.com" ref={register} />
                                </div>
                            );
                        }
                    })
                }
                
                <button type="submit"><Link to={{pathname: "/cv", cvData:cvData }}>Next</Link></button>
            </div>
                
            </form>
        </div>
    </>
    );
}
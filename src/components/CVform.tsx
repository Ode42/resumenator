import { useForm } from "react-hook-form";

export default () => {
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
                
                <input type="submit" />
            </form>
        </div>
        </>
    );
}
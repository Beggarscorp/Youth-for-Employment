import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react"

const BeAVolunteerForm = () => {
    return (
        <>
            <div className="container-fluid px-0">
                <div className="banner py-5 text-center">
                    <h2 className='heading-border w-25 w-sm-100'>Be a Volunteer</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <FormfacadeEmbed
                            formFacadeURL="https://formfacade.com/include/101752765439275883860/form/1FAIpQLSfWXEo6MVeRiwdpioadL6JEKlgog1B7yAbyqE1zm9VSq1Niaw/classic.js/?div=ff-compose"
                            onSubmitForm={() => console.log('Form submitted')}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default BeAVolunteerForm

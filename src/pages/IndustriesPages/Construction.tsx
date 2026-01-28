import React from 'react'
import IntroComponent from '../../components/IntroComponent/IntroComponent'
import IndustryProcess from '../../components/IndustryProcess/IndustryProcess'

const Construction: React.FC = () => {
    return (
        <>
            <IntroComponent
                title="Construction Management Software"
                description="Digital transformation for the construction industry, from project management to resource tracking and reporting."
            />
            <IndustryProcess 
            titleMain='Construction Software Development'
            />
        </>
    )
}

export default Construction

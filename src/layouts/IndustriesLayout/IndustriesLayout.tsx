import React, { useState, useCallback, useMemo } from 'react'
import { Outlet, useLocation } from 'react-router'
import Partners from '../../components/Partners/Partners'
import IndustryProcess from '../../components/IndustryProcess/IndustryProcess'
import Technologies from '../../components/Slider/Slider'
import ContactForm from '../../components/ContactForm/ContactForm'
import DeliverMVP, { type DeliverMVPProps } from '../../components/DeliverMVP/DeliverMVP'

export interface ProcessTitleData {
    titleMain: string;
    titleAccent?: string;
    titleEnd?: string;
}

export interface IndustriesContextType {
    setProcessTitle: React.Dispatch<React.SetStateAction<ProcessTitleData>>;
    setDeliverMVPData?: React.Dispatch<React.SetStateAction<DeliverMVPProps['data'] | null>>;
}

const DEFAULT_DELIVER_MVP_DATA: DeliverMVPProps['data'] = {
    label: "WHY CHOOSE LEAPSOFTS",
    title: "How Can We Deliver Your MVP in",
    accentText: "3-5 months?",
    description: "Leapsofts is a custom software development company that engineers tailored digital platforms for enterprise scale and startup velocity. Leveraging structured agile sprints, proprietary delivery frameworks, CI/CD pipelines, and deep domain intelligence, we consistently ship production-grade MVPs within 3 to 5 months.",
    items: [
        {
            title: "Proven Engineering Methodologies.",
            description: "We follow automated test-driven development, zero-trust security reviews, and continuous deployment pipelines to accelerate delivery while ensuring enterprise-grade stability."
        },
        {
            title: "Domain-Specific Architecture.",
            description: "From day one, our systems are architected with industry-specific compliance, high-concurrency data models, and resilient third-party integrations tailored to your sector."
        },
        {
            title: "Transparent, Milestone-Driven Governance.",
            description: "Whether engaging via dedicated engineering pods or fixed-scope sprints, we provide full transparency, weekly demo deliverables, and clear sprint velocity metrics."
        },
        {
            title: "Rapid Market Validation & Scale.",
            description: "We build with modular microservices and scalable cloud foundations, ensuring your MVP transitions seamlessly from pilot traction into high-volume enterprise operations."
        }
    ]
};

const IndustriesLayout: React.FC = () => {
    const location = useLocation();

    const [processTitle, setProcessTitle] = useState<ProcessTitleData>({
        titleMain: "App Development",
        titleAccent: "Process"
    });
    const [deliverMVPData, setDeliverMVPData] = useState<DeliverMVPProps['data'] | null>(null);

    // Safeguard setters against duplicate renders / infinite loops
    const setProcessTitleSafe = useCallback((action: React.SetStateAction<ProcessTitleData>) => {
        setProcessTitle(prev => {
            const next = typeof action === 'function' ? action(prev) : action;
            if (
                prev.titleMain === next.titleMain &&
                prev.titleAccent === next.titleAccent &&
                prev.titleEnd === next.titleEnd
            ) {
                return prev;
            }
            return next;
        });
    }, []);

    const setDeliverMVPDataSafe = useCallback((action: React.SetStateAction<DeliverMVPProps['data'] | null>) => {
        setDeliverMVPData(prev => {
            const next = typeof action === 'function' ? action(prev) : action;
            if (JSON.stringify(prev) === JSON.stringify(next)) {
                return prev;
            }
            return next;
        });
    }, []);

    const contextValue: IndustriesContextType = useMemo(() => ({
        setProcessTitle: setProcessTitleSafe,
        setDeliverMVPData: setDeliverMVPDataSafe
    }), [setProcessTitleSafe, setDeliverMVPDataSafe]);

    const activeDeliverMVP = deliverMVPData || DEFAULT_DELIVER_MVP_DATA;

    return (
        <>
            <Outlet key={location.pathname} context={contextValue} />
            <Partners />
            <DeliverMVP data={activeDeliverMVP} />
            <Technologies />
            <IndustryProcess
                titleMain={processTitle.titleMain}
                titleAccent={processTitle.titleAccent}
                titleEnd={processTitle.titleEnd}
            />
            <ContactForm />
        </>
    )
}
export default IndustriesLayout
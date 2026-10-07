interface FAQItem {
    question: string;
    answer: string;
}

import data from '../data/faqs.json';

const fetchFaqs = (serviceKey: string): FAQItem[] => {
    const FAQsData = data[serviceKey] || [];
    return FAQsData;
}

export default fetchFaqs;
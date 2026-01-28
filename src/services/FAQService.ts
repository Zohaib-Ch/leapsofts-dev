interface FAQItem {
    question: string;
    answer: string;
}

const response = await fetch('/FAQs/faqs.json');
const data = await response.json();

const fetchFaqs = (serviceKey: string): FAQItem[] => {
    const FAQsData = data[serviceKey] || [];
    return FAQsData;
}

export default fetchFaqs;
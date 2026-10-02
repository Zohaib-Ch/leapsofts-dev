import axios from 'axios';

export interface mailBody {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export interface MailResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export const sendMail = async (body: mailBody): Promise<MailResponse> => {
    try {
        const response = await axios.post(
            'https://company-contact-form-mail-servern.vercel.app/mail2/send-email/Leapsofts',
            { body },
            { timeout: 15000 }
        );
        return { success: true, data: response.data };
    } catch (error: any) {
        console.error('Mail delivery failed:', error);
        return {
            success: false,
            error: error.response?.data?.message || error.message || 'Unable to send message. Please try again later or reach out to contact@leapsofts.com directly.'
        };
    }
};

    
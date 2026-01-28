import axios from  'axios';

export interface mailBody{
    name: string,
    email: string,
    phone: string,
    company: string,
    message: string,
}

export const sendMail = async (body: mailBody) => {
    try {
        const response = await axios.post('https://company-contact-form-mail-servern.vercel.app/mail2/send-email/Leapsofts', {
            body
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
    
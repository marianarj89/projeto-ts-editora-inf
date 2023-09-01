require('dotenv').config();
const nodemailer = require('nodemailer'); //enviar emails
const hbs = require('nodemailer-express-handlebars');  // permitem anexar nesse email um template html para que seja enviado no corpo
const exphbs = require('exphbs');
const { resolve } = require('path');

export default class Mail {
    transporter: any; //instancia que trazemos do nodemailer que carrega as configs de envio de email, carrega todas as configs necessárias
    constructor(rootdir: string | null) {
        this.transporter = nodemailer.createTransport({
            port: process.env.MAIL_PORT,
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_PASSWORD
            },
            secure:true //referente ao TLS do gmail
            
        });

        if(rootdir){
            const viewPath = resolve(rootdir, "views");
            this.transporter.use("compile", hbs({
                viewEngine: exphbs.create({
                    defaultLayout: 'default',
                    extname: '.hbs',
                }),
                viewPath,
                extname: '.hbs', //documentação pere essa repetição
            }));
        }
    }
    public async sendEmail(to: string | null, subject: string | null, template: string | null, context: any){
        const data = {
            from: process.env.EMAIL,
            to,
            subject,
            template,
            context
        }
            //context json passado com chave valor, cada chave valor se otorna uma possível variável dentro do confirm-emails.hbs, replica informaçòes de var no email exemplo, email personalizado com nome e etc.

       
        try {
            return await this.transporter.sendMail({
                
            })
            
        } catch (error) {
            throw error;
            
        }
    }
}
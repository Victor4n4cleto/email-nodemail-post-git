

const nodemailer = require('nodemailer'); // chama as ferramentas do pacote
const SMTPTransport = require('nodemailer/lib/smtp-transport');

const SMTP_CONFIG = require('./config/smtp'); // pega os dados do arquivo de config



// configurado conexao entre app === servidor 
const transport = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    },

});

async function run() {
    const mailSent = await transport.sendMail({
        text: `Olá, saudações ! 
        \n\ Conteúdo com todas as informações.`, // mensagem que quer enviar
        subject: `Mensagem automática`, // assunto do email 
        from: ``, // quem esta enviando
        to: [' '], // email para onde será enviado
        bcc: [' '], // email em copia oculta 
    });

    console.log(mailSent);
}

run();
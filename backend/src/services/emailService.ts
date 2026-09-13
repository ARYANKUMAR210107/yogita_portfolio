import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isConfigured: boolean = false;

  constructor() {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      this.transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: parseInt(SMTP_PORT, 10) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
      this.isConfigured = true;
      console.log('✅ Email service configured successfully');
    } else {
      console.log('⚠️  Email service not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env');
      console.log('   Contact form submissions will be logged to console instead.');
    }
  }

  async sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    const { name, email, subject, message } = data;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'yogitasharma3372@gmail.com';

    // Always log the submission
    console.log('\n📧 New Contact Form Submission:');
    console.log(`   From: ${name} <${email}>`);
    console.log(`   Subject: ${subject}`);
    console.log(`   Message: ${message}`);
    console.log('');

    if (!this.isConfigured || !this.transporter) {
      return {
        success: true,
        message: 'Message received successfully! (Email delivery pending SMTP configuration)',
      };
    }

    try {
      await this.transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: receiverEmail,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">New Portfolio Contact</h2>
            <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 16px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="padding: 16px 0;">
              <h3>Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      });

      return {
        success: true,
        message: 'Message sent successfully!',
      };
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later or contact directly.',
      };
    }
  }
}

export const emailService = new EmailService();

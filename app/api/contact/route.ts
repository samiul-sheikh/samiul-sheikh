import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the expected request body type
interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // Validate required fields
        const { firstName, lastName, email, phone, service, message } = body;

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "Please fill in all required fields" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address" },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error("Missing email configuration");
            return NextResponse.json(
                { error: "Server configuration error. Please try again later." },
                { status: 500 }
            );
        }

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email content for you (the portfolio owner)
        const mailOptionsToOwner = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Send to yourself
            replyTo: email, // Reply goes to the sender
            subject: `🚀 New Portfolio Contact: ${service || "General Inquiry"}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden;">
                    <div style="background: linear-gradient(90deg, #00d4ff 0%, #0066ff 100%); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
                    </div>
                    
                    <div style="padding: 30px; color: #e0e0e0;">
                        <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                            <h3 style="color: #00d4ff; margin-top: 0; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">📋 Contact Details</h3>
                            <p style="margin: 8px 0;"><strong style="color: #00d4ff;">Name:</strong> ${firstName} ${lastName}</p>
                            <p style="margin: 8px 0;"><strong style="color: #00d4ff;">Email:</strong> <a href="mailto:${email}" style="color: #00d4ff;">${email}</a></p>
                            <p style="margin: 8px 0;"><strong style="color: #00d4ff;">Phone:</strong> ${phone || "Not provided"}</p>
                            <p style="margin: 8px 0;"><strong style="color: #00d4ff;">Service:</strong> ${service || "Not specified"}</p>
                        </div>
                        
                        <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px;">
                            <h3 style="color: #00d4ff; margin-top: 0; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">💬 Message</h3>
                            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                        
                        <div style="margin-top: 30px; text-align: center;">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(90deg, #00d4ff 0%, #0066ff 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-weight: bold;">Reply to ${firstName}</a>
                        </div>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.3); padding: 20px; text-align: center; color: #888;">
                        <p style="margin: 0; font-size: 12px;">Sent from your portfolio contact form</p>
                    </div>
                </div>
            `,
        };

        // Email content for the sender (confirmation)
        const mailOptionsToSender = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Thank you for reaching out! 🙌",
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden;">
                    <div style="background: linear-gradient(90deg, #00d4ff 0%, #0066ff 100%); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">Thanks for contacting me!</h1>
                    </div>
                    
                    <div style="padding: 30px; color: #e0e0e0;">
                        <p style="font-size: 18px;">Hi ${firstName}! 👋</p>
                        
                        <p style="line-height: 1.8;">Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
                        
                        <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin: 20px 0;">
                            <h3 style="color: #00d4ff; margin-top: 0;">📝 Your Message Summary</h3>
                            <p><strong style="color: #00d4ff;">Service Interest:</strong> ${service || "General Inquiry"}</p>
                            <p style="color: #aaa; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? "..." : ""}"</p>
                        </div>
                        
                        <p style="line-height: 1.8;">In the meantime, feel free to connect with me on LinkedIn or check out more of my work on GitHub.</p>
                        
                        <p style="margin-top: 30px;">Best regards,<br><strong style="color: #00d4ff;">Samiul Sheikh</strong></p>
                    </div>
                    
                    <div style="background: rgba(0,0,0,0.3); padding: 20px; text-align: center; color: #888;">
                        <p style="margin: 0; font-size: 12px;">This is an automated response. Please do not reply to this email.</p>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(mailOptionsToOwner),
            transporter.sendMail(mailOptionsToSender),
        ]);

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}

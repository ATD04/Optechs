import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RECEIVER_EMAIL = "t.optechs@optechs.io";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
    fullName: string;
    email: string;
    company: string;
    subject?: string;
    message: string;
};

function normalizeValue(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
    let body: Partial<ContactPayload>;

    try {
        body = (await request.json()) as Partial<ContactPayload>;
    } catch {
        return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const fullName = normalizeValue(body.fullName);
    const email = normalizeValue(body.email);
    const company = normalizeValue(body.company);
    const subject = normalizeValue(body.subject);
    const message = normalizeValue(body.message);

    if (!fullName || !email || !company || !message) {
        return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
        return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !fromEmail || Number.isNaN(smtpPort)) {
        console.error("Missing SMTP configuration for contact form.");
        return NextResponse.json({ error: "Contact service is not configured yet." }, { status: 500 });
    }

    const safeSubject = subject.replace(/[\r\n]+/g, " ").trim();

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    });

    try {
        await transporter.sendMail({
            from: `"OPTECHS Website" <${fromEmail}>`,
            to: RECEIVER_EMAIL,
            replyTo: email,
            subject: safeSubject ? `[Website Contact] ${safeSubject}` : "[Website Contact] New Message",
            text: [
                "New website contact form submission",
                "",
                `Name: ${fullName}`,
                `Email: ${email}`,
                `Company: ${company}`,
                `Subject: ${safeSubject || "(none)"}`,
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <h2>New website contact form submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Company:</strong> ${escapeHtml(company)}</p>
                <p><strong>Subject:</strong> ${escapeHtml(safeSubject || "(none)")}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to send contact form email:", error);
        return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
    }
}
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, guests, message } = await request.json();

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error("Missing Telegram configuration. Message not sent.");
            // We return success so the frontend UI doesn't crash during development
            return NextResponse.json({ success: true, warning: "Missing Telegram config" });
        } else {
            const telegramMessage = `🎊 *New Wedding RSVP!* 🎊\n\n👤 *Name:* ${name}\n👥 *Guests:* ${guests}${message ? `\n💬 *Wish:* _${message}_` : ''}`;

            const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

            const res = await fetch(telegramUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                    parse_mode: "Markdown"
                })
            });

            if (!res.ok) {
                console.error("Failed to send Telegram message", await res.text());
                throw new Error("Failed to send Telegram message");
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("RSVP Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

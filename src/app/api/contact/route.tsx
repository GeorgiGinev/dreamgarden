"use server";

import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;

export async function POST(request: Request) {
    const requestData = await request.json();

    // Set up OAuth2 client
    const oauth2Client = new OAuth2(
        process.env.GMAIL_CLIENT_ID,
        process.env.GMAIL_CLIENT_SECRET,
        'https://developers.google.com/oauthplayground' // Redirect URL
    );

    // Set refresh token
    oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    // Get access token
    const accessToken = await oauth2Client.getAccessToken();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            accessToken: accessToken?.token,
        },
    });

    // Set up email options
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "mezekliev@abv.bg",
        subject: 'Ново запитване в prikaznatagradina.bg',
        text: `Име: ${requestData.name}\nТелефон: ${requestData.phone}\nИмейл адрес: ${requestData.email}\nПредпочитана дата: ${requestData.date}\nДопълнителна информация: ${requestData.note}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ status: 200, message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ status: 500, message: 'Failed to send email' }), { status: 500 });
    }
}


function transformData(apiResponse: any) {
    return apiResponse.data.map((item: any) => ({
        specificAddress: item.attributes.specificAddress,
        phoneNumbers: Object.values(item.attributes.phoneNumbers),
        email: item.attributes.email,
        googleLocation: item.attributes.googleLocation,
        socialMediaAccounts: Object.keys(item.attributes.socialMediaAccounts).map((platform) => ({
            name: platform,
            url: item.attributes.socialMediaAccounts[platform],
        })),
        description: item.attributes.description,
    }));
}

export async function GET(request: Request) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);
    const response = await fetch(`${process.env.STRAPI_URL}contacts`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    });

    const apiResponse = await response.json();
    const transformedData = transformData(apiResponse);

    return NextResponse.json(transformedData, { status: 200 });
}

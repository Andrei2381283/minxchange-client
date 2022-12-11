import cookie from "cookie";
import { NextResponse, NextRequest } from 'next/server'
import { verifyToken } from '../utils/api';

export async function middleware(req, ev) {
    const { pathname } = req.nextUrl;
    if (pathname == '/admin') {
        const isVerify = await verifyToken(cookie.parse(req.headers.cookie || "").token || "");
        if(!isVerify) return NextResponse.redirect('/');
    }
    return NextResponse.next();
}
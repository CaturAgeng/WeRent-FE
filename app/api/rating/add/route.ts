// app/api/rating/add/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { userId, productId, value, fit_scale, description } = await req.json();

    // Validasi data yang diterima
    if (
        typeof userId !== 'number' ||
        typeof productId !== 'number' ||
        typeof value !== 'number' ||
        typeof fit_scale !== 'string' ||
        (description && typeof description !== 'string')
    ) {
        return NextResponse.json({ message: 'Invalid input data' }, { status: 400 });
    }

    // Validasi value harus antara 1 dan 5
    if (value < 1 || value > 5) {
        return NextResponse.json({ message: 'Rating value must be between 1 and 5' }, { status: 400 });
    }

    // Jika validasi berhasil, lanjutkan dengan proses penyimpanan data
    console.log('Received rating data:', { userId, productId, value, fit_scale, description });

    return NextResponse.json({ message: 'Rating submitted successfully' }, { status: 200 });
}

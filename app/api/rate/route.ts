import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    // Handle FormData sent from ReviewWrapper
    const formData = await req.formData();
    const userId = formData.get('userId');
    const productId = formData.get('productId');
    const description = formData.get('description');
    const fit_scale = formData.get('fit_scale');
    const file = formData.get('file');
    const ratingValue = formData.get('ratingValue');

    // Simulasi penyimpanan data ke database (Anda bisa mengganti dengan logic sebenarnya)
    console.log("Received review:", { userId, productId, description, fit_scale, file, ratingValue });

    // Return response
    return NextResponse.json({ message: 'Review submitted successfully' }, { status: 200 });
}

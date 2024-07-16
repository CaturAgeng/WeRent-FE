import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId, productId, value, fit_scale, description } = req.body;

        // Validasi data yang diterima
        if (
            typeof userId !== 'number' ||
            typeof productId !== 'number' ||
            typeof value !== 'number' ||
            typeof fit_scale !== 'string' ||
            (description && typeof description !== 'string')
        ) {
            return res.status(400).json({ message: 'Invalid input data' });
        }

        // Validasi value harus antara 1 dan 5
        if (value < 1 || value > 5) {
            return res.status(400).json({ message: 'Rating value must be between 1 and 5' });
        }

        // Jika validasi berhasil, lanjutkan dengan proses penyimpanan data
        console.log('Received rating data:', { userId, productId, value, fit_scale, description });

        res.status(200).json({ message: 'Rating submitted successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

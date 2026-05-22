'use client';

import Image from 'next/image';

export default function Product({ params }: { params: { name: string } }) {
    const { name } = params;
    const prod = `/path/to/${name}.jpg`;

    return (
        <div className='flex bg-amber-50 w-full h-screen justify-center items-center'>
            <div className='flex-row border-2 border-pink-800 rounded-lg p-4 m-4'>
                <Image src={prod} alt="Product Image" width={500} height={500} />
            </div>
        </div>
    );
}
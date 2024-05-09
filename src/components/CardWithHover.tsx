import { Card } from 'flowbite-react';
import React from 'react';
// Import the Card component from React Flowbite

interface CardWithHoverProps {
    imageUrl: any;
    title: string;
    description: string;
    pricing: { duration: string; price: string }[];
}

const CardWithHover: React.FC<CardWithHoverProps> = ({ imageUrl, title, description, pricing }) => {
    return (
        <div className={`h-full bg-${imageUrl} bg-cover rounded-lg`}>
            <div className={` h-full max-w-full overflow-auto group bg-gray-800/80 bg p-5 border rounded-lg border-white/50`}>
                <div className="hidden group-hover:flex group-hover:flex-col relative h-full justify-around ">
                    <h5 className="text-center text-xl font-normal tracking-tight text-white font-black_ops_one">{title}</h5>
                    <ul className="divide-y divide-gray-300 mt-5">
                        {pricing.map(({ duration, price }, index) => (
                            <li key={index} className="py-[13px]">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-red-700">{duration}</p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-white">{price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className=" relative h-full flex-col gap-1 flex md:group-hover:hidden justify-around overflow-hidden">
                    <h5 className="text-center text-xl font-normal tracking-tight text-white font-black_ops_one">{title}</h5>
                    <p className=" font-light text-sm text-[#f9d112] text-pretty">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardWithHover;


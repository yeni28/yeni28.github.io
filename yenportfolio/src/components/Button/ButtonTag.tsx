import React from 'react';



function ButtonTag({ innerValue }: ButtonProps) {
    return (
        <div
            className="flex justify-center items-center rounded-full mr-2 p-3 w-[full] h-5 text-[1rem
        ] font-Pre bg-violet text-white"
        >
            {innerValue}
        </div>
    );
}

export default ButtonTag;

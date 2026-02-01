'use client'
import Image from "next/image";
const ExploreBtn = () => {
    return (
        <>
            <button
                type="button"
                id="explore-btn"
                className="mt-7 mx-auto"
                onClick={() => console.log('Клик')}>
                <a href="#events">Посмотреть всё</a>
                <Image src="/icons/arrow-down.svg" alt="Стрелка вниз" width={20} height={20} className="ml-2" />
            </button>
        </>
    );
};

export default ExploreBtn;
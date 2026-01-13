"use client";

interface JourneyDayBadgeProps {
    dayNumber: number;
    totalDays: number;
}

export default function JourneyDayBadge({ dayNumber, totalDays }: JourneyDayBadgeProps) {
    const handleClick = () => {
        const nextDay = document.getElementById(`day-${dayNumber + 1}`);
        if (nextDay) {
            nextDay.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center h-full max-h-[50px] z-20">
            <div className="relative">
                {/* Pulse Ring on Hover - Behind Badge */}
                <div className="absolute inset-0 w-14 h-14 rounded-full bg-salon-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 blur-sm -z-10" />
                
                {/* Main Number Badge - Always White - Clickable */}
                <button
                    onClick={handleClick}
                    className="relative w-14 h-14 rounded-full bg-white border-3 border-salon-primary text-salon-primary flex items-center justify-center font-bold text-base shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] group-hover:scale-125 group-hover:bg-salon-primary group-hover:text-white group-hover:shadow-[0_12px_30px_-6px_rgba(27,77,62,0.6)] transition-all duration-500 cursor-pointer hover:scale-110 active:scale-95"
                    aria-label={`Scroll to Day ${dayNumber + 1}`}
                    disabled={dayNumber >= totalDays}
                >
                    {dayNumber}
                </button>
            </div>
        </div>
    );
}

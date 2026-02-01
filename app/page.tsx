import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

const Page = () => {
    return (
        <section>
            <h1 className="text-center">
                Платформа для всех событий в мире информационных технологий, <br/> которые нельзя пропустить
            </h1>
            <p className="text-center mt-5">Хаккатоны, конференции, митапы, Всё в одном месте</p>

            <ExploreBtn />
            <div className="mt-20 space-y-7">
                <h3>Ближайшие события</h3>

                <ul className="events list-none">
                    {events.map((event) => (
                        <li  key={event.title}>
                            <EventCard title={event.title} image={event.image} date={event.date} time={event.time} slug={event.slug} location={event.location}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Page;

// 1 33 50
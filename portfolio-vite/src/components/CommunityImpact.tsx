import {
  communityInitiatives,
  events,
  CommunityInitiative,
  Event,
} from "../data";

export function CommunityImpact() {
  return (
    <section
      className="py-20 px-10 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Subtle grid background */}
      <div
        className="
        absolute inset-0 opacity-20 pointer-events-none
        bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]
        bg-size-[40px_40px]"
      />

      <div className="relative">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-left mb-10 z-10 py-4 -mx-10 px-10"
          style={{
            backgroundColor: "var(--bg-primary)",
            backdropFilter: "blur(4px)",
            position: "sticky",
            top: "0",
          }}
        >
          COMMUNITY_IMPACT &{" "}
          <span style={{ color: "var(--accent-green)" }}>EVENTS</span>
        </h2>

        {/* Community Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-green-400">
            Community Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-110 overflow-y-auto p-4 border-y-2 border-[#3f3f3f]">
            {communityInitiatives.map((initiative) => (
              <InitiativeCard key={initiative.id} initiative={initiative} />
            ))}
          </div>
        </div>

        {/* Events */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-yellow-400">
            Recent Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-110 overflow-y-auto p-4 border-y-2 border-[#6a6969]">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InitiativeCard({ initiative }: { initiative: CommunityInitiative }) {
  return (
    <div
      className="border-2 overflow-hidden hover:border-green-500 transition-all duration-300 shadow-[8px_8px_0_#1e2939]"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
        color: "var(--text-secondary)",
      }}
    >
      <div className="h-48 bg-linear-to-br from-green-600 to-green-800 flex items-center justify-center">
        <img
          src={initiative.image}
          alt={initiative.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling!.className =
              e.currentTarget.nextElementSibling!.className.replace(
                "hidden",
                "",
              );
          }}
        />
        <div className="hidden text-6xl">🎯</div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-green-400">
          {initiative.title}
        </h4>
        <p className="mb-3">{initiative.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-green-300 font-semibold">
            {initiative.impact}
          </span>
          <span className="text-gray-500">{initiative.date}</span>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div
      className="border-2 overflow-hidden hover:border-yellow-500 transition-all duration-300 shadow-[8px_8px_0_#1e2939]"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
        color: "var(--text-secondary)",
      }}
    >
      <div className="h-48 bg-linear-to-br from-yellow-600 to-yellow-800 flex items-center justify-center">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling!.className =
              e.currentTarget.nextElementSibling!.className.replace(
                "hidden",
                "",
              );
          }}
        />
        <div className="hidden text-6xl">🏆</div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-yellow-400">
          {event.title}
        </h4>
        <p className="mb-3">{event.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-yellow-300 font-semibold">{event.role}</span>
          <span className="text-gray-500">{event.date}</span>
        </div>
        {event.location && (
          <div className="text-xs text-gray-400 mt-2">📍 {event.location}</div>
        )}
      </div>
    </div>
  );
}

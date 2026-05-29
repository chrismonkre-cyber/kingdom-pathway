import { useState } from "react";
import { IMAGES } from "../lib/images";
import { DAILY_DEVOTIONS } from "../lib/pathwayData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DailyStep() {
  const today = Math.floor(Date.now() / 86400000) % DAILY_DEVOTIONS.length;
  const [dayIndex, setDayIndex] = useState(today);
  const devotion = DAILY_DEVOTIONS[dayIndex];

  const prev = () => setDayIndex((dayIndex - 1 + DAILY_DEVOTIONS.length) % DAILY_DEVOTIONS.length);
  const next = () => setDayIndex((dayIndex + 1) % DAILY_DEVOTIONS.length);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={IMAGES.daily} alt="" className="hidden md:block w-full h-full object-cover object-center" />
        <img src={IMAGES.dailyMobile} alt="" className="md:hidden w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/45" />
      </div>

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-3 drop-shadow-lg">
            Daily Step
          </h1>
          <p className="font-body text-lg text-foreground/85 drop-shadow-md">
            Today's encouragement for your walk with God.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
              {devotion.title}
            </h2>
          </div>

          {/* Scripture */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h3 className="font-heading text-lg font-semibold text-primary mb-3">📖 Scripture</h3>
            <p className="font-body text-foreground/90 text-lg leading-relaxed italic">
              {devotion.scripture}
            </p>
          </div>

          {/* Encouragement */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h3 className="font-heading text-lg font-semibold text-primary mb-3">💡 Encouragement</h3>
            <p className="font-body text-foreground/90 leading-relaxed">
              {devotion.encouragement}
            </p>
          </div>

          {/* Prayer */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h3 className="font-heading text-lg font-semibold text-primary mb-3">🙏 Prayer</h3>
            <p className="font-body text-foreground/90 leading-relaxed">
              {devotion.prayer}
            </p>
          </div>

          {/* Declaration */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
            <h3 className="font-heading text-lg font-semibold text-primary mb-3">🔥 Declaration</h3>
            <p className="font-body text-foreground/90 leading-relaxed font-semibold">
              {devotion.declaration}
            </p>
          </div>

          {/* Action Step */}
          <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
            <h3 className="font-heading text-lg font-semibold text-primary mb-3">👣 Action Step</h3>
            <p className="font-body text-foreground/90 leading-relaxed">
              {devotion.actionStep}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex items-center gap-2 px-5 py-3 bg-black/50 backdrop-blur-sm border border-primary/30 rounded-lg text-foreground/80 hover:text-primary hover:border-primary/50 transition-all font-body"
            >
              <ChevronLeft className="h-5 w-5" /> Previous
            </button>
            <span className="text-foreground/50 font-body text-sm">
              Day {dayIndex + 1} of {DAILY_DEVOTIONS.length}
            </span>
            <button
              onClick={next}
              className="flex items-center gap-2 px-5 py-3 bg-black/50 backdrop-blur-sm border border-primary/30 rounded-lg text-foreground/80 hover:text-primary hover:border-primary/50 transition-all font-body"
            >
              Next <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
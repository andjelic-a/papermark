import { classNames } from "@/lib/utils";

interface Stat {
  name: string;
  value: string;
  unit?: string;
  active: boolean;
}
interface StatsElementProps {
  stat: Stat;
  statIdx: number;
}

export default function StatsElement({ stat, statIdx }: StatsElementProps) {
  return (
    <div
      key={stat.name}
      className={classNames(
        statIdx % 2 === 1 ? "sm:border-l" : statIdx === 2 ? "lg:border-l" : "",
        "border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8"
      )}
    >
      <p
        className={classNames(
          !stat.active ? "text-gray-700" : "text-gray-400",
          "text-sm font-medium leading-6"
        )}
      >
        {stat.name}
      </p>
      <p className="mt-2 flex items-baseline gap-x-2">
        <span
          className={classNames(
            !stat.active ? "text-gray-700" : "text-white",
            "text-4xl font-semibold tracking-tight "
          )}
        >
          {stat.value}
        </span>
        {stat.unit ? (
          <span
            className={classNames(
              !stat.active ? "text-gray-700" : "text-gray-400",
              "text-sm"
            )}
          >
            {stat.unit}
          </span>
        ) : null}
      </p>
    </div>
  );
}

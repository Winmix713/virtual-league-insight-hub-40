
import React from "react";
import { CalendarClock, Users, Calendar, AlertTriangle, ChevronRight } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { cn } from "@/lib/utils";

interface MatchData {
  id: number;
  team1: string;
  team2: string;
  score: string;
  date: string;
  time: string;
  location: string;
  status: "Upcoming" | "Live" | "Completed";
}

const Matches = () => {
  // Sample match data
  const matches: MatchData[] = [
    {
      id: 1,
      team1: "London Ágyúk",
      team2: "Manchester Kék",
      score: "2 - 1",
      date: "2024-09-15",
      time: "16:00",
      location: "London Stadium",
      status: "Completed"
    },
    {
      id: 2,
      team1: "Vörös Ördögök",
      team2: "Liverpool",
      score: "1 - 1",
      date: "2024-09-16",
      time: "18:30",
      location: "Manchester Arena",
      status: "Completed"
    },
    {
      id: 3,
      team1: "Chelsea",
      team2: "Aston Oroszlán",
      score: "0 - 2",
      date: "2024-09-17",
      time: "20:00",
      location: "Stamford Bridge",
      status: "Completed"
    },
    {
      id: 4,
      team1: "Tottenham",
      team2: "Newcastle",
      score: "3 - 2",
      date: "2024-09-22",
      time: "13:00",
      location: "Tottenham Hotspur Stadium",
      status: "Upcoming"
    },
    {
      id: 5,
      team1: "Everton",
      team2: "West Ham",
      score: "1 - 0",
      date: "2024-09-23",
      time: "15:30",
      location: "Goodison Park",
      status: "Upcoming"
    },
    {
      id: 6,
      team1: "Arsenal",
      team2: "Manchester City",
      score: "0 - 0",
      date: "2024-09-24",
      time: "19:00",
      location: "Emirates Stadium",
      status: "Live"
    }
  ];

  const statsData = {
    totalMatches: 240,
    matchesPlayed: "38%",
    goalsScored: { value: 248, change: "+12%" },
    bookings: { value: 189, change: "-5%" },
    attendance: { value: "42,500", change: "+3%" }
  };

  return (
    <DashboardLayout 
      title="Matches" 
      subtitle="Track live scores, match schedules, and results"
    >
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
        <StatCard
          title="Total Matches"
          value={statsData.totalMatches}
          icon={<CalendarClock size={24} />}
          color="blue"
          change={{ 
            value: "Same", 
            isPositive: true, 
            text: "as last season" 
          }}
        />

        <StatCard
          title="Matches Played"
          value={statsData.matchesPlayed}
          icon={<Calendar size={24} />}
          color="green"
          change={{ 
            value: "+8%", 
            isPositive: true, 
            text: "more than planned" 
          }}
        />

        <StatCard
          title="Goals Scored"
          value={statsData.goalsScored.value}
          icon={<Calendar size={24} />}
          color="purple"
          change={{ 
            value: statsData.goalsScored.change,
            isPositive: true,
            text: "from last season"
          }}
        />

        <StatCard
          title="Bookings"
          value={statsData.bookings.value}
          icon={<AlertTriangle size={24} />}
          color="amber"
          change={{ 
            value: statsData.bookings.change,
            isPositive: false,
            text: "from last season"
          }}
        />

        <StatCard
          title="Avg. Attendance"
          value={statsData.attendance.value}
          icon={<Users size={24} />}
          color="amber"
          change={{ 
            value: statsData.attendance.change,
            isPositive: true,
            text: "from last season"
          }}
        />
      </div>

      {/* Match Schedule */}
      <Card glassmorphism glowColor="blue" className="mt-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <CalendarClock className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Match Schedule</h2>
            </div>
            <Button variant="glass" size="sm">
              View Full Schedule
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <div 
                key={match.id}
                className="border border-[#222224] rounded-lg p-4 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-semibold">{match.team1} vs {match.team2}</h3>
                    <p className="text-sm text-gray-400">{match.date} - {match.time}</p>
                  </div>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    match.status === "Upcoming" ? "bg-blue-900/30 text-blue-500" :
                    match.status === "Live" ? "bg-green-900/30 text-green-500" :
                    "bg-gray-900/30 text-gray-500"
                  )}>
                    {match.status}
                  </span>
                </div>

                <div className="text-center">
                  <span className="text-4xl font-bold">{match.score}</span>
                  <p className="text-sm text-gray-400 mt-1">at {match.location}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#222224] flex justify-end">
                  <Button variant="ghost" size="sm" className="text-blue-500" rightIcon={<ChevronRight size={14} />}>
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              View All Matches
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Matches;


import React from "react";
import { Trophy, Calendar, ChevronRight, Filter, ListFilter, Check, Clock } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

type StatusType = "completed" | "live" | "upcoming";

interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  score: string;
  venue: string;
  status: StatusType;
}

const Matches = () => {
  // Sample matches data
  const matches: Match[] = [
    {
      id: 1,
      date: "2025-05-15",
      time: "19:45",
      homeTeam: "Liverpool",
      homeTeamLogo: "LI",
      awayTeam: "Manchester Kék",
      awayTeamLogo: "MK",
      score: "2-1",
      venue: "Anfield Virtual Stadium",
      status: "completed"
    },
    {
      id: 2,
      date: "2025-05-16",
      time: "20:00",
      homeTeam: "London Ágyúk",
      homeTeamLogo: "LA",
      awayTeam: "Chelsea",
      awayTeamLogo: "CH",
      score: "0-0",
      venue: "Emirates Virtual Stadium",
      status: "live"
    },
    {
      id: 3,
      date: "2025-05-17",
      time: "15:00",
      homeTeam: "Tottenham",
      homeTeamLogo: "TO",
      awayTeam: "West Ham",
      awayTeamLogo: "WH",
      score: "3-2",
      venue: "Tottenham Virtual Stadium",
      status: "completed"
    },
    {
      id: 4,
      date: "2025-05-18",
      time: "16:30",
      homeTeam: "Aston Oroszlán",
      homeTeamLogo: "AO",
      awayTeam: "Everton",
      awayTeamLogo: "EV",
      score: "-",
      venue: "Villa Virtual Park",
      status: "upcoming"
    },
    {
      id: 5,
      date: "2025-05-19",
      time: "20:00",
      homeTeam: "Newcastle",
      homeTeamLogo: "NC",
      awayTeam: "Brighton",
      awayTeamLogo: "BR",
      score: "-",
      venue: "St James Virtual Park",
      status: "upcoming"
    },
    {
      id: 6,
      date: "2025-05-20",
      time: "19:45",
      homeTeam: "Vörös Ördögök",
      homeTeamLogo: "VÖ",
      awayTeam: "Wolves",
      awayTeamLogo: "WO",
      score: "-",
      venue: "Old Trafford Virtual",
      status: "upcoming"
    }
  ];

  const statsData = {
    totalMatches: 38,
    completedMatches: 24,
    liveMatches: 1,
    upcomingMatches: 13
  };

  return (
    <DashboardLayout 
      title="Matches" 
      subtitle="View and manage all scheduled matches"
    >
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <StatCard
          title="Total Matches"
          value={statsData.totalMatches}
          icon={<Trophy size={24} />}
          color="blue"
          change={{ 
            value: "Season 2024/25", 
            isPositive: true, 
            text: "in progress" 
          }}
        />

        <StatCard
          title="Completed"
          value={statsData.completedMatches}
          icon={<Check size={24} />}
          color="green"
          change={{ 
            value: "63%", 
            isPositive: true, 
            text: "of total matches" 
          }}
        />

        <StatCard
          title="Live Matches"
          value={statsData.liveMatches}
          icon={<Trophy size={24} />}
          color="red"
          change={{ 
            value: "Watch Now", 
            isPositive: true, 
            text: "" 
          }}
        />

        <StatCard
          title="Upcoming"
          value={statsData.upcomingMatches}
          icon={<Clock size={24} />}
          color="amber"
          change={{ 
            value: "Next: Today", 
            isPositive: true, 
            text: "20:00" 
          }}
        />
      </div>

      {/* Calendar Section */}
      <Card className="mb-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Match Calendar</h2>
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filter Dates
            </Button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center mb-4">
            <div className="text-sm font-medium text-gray-400">Mon</div>
            <div className="text-sm font-medium text-gray-400">Tue</div>
            <div className="text-sm font-medium text-gray-400">Wed</div>
            <div className="text-sm font-medium text-gray-400">Thu</div>
            <div className="text-sm font-medium text-gray-400">Fri</div>
            <div className="text-sm font-medium text-gray-400">Sat</div>
            <div className="text-sm font-medium text-gray-400">Sun</div>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }).map((_, index) => {
              // Simulating some match days
              const hasMatch = [4, 8, 15, 16, 19, 23, 27].includes(index + 1);
              const isToday = index + 1 === 16;
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "aspect-square rounded-md flex flex-col items-center justify-center border text-sm",
                    isToday 
                      ? "bg-blue-900/30 border-blue-500/30 text-white" 
                      : hasMatch 
                        ? "bg-[#1e1e20] border-[#333336] hover:border-white/20 cursor-pointer"
                        : "border-[#222224] text-gray-500"
                  )}
                >
                  <span>{index + 1}</span>
                  {hasMatch && !isToday && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1"></span>
                  )}
                  {isToday && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Matches List */}
      <Card glassmorphism glowColor="blue">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">All Matches</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" leftIcon={<ListFilter size={16} />} size="sm">
                Filter
              </Button>
              <Button variant="glass" leftIcon={<Calendar size={16} />} size="sm">
                Schedule Match
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#222224] scrollbar-track-transparent -mx-6">
            <div className="inline-block min-w-full align-middle px-6">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-[#222224]">
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Date & Time</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Home Team</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-gray-400">Score</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Away Team</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Venue</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222224]">
                  {matches.map((match) => (
                    <tr
                      key={match.id}
                      className="hover:bg-white/5 transition-colors duration-150"
                    >
                      <td className="py-4 px-2 text-sm whitespace-nowrap">{match.date}<br/><span className="text-gray-400">{match.time}</span></td>
                      <td className="py-4 px-2">
                        <div className="flex items-center justify-end gap-2">
                          <span className="text-sm font-medium whitespace-nowrap">{match.homeTeam}</span>
                          <div className="h-8 w-8 rounded-full bg-[#1e1e20] flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-300">{match.homeTeamLogo}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center justify-center">
                          <div className={cn(
                            "py-1 px-3 rounded text-center min-w-16",
                            match.status === 'live' ? 'bg-red-900/20 text-white animate-pulse' : 'text-gray-300'
                          )}>
                            <span className="text-sm font-mono font-medium whitespace-nowrap">{match.score}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-[#1e1e20] flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-300">{match.awayTeamLogo}</span>
                          </div>
                          <span className="text-sm font-medium whitespace-nowrap">{match.awayTeam}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-sm">{match.venue}</td>
                      <td className="py-4 px-2">
                        <StatusBadge status={match.status} animated={match.status === 'live'} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              Load More Matches
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Matches;

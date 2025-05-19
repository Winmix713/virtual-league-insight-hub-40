
import React from "react";
import { BarChart, Download, TrendingUp, ChevronRight, Table } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { cn } from "@/lib/utils";

interface TeamStatsData {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
  form: Array<"W" | "D" | "L">;
}

interface PlayerStatsData {
  position: number;
  name: string;
  team: string;
  goals: number;
  assists: number;
  appearances: number;
  rating: number;
}

const Statistics = () => {
  // Sample league table data
  const leagueTable: TeamStatsData[] = [
    {
      position: 1,
      name: "Manchester Kék",
      played: 20,
      won: 14,
      drawn: 2,
      lost: 4,
      goalsFor: 45,
      goalsAgainst: 20,
      goalDiff: 25,
      points: 44,
      form: ["W", "W", "W", "D", "W"]
    },
    {
      position: 2,
      name: "Liverpool",
      played: 20,
      won: 13,
      drawn: 3,
      lost: 4,
      goalsFor: 40,
      goalsAgainst: 25,
      goalDiff: 15,
      points: 42,
      form: ["W", "W", "D", "W", "L"]
    },
    {
      position: 3,
      name: "London Ágyúk",
      played: 20,
      won: 12,
      drawn: 5,
      lost: 3,
      goalsFor: 38,
      goalsAgainst: 18,
      goalDiff: 20,
      points: 41,
      form: ["W", "W", "D", "L", "W"]
    },
    {
      position: 4,
      name: "Vörös Ördögök",
      played: 20,
      won: 11,
      drawn: 4,
      lost: 5,
      goalsFor: 31,
      goalsAgainst: 24,
      goalDiff: 7,
      points: 37,
      form: ["W", "L", "W", "D", "W"]
    },
    {
      position: 5,
      name: "Chelsea",
      played: 20,
      won: 10,
      drawn: 4,
      lost: 6,
      goalsFor: 32,
      goalsAgainst: 27,
      goalDiff: 5,
      points: 34,
      form: ["L", "W", "W", "D", "W"]
    }
  ];

  // Sample top scorers data
  const topScorers: PlayerStatsData[] = [
    {
      position: 1,
      name: "M. Silva",
      team: "Manchester Kék",
      goals: 14,
      assists: 5,
      appearances: 19,
      rating: 8.4
    },
    {
      position: 2,
      name: "K. Johnson",
      team: "Liverpool",
      goals: 12,
      assists: 3,
      appearances: 18,
      rating: 8.1
    },
    {
      position: 3,
      name: "T. Nagy",
      team: "London Ágyúk",
      goals: 11,
      assists: 7,
      appearances: 20,
      rating: 8.3
    },
    {
      position: 4,
      name: "R. Sanchez",
      team: "Vörös Ördögök",
      goals: 10,
      assists: 2,
      appearances: 17,
      rating: 7.9
    },
    {
      position: 5,
      name: "L. Horvath",
      team: "Aston Oroszlán",
      goals: 9,
      assists: 4,
      appearances: 20,
      rating: 7.8
    }
  ];

  const statsData = {
    goals: 384,
    assists: 298,
    cleanSheets: 56,
    cards: 312
  };

  return (
    <DashboardLayout 
      title="Statistics" 
      subtitle="Comprehensive league and player statistics"
    >
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <StatCard
          title="Total Goals"
          value={statsData.goals}
          icon={<BarChart size={24} />}
          color="blue"
          change={{ 
            value: "+28", 
            isPositive: true, 
            text: "last month" 
          }}
          trend={[20, 45, 30, 65, 85, 70]}
        />

        <StatCard
          title="Total Assists"
          value={statsData.assists}
          icon={<BarChart size={24} />}
          color="green"
          change={{ 
            value: "+22", 
            isPositive: true, 
            text: "last month" 
          }}
          trend={[30, 50, 40, 60, 55, 72]}
        />

        <StatCard
          title="Clean Sheets"
          value={statsData.cleanSheets}
          icon={<BarChart size={24} />}
          color="purple"
          change={{ 
            value: "+8", 
            isPositive: true, 
            text: "last month" 
          }}
          trend={[15, 25, 20, 30, 35, 42]}
        />

        <StatCard
          title="Cards"
          value={statsData.cards}
          icon={<BarChart size={24} />}
          color="amber"
          change={{ 
            value: "+24", 
            isPositive: false, 
            text: "last month" 
          }}
          trend={[18, 32, 27, 42, 38, 50]}
        />
      </div>

      {/* League Table */}
      <Card glassmorphism glowColor="blue" className="mt-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Table className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">League Table</h2>
            </div>
            <Button variant="outline" leftIcon={<Download size={16} />} size="sm">
              Export
            </Button>
          </div>
          
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#222224] scrollbar-track-transparent -mx-6">
            <div className="inline-block min-w-full align-middle px-6">
              <table className="min-w-full divide-y divide-[#222224]">
                <thead>
                  <tr className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <th scope="col" className="py-3 text-left">Pos</th>
                    <th scope="col" className="py-3 text-left">Team</th>
                    <th scope="col" className="py-3 text-center">P</th>
                    <th scope="col" className="py-3 text-center">W</th>
                    <th scope="col" className="py-3 text-center">D</th>
                    <th scope="col" className="py-3 text-center">L</th>
                    <th scope="col" className="py-3 text-center">GF</th>
                    <th scope="col" className="py-3 text-center">GA</th>
                    <th scope="col" className="py-3 text-center">GD</th>
                    <th scope="col" className="py-3 text-center">Pts</th>
                    <th scope="col" className="py-3 text-left">Form</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222224]">
                  {leagueTable.map((team) => (
                    <tr key={team.position} className="hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <span className={cn(
                          "flex items-center justify-center w-6 h-6 rounded-sm text-sm font-semibold",
                          team.position <= 4 ? "bg-blue-900/30 text-blue-500" :
                          team.position <= 6 ? "bg-green-900/30 text-green-500" :
                          team.position >= 16 ? "bg-red-900/30 text-red-500" :
                          "bg-[#1e1e20] text-gray-400"
                        )}>
                          {team.position}
                        </span>
                      </td>
                      <td className="py-4 font-medium">{team.name}</td>
                      <td className="py-4 text-center">{team.played}</td>
                      <td className="py-4 text-center">{team.won}</td>
                      <td className="py-4 text-center">{team.drawn}</td>
                      <td className="py-4 text-center">{team.lost}</td>
                      <td className="py-4 text-center">{team.goalsFor}</td>
                      <td className="py-4 text-center">{team.goalsAgainst}</td>
                      <td className="py-4 text-center font-medium">
                        <span className={team.goalDiff > 0 ? "text-green-500" : team.goalDiff < 0 ? "text-red-500" : ""}>
                          {team.goalDiff > 0 ? `+${team.goalDiff}` : team.goalDiff}
                        </span>
                      </td>
                      <td className="py-4 text-center font-semibold">{team.points}</td>
                      <td className="py-4">
                        <div className="flex gap-1">
                          {team.form.map((result, idx) => (
                            <span
                              key={idx}
                              className={cn(
                                "w-6 h-6 flex items-center justify-center rounded text-xs font-medium",
                                result === "W" ? "bg-green-700/30 text-green-500" :
                                result === "D" ? "bg-amber-700/30 text-amber-500" :
                                "bg-red-700/30 text-red-500"
                              )}
                            >
                              {result}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              View Full Table
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Top Scorers */}
      <Card glassmorphism glowColor="green" className="mt-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <h2 className="text-xl font-semibold">Top Scorers</h2>
            </div>
            <Button variant="outline" leftIcon={<Download size={16} />} size="sm">
              Export
            </Button>
          </div>
          
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#222224] scrollbar-track-transparent -mx-6">
            <div className="inline-block min-w-full align-middle px-6">
              <table className="min-w-full divide-y divide-[#222224]">
                <thead>
                  <tr className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <th scope="col" className="py-3 text-left">Pos</th>
                    <th scope="col" className="py-3 text-left">Player</th>
                    <th scope="col" className="py-3 text-left">Team</th>
                    <th scope="col" className="py-3 text-center">Goals</th>
                    <th scope="col" className="py-3 text-center">Assists</th>
                    <th scope="col" className="py-3 text-center">Apps</th>
                    <th scope="col" className="py-3 text-center">Rating</th>
                    <th scope="col" className="py-3 text-center">G/A per 90</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222224]">
                  {topScorers.map((player) => (
                    <tr key={player.position} className="hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <span className="flex items-center justify-center w-6 h-6 rounded-sm text-sm font-semibold bg-[#1e1e20]">
                          {player.position}
                        </span>
                      </td>
                      <td className="py-4 font-medium">{player.name}</td>
                      <td className="py-4">{player.team}</td>
                      <td className="py-4 text-center font-semibold">{player.goals}</td>
                      <td className="py-4 text-center">{player.assists}</td>
                      <td className="py-4 text-center">{player.appearances}</td>
                      <td className="py-4 text-center">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-xs font-medium",
                          player.rating >= 8.0 ? "bg-green-900/30 text-green-500" :
                          player.rating >= 7.0 ? "bg-amber-900/30 text-amber-500" :
                          "bg-red-900/30 text-red-500"
                        )}>
                          {player.rating.toFixed(1)}
                        </span>
                      </td>
                      <td className="py-4 text-center font-medium text-blue-500">
                        {((player.goals + player.assists) / player.appearances * 90 / 90).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              View All Players
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card glassmorphism glowColor="purple">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <BarChart className="h-5 w-5 text-purple-500" />
                <h2 className="text-xl font-semibold">Goals Distribution</h2>
              </div>
            </div>
            
            <div className="h-64 w-full">
              {/* Simple bar chart for goals distribution */}
              <div className="h-full w-full flex items-end justify-around">
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-purple-500/80 rounded-t" style={{height: '80%'}}></div>
                  <span className="mt-2 text-xs text-gray-400">Open Play</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-purple-500/80 rounded-t" style={{height: '30%'}}></div>
                  <span className="mt-2 text-xs text-gray-400">Set Piece</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-purple-500/80 rounded-t" style={{height: '22%'}}></div>
                  <span className="mt-2 text-xs text-gray-400">Penalty</span>
                  <span className="text-sm font-medium">11%</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-purple-500/80 rounded-t" style={{height: '18%'}}></div>
                  <span className="mt-2 text-xs text-gray-400">Own Goal</span>
                  <span className="text-sm font-medium">9%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-center text-gray-400">
              Total Goals: {statsData.goals}
            </div>
          </div>
        </Card>
        
        <Card glassmorphism glowColor="amber">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <BarChart className="h-5 w-5 text-amber-500" />
                <h2 className="text-xl font-semibold">Goals Timeline</h2>
              </div>
            </div>
            
            <div className="h-64 w-full">
              {/* Simple line chart for goals timeline */}
              <div className="h-full w-full flex items-end space-x-2">
                {[35, 42, 28, 45, 58, 37].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-amber-500/80 to-amber-500/40 rounded-t"
                      style={{height: `${value}%`}}
                    ></div>
                    <span className="mt-2 text-xs text-gray-400">{`${index * 15 + 1}-${(index + 1) * 15}'`}</span>
                    <span className="text-xs font-medium">{Math.round(statsData.goals * value / 100)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-sm text-center text-gray-400">
              Most Goals: 76-90 minutes
            </div>
          </div>
        </Card>
      </div>

      <Button variant="glass" className="mt-6 w-full" rightIcon={<ChevronRight size={16} />}>
        View More Advanced Statistics
      </Button>
    </DashboardLayout>
  );
};

export default Statistics;

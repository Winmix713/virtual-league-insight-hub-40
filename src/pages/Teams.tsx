
import React from "react";
import { Users, Search, Filter, Plus, ChevronRight } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { TeamCard } from "@/components/team/TeamCard";
import { cn } from "@/lib/utils";

interface TeamData {
  id: number;
  name: string;
  logo: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  players: number;
  division: string;
  form: Array<"W" | "D" | "L">;
  position?: number;
}

const Teams = () => {
  // Sample team data
  const teams: TeamData[] = [
    {
      id: 1,
      name: "London Ágyúk",
      logo: "LA",
      wins: 12,
      draws: 5,
      losses: 3,
      points: 41,
      goalsFor: 38,
      goalsAgainst: 18,
      players: 25,
      division: "Premier",
      form: ["W", "W", "D", "L", "W"],
      position: 2
    },
    {
      id: 2,
      name: "Manchester Kék",
      logo: "MK",
      wins: 14,
      draws: 2,
      losses: 4,
      points: 44,
      goalsFor: 45,
      goalsAgainst: 20,
      players: 26,
      division: "Premier",
      form: ["W", "W", "W", "D", "W"],
      position: 1
    },
    {
      id: 3,
      name: "Vörös Ördögök",
      logo: "VÖ",
      wins: 11,
      draws: 4,
      losses: 5,
      points: 37,
      goalsFor: 31,
      goalsAgainst: 24,
      players: 28,
      division: "Premier",
      form: ["W", "L", "W", "D", "W"],
      position: 4
    },
    {
      id: 4,
      name: "Liverpool",
      logo: "LI",
      wins: 13,
      draws: 3,
      losses: 4,
      points: 42,
      goalsFor: 40,
      goalsAgainst: 25,
      players: 24,
      division: "Premier",
      form: ["W", "W", "D", "W", "L"],
      position: 3
    },
    {
      id: 5,
      name: "Aston Oroszlán",
      logo: "AO",
      wins: 9,
      draws: 6,
      losses: 5,
      points: 33,
      goalsFor: 30,
      goalsAgainst: 28,
      players: 25,
      division: "Premier",
      form: ["D", "W", "L", "W", "D"],
      position: 6
    },
    {
      id: 6,
      name: "Chelsea",
      logo: "CH",
      wins: 10,
      draws: 4,
      losses: 6,
      points: 34,
      goalsFor: 32,
      goalsAgainst: 27,
      players: 27,
      division: "Premier",
      form: ["L", "W", "W", "D", "W"],
      position: 5
    }
  ];

  const statsData = {
    totalTeams: 16,
    activeTeams: 16,
    averageGoals: "2.6",
    topTeam: "Manchester Kék"
  };

  return (
    <DashboardLayout 
      title="Teams" 
      subtitle="Manage your virtual premier league teams"
    >
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <StatCard
          title="Total Teams"
          value={statsData.totalTeams}
          icon={<Users size={24} />}
          color="blue"
          change={{ 
            value: "+2", 
            isPositive: true, 
            text: "from last season" 
          }}
        />

        <StatCard
          title="Active Teams"
          value={statsData.activeTeams}
          icon={<Users size={24} />}
          color="green"
          change={{ 
            value: "100%", 
            isPositive: true, 
            text: "participation rate" 
          }}
        />

        <StatCard
          title="Average Goals"
          value={statsData.averageGoals}
          icon={<Users size={24} />}
          color="purple"
          change={{ 
            value: "+0.3", 
            isPositive: true, 
            text: "from last season" 
          }}
        />

        <StatCard
          title="Top Team"
          value={statsData.topTeam}
          icon={<Users size={24} />}
          color="amber"
          change={{ 
            value: "44", 
            isPositive: true, 
            text: "points" 
          }}
        />
      </div>

      {/* Team Management */}
      <Card glassmorphism glowColor="blue" className="w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Team List</h2>
            </div>
            <Button variant="glass" leftIcon={<Plus size={16} />} size="sm">
              Add New Team
            </Button>
          </div>

          {/* Enhanced Search and Filter */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="search"
                  className="w-full py-2 pl-10 pr-4 text-sm bg-[#1e1e20]/50 border border-[#222224] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Search teams, players, or stats..."
                />
              </div>
              <div className="flex gap-2">
                <select className="py-2 px-3 bg-[#1e1e20] border border-[#222224] rounded-md text-white text-sm">
                  <option>All Divisions</option>
                  <option>Premier</option>
                  <option>Championship</option>
                </select>
                <select className="py-2 px-3 bg-[#1e1e20] border border-[#222224] rounded-md text-white text-sm">
                  <option>Sort by Points</option>
                  <option>Sort by Goals</option>
                  <option>Sort by Form</option>
                </select>
                <Button variant="outline" leftIcon={<Filter size={16} />} size="default">
                  Advanced Filter
                </Button>
              </div>
            </div>
            
            {/* Quick Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#1e1e20]/30 rounded-lg border border-[#222224]">
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-500">16</div>
                <div className="text-xs text-gray-400">Total Teams</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-500">100%</div>
                <div className="text-xs text-gray-400">Active</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-purple-500">2.6</div>
                <div className="text-xs text-gray-400">Avg Goals</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-amber-500">44</div>
                <div className="text-xs text-gray-400">Highest Points</div>
              </div>
            </div>
          </div>

          {/* Team Cards Grid - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {teams.map((team) => (
              <TeamCard
                key={team.id}
                name={team.name}
                logo={team.logo}
                division={team.division}
                stats={{
                  wins: team.wins,
                  draws: team.draws,
                  losses: team.losses,
                  points: team.points,
                  goalsFor: team.goalsFor,
                  goalsAgainst: team.goalsAgainst,
                  position: team.position,
                  players: team.players
                }}
                form={team.form.map(result => ({ result }))}
                onClick={() => console.log(`Team ${team.name} clicked`)}
              />
            ))}
          </div>

          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              View All Teams
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Teams;

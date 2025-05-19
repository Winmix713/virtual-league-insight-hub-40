
import React from "react";
import { Shield, CalendarClock, Users, Settings as SettingsIcon, Plus, ChevronRight } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { cn } from "@/lib/utils";

interface LeagueData {
  id: number;
  name: string;
  teams: number;
  matches: number;
  status: "Active" | "Upcoming" | "Completed";
  season: string;
  startDate: string;
  endDate: string;
  type: "League" | "Cup" | "Tournament";
}

const LeagueManagement = () => {
  // Sample leagues data
  const leagues: LeagueData[] = [
    {
      id: 1,
      name: "Virtual Premier League",
      teams: 16,
      matches: 240,
      status: "Active",
      season: "2024/2025",
      startDate: "2024-08-15",
      endDate: "2025-05-30",
      type: "League"
    },
    {
      id: 2,
      name: "Virtual FA Cup",
      teams: 32,
      matches: 31,
      status: "Active",
      season: "2024/2025",
      startDate: "2024-11-10",
      endDate: "2025-05-15",
      type: "Cup"
    },
    {
      id: 3,
      name: "Winter Tournament",
      teams: 8,
      matches: 12,
      status: "Completed",
      season: "2024/2025",
      startDate: "2024-12-01",
      endDate: "2024-12-20",
      type: "Tournament"
    },
    {
      id: 4,
      name: "Virtual Champions League",
      teams: 24,
      matches: 112,
      status: "Upcoming",
      season: "2025/2026",
      startDate: "2025-09-15",
      endDate: "2026-05-25",
      type: "Tournament"
    }
  ];

  const statsData = {
    activeLeagues: 2,
    totalTeams: 16,
    scheduledMatches: 240,
    completedMatches: "38%"
  };

  return (
    <DashboardLayout 
      title="League Management" 
      subtitle="Manage your leagues, tournaments, and competitions"
    >
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <StatCard
          title="Active Leagues"
          value={statsData.activeLeagues}
          icon={<Shield size={24} />}
          color="blue"
          change={{ 
            value: "2 more", 
            isPositive: true, 
            text: "planned" 
          }}
        />

        <StatCard
          title="Total Teams"
          value={statsData.totalTeams}
          icon={<Users size={24} />}
          color="green"
          change={{ 
            value: "+2", 
            isPositive: true, 
            text: "from last season" 
          }}
        />

        <StatCard
          title="Scheduled Matches"
          value={statsData.scheduledMatches}
          icon={<CalendarClock size={24} />}
          color="purple"
          change={{ 
            value: "All set", 
            isPositive: true, 
            text: "for the season" 
          }}
        />

        <StatCard
          title="Completed"
          value={statsData.completedMatches}
          icon={<Shield size={24} />}
          color="amber"
          change={{ 
            value: "92 matches", 
            isPositive: true, 
            text: "played" 
          }}
        />
      </div>
      
      {/* League Management */}
      <Card glassmorphism glowColor="blue" className="mt-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">League Management</h2>
            </div>
            <Button variant="glass" leftIcon={<Plus size={16} />} size="sm">
              Create New League
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leagues.map((league) => (
              <div 
                key={league.id}
                className="border border-[#222224] rounded-lg p-5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      <span>{league.name}</span>
                      <span className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        league.status === "Active" ? "bg-green-900/30 text-green-500" :
                        league.status === "Upcoming" ? "bg-blue-900/30 text-blue-500" :
                        "bg-gray-900/30 text-gray-500"
                      )}>
                        {league.status}
                      </span>
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{league.season} Season</p>
                  </div>
                  <div className="px-2 py-0.5 text-xs bg-[#1e1e20] rounded font-medium">
                    {league.type}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <span className="text-xs text-gray-400 block">Teams</span>
                    <span className="text-sm font-medium">{league.teams}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Matches</span>
                    <span className="text-sm font-medium">{league.matches}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Start Date</span>
                    <span className="text-sm font-medium">{league.startDate}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">End Date</span>
                    <span className="text-sm font-medium">{league.endDate}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-[#222224] flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-sm">Standings</Button>
                    <Button variant="outline" size="sm" className="text-sm">Schedule</Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-500" rightIcon={<ChevronRight size={14} />}>
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      {/* Current Season */}
      <Card glassmorphism glowColor="green" className="mt-6">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <CalendarClock className="h-5 w-5 text-green-500" />
            <h2 className="text-xl font-semibold">Current Season - 2024/2025</h2>
          </div>
          
          <div className="border border-[#222224] rounded-lg p-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h3 className="font-semibold">Virtual Premier League</h3>
                <p className="text-sm text-gray-400 mt-1">Main Competition</p>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm" leftIcon={<Users size={14} />}>
                  Teams
                </Button>
                <Button variant="outline" size="sm" leftIcon={<CalendarClock size={14} />}>
                  Schedule
                </Button>
                <Button variant="outline" size="sm" leftIcon={<SettingsIcon size={14} />}>
                  Rules
                </Button>
                <Button variant="glass" size="sm">
                  Manage
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="border border-[#222224] rounded p-3">
                <h4 className="text-sm font-medium mb-2">Progress</h4>
                <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "38%" }}></div>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-gray-400">Matchday 8 of 21</span>
                  <span>38% Complete</span>
                </div>
              </div>
              
              <div className="border border-[#222224] rounded p-3">
                <h4 className="text-sm font-medium mb-2">Stats</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-xs text-gray-400 block">Matches</span>
                    <span className="text-sm font-medium">92/240</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Goals</span>
                    <span className="text-sm font-medium">248</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Avg. Goals</span>
                    <span className="text-sm font-medium">2.7</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Cards</span>
                    <span className="text-sm font-medium">189</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-[#222224] rounded p-3">
                <h4 className="text-sm font-medium mb-2">Top Teams</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1e1e20] text-xs">1</span>
                      <span className="text-sm">Manchester Kék</span>
                    </div>
                    <span className="text-xs font-medium">44 pts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1e1e20] text-xs">2</span>
                      <span className="text-sm">Liverpool</span>
                    </div>
                    <span className="text-xs font-medium">42 pts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1e1e20] text-xs">3</span>
                      <span className="text-sm">London Ágyúk</span>
                    </div>
                    <span className="text-xs font-medium">41 pts</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button variant="glass" rightIcon={<ChevronRight size={14} />}>
                View League Dashboard
              </Button>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Season Planning */}
      <Card glassmorphism glowColor="purple" className="mt-6">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <CalendarClock className="h-5 w-5 text-purple-500" />
            <h2 className="text-xl font-semibold">Season Planning</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 border border-[#222224] rounded-lg p-4">
              <h3 className="font-medium mb-4">Calendar Overview</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 py-2 px-3 bg-blue-900/20 text-blue-400 rounded text-xs font-medium text-center">
                    Aug - Dec<br/>2024
                  </div>
                  <div className="flex-1 border-l-2 border-[#222224] pl-4 pb-6">
                    <h4 className="text-sm font-medium">First Half of Season</h4>
                    <p className="text-xs text-gray-400 mt-1">Virtual Premier League - Matchdays 1-10</p>
                    <p className="text-xs text-gray-400">Virtual FA Cup - Qualification Rounds</p>
                    <p className="text-xs text-gray-400">Winter Tournament - Full Competition</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 py-2 px-3 bg-green-900/20 text-green-400 rounded text-xs font-medium text-center">
                    Jan - May<br/>2025
                  </div>
                  <div className="flex-1 border-l-2 border-[#222224] pl-4 pb-6">
                    <h4 className="text-sm font-medium">Second Half of Season</h4>
                    <p className="text-xs text-gray-400 mt-1">Virtual Premier League - Matchdays 11-21</p>
                    <p className="text-xs text-gray-400">Virtual FA Cup - Final Rounds</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-24 flex-shrink-0 py-2 px-3 bg-purple-900/20 text-purple-400 rounded text-xs font-medium text-center">
                    June - July<br/>2025
                  </div>
                  <div className="flex-1 border-l-2 border-[#222224] pl-4">
                    <h4 className="text-sm font-medium">Off Season</h4>
                    <p className="text-xs text-gray-400 mt-1">Team Registration</p>
                    <p className="text-xs text-gray-400">New Season Preparation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-[#222224] rounded-lg p-4">
              <h3 className="font-medium mb-4">Next Season Planning</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">2025/2026 Season</h4>
                  <p className="text-xs text-gray-400 mt-1">Planning in progress</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Team registration</span>
                      <span className="text-xs bg-amber-900/30 text-amber-500 px-2 py-0.5 rounded">Pending</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Schedule creation</span>
                      <span className="text-xs bg-red-900/30 text-red-500 px-2 py-0.5 rounded">Not started</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Rules approval</span>
                      <span className="text-xs bg-green-900/30 text-green-500 px-2 py-0.5 rounded">Completed</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[#222224]">
                  <h4 className="text-sm font-medium">New Competitions</h4>
                  
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-xs">Virtual Champions League</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-xs">Super Cup</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="glass" size="sm" className="w-full" leftIcon={<CalendarClock size={14} />}>
                  Plan Next Season
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default LeagueManagement;

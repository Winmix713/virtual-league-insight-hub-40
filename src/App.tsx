
import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { StatCard } from "@/components/ui/stat-card";
import { 
  Users, Trophy, BarChart, Calendar, Info, ChevronRight 
} from "lucide-react";

const queryClient = new QueryClient();

type StatusType = "completed" | "live" | "upcoming";

interface Match {
  date: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  status: StatusType;
  homeTeamLogo?: string;
  awayTeamLogo?: string;
}

interface UpcomingMatch {
  date: string;
  time: string;
  homeTeam: string;
  homeTeamAbbr: string;
  awayTeam: string;
  awayTeamAbbr: string;
  league: string;
  homeTeamLogo?: string;
  awayTeamLogo?: string;
}

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample data
  const statsData = {
    teams: {
      value: 16,
      change: {
        value: "+4",
        isPositive: true,
        text: "from last month"
      }
    },
    matches: {
      value: 18,
      change: {
        value: "+2",
        isPositive: true,
        text: "from last week"
      }
    },
    accuracy: {
      value: "76%",
      change: {
        value: "+2.5%",
        isPositive: true,
        text: "from last month"
      }
    },
    leagues: {
      value: 1,
      info: "Virtual Premier League"
    }
  };

  const matchesData: Match[] = [
    {
      date: "2025-05-15",
      homeTeam: "Liverpool",
      awayTeam: "Manchester Kék",
      score: "2-1",
      status: "completed"
    },
    {
      date: "2025-05-16",
      homeTeam: "London Ágyúk",
      awayTeam: "Chelsea",
      score: "0-0",
      status: "live"
    },
    {
      date: "2025-05-17",
      homeTeam: "Tottenham",
      awayTeam: "West Ham",
      score: "3-2",
      status: "completed"
    },
    {
      date: "2025-05-18",
      homeTeam: "Aston Oroszlán",
      awayTeam: "Everton",
      score: "-",
      status: "upcoming"
    }
  ];

  const upcomingMatchesData: UpcomingMatch[] = [
    {
      date: "2025-05-18",
      time: "15:00",
      homeTeam: "Aston Oroszlán",
      homeTeamAbbr: "AO",
      awayTeam: "Everton",
      awayTeamAbbr: "EV",
      league: "Virtual Premier League"
    },
    {
      date: "2025-05-19",
      time: "20:00",
      homeTeam: "Newcastle",
      homeTeamAbbr: "NC",
      awayTeam: "Brighton",
      awayTeamAbbr: "BR",
      league: "Virtual Premier League"
    },
    {
      date: "2025-05-20",
      time: "16:45",
      homeTeam: "London Ágyúk",
      homeTeamAbbr: "LÁ",
      awayTeam: "Vörös Ördögök",
      awayTeamAbbr: "VÖ",
      league: "Virtual Premier League"
    }
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-gradient-to-br from-[#09090b] to-[#0d0d0f] text-white flex flex-col">
          {/* Background elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          </div>

          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} scrolled={scrolled} />

          <div className="flex flex-1 overflow-hidden">
            <Sidebar 
              isOpen={sidebarOpen} 
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
              activePath="/"
            />

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
              <div className="w-full px-4 py-8 space-y-6">
                {/* Dashboard Header */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <Button
                      variant="glass"
                      size="sm"
                      rightIcon={<ChevronRight size={16} />}
                    >
                      View Reports
                    </Button>
                  </div>
                  <p className="text-gray-400">
                    Overview of your Virtual Premier League management system
                  </p>
                </div>

                {/* League Info Banner */}
                <Card
                  className="bg-blue-950/20 border-blue-900/20 backdrop-blur-sm"
                >
                  <div className="space-y-1.5 p-6 flex flex-row items-start gap-3 pb-2">
                    <div className="pt-0.5">
                      <Info className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight text-lg">
                        Virtual Premier League Teams Only
                      </h3>
                      <p className="text-sm text-gray-400">
                        This platform exclusively features Virtual Premier League teams. All match data and statistics refer to these virtual teams, not actual Premier League teams.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Statistics Grid - Enhanced with interactive widgets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  <StatCard
                    title="Total Teams"
                    value={statsData.teams.value}
                    icon={<Users size={24} />}
                    color="blue"
                    change={statsData.teams.change}
                    trend={[20, 25, 30, 28, 32, 35]}
                    interactive={true}
                  />

                  <StatCard
                    title="Upcoming Matches"
                    value={statsData.matches.value}
                    icon={<Calendar size={24} />}
                    color="green"
                    change={statsData.matches.change}
                    trend={[15, 18, 22, 19, 25, 28]}
                    interactive={true}
                  />

                  <StatCard
                    title="Prediction Accuracy"
                    value={statsData.accuracy.value}
                    icon={<BarChart size={24} />}
                    color="purple"
                    change={statsData.accuracy.change}
                    trend={[65, 68, 70, 72, 74, 76]}
                    interactive={true}
                  />

                  <StatCard
                    title="Active Leagues"
                    value={statsData.leagues.value}
                    icon={<Trophy size={24} />}
                    color="amber"
                    change={statsData.leagues.info ? {
                      value: "",
                      isPositive: true,
                      text: statsData.leagues.info
                    } : undefined}
                    interactive={true}
                  />
                </div>

                {/* Quick Actions Bar */}
                <Card glassmorphism glowColor="purple" className="mt-6">
                  <div className="p-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button variant="glass" size="sm" leftIcon={<Calendar size={16} />}>
                        Create Match
                      </Button>
                      <Button variant="glass" size="sm" leftIcon={<Users size={16} />}>
                        Add Team
                      </Button>
                      <Button variant="glass" size="sm" leftIcon={<BarChart size={16} />}>
                        View Analytics
                      </Button>
                      <Button variant="glass" size="sm" leftIcon={<Trophy size={16} />}>
                        League Settings
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Main Content Grid */}
                <div className="w-full grid gap-6 grid-cols-1 lg:grid-cols-12">
                  {/* Matches Table */}
                  <div className="w-full lg:col-span-8">
                    <Card glassmorphism glowColor="blue" className="w-full">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <Trophy className="h-5 w-5 text-amber-500" />
                            <h2 className="text-xl font-semibold">Recent Matches</h2>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <span>All Matches</span>
                            <ChevronRight className="h-4 w-4 ml-1 text-gray-500" />
                          </div>
                        </div>

                        <div className="overflow-x-auto -mx-6">
                          <div className="inline-block min-w-full align-middle px-6">
                            <table className="min-w-full">
                              <thead>
                                <tr className="border-b border-[#222224]">
                                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Date</th>
                                  <th className="text-right py-3 px-2 text-sm font-medium text-gray-400">Home Team</th>
                                  <th className="text-center py-3 px-2 text-sm font-medium text-gray-400">Score</th>
                                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Away Team</th>
                                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-400">Status</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#222224]">
                                {matchesData.map((match, index) => (
                                  <tr
                                    key={index}
                                    className="hover:bg-white/5 transition-colors duration-150"
                                  >
                                    <td className="py-4 px-2 text-sm whitespace-nowrap">{match.date}</td>
                                    <td className="py-4 px-2">
                                      <div className="flex items-center justify-end gap-2">
                                        <span className="text-sm font-medium whitespace-nowrap">{match.homeTeam}</span>
                                        <div className="h-6 w-6 rounded-full bg-[#1e1e20] flex items-center justify-center">
                                          <span className="text-xs font-bold text-gray-300">{match.homeTeam.charAt(0)}</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="py-4 px-2">
                                      <div className="flex items-center justify-center">
                                        <div
                                          className={`py-1 px-3 rounded text-center min-w-16 ${
                                            match.status === "live" ? "bg-red-900/20 text-white animate-pulse" : "text-gray-300"
                                          }`}
                                        >
                                          <span className="text-sm font-mono font-medium whitespace-nowrap">{match.score}</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="py-4 px-2">
                                      <div className="flex items-center gap-2">
                                        <div className="h-6 w-6 rounded-full bg-[#1e1e20] flex items-center justify-center">
                                          <span className="text-xs font-bold text-gray-300">{match.awayTeam.charAt(0)}</span>
                                        </div>
                                        <span className="text-sm font-medium whitespace-nowrap">{match.awayTeam}</span>
                                      </div>
                                    </td>
                                    <td className="py-4 px-2">
                                      <StatusBadge status={match.status} animated={match.status === "live"} />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
                            View All Matches
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Upcoming Matches */}
                  <div className="w-full lg:col-span-4">
                    <Card glassmorphism glowColor="green">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-green-500" />
                            <h2 className="text-xl font-semibold">Upcoming Matches</h2>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <span>View All</span>
                            <ChevronRight className="h-4 w-4 ml-1 text-gray-500" />
                          </div>
                        </div>

                        <div className="space-y-4">
                          {upcomingMatchesData.map((match, index) => (
                            <div
                              key={index}
                              className="border border-[#222224] rounded-lg p-3 hover:bg-white/5 transition-all duration-300 hover:border-white/20 hover:shadow-md group"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {match.date} {match.time}
                                </span>
                                <span className="text-xs font-medium bg-blue-600/20 text-blue-500 px-2 py-0.5 rounded">
                                  {match.league}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-medium bg-[#1e1e20] px-1.5 py-0.5 rounded group-hover:bg-[#2a2a2e] transition-colors">
                                    {match.homeTeamAbbr}
                                  </span>
                                  <span className="text-sm font-medium group-hover:text-white transition-colors">
                                    {match.homeTeam}
                                  </span>
                                </div>

                                <span className="text-xs font-medium text-gray-400 mx-2 group-hover:text-white transition-colors">vs</span>

                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium group-hover:text-white transition-colors">
                                    {match.awayTeam}
                                  </span>
                                  <span className="text-xs font-medium bg-[#1e1e20] px-1.5 py-0.5 rounded group-hover:bg-[#2a2a2e] transition-colors">
                                    {match.awayTeamAbbr}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
                            View All Upcoming
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

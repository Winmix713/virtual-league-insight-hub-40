
import React from "react";
import { Layers, ChevronRight, Eye, Filter, Clock } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { cn } from "@/lib/utils";

interface PatternData {
  id: number;
  title: string;
  description: string;
  frequency: number;
  impact: "High" | "Medium" | "Low";
  teams: string[];
  timeFrame: string;
  success: number;
}

const Patterns = () => {
  // Sample patterns data
  const patterns: PatternData[] = [
    {
      id: 1,
      title: "High Press Counter",
      description: "Teams employing high press tactics often leave space behind the defensive line, creating counter-attack opportunities.",
      frequency: 68,
      impact: "High",
      teams: ["Manchester Kék", "Liverpool", "London Ágyúk"],
      timeFrame: "First 30 min",
      success: 78
    },
    {
      id: 2,
      title: "Wing Overload",
      description: "Attacking down a specific wing with fullback and winger combinations to create numerical advantage.",
      frequency: 52,
      impact: "Medium",
      teams: ["Liverpool", "Vörös Ördögök", "Chelsea"],
      timeFrame: "Throughout",
      success: 65
    },
    {
      id: 3,
      title: "Late Game Set Pieces",
      description: "Increased success rate on set pieces in the final 15 minutes of matches.",
      frequency: 45,
      impact: "High",
      teams: ["Aston Oroszlán", "Tottenham", "Liverpool"],
      timeFrame: "Last 15 min",
      success: 72
    },
    {
      id: 4,
      title: "False Nine Movement",
      description: "Striker drops deep, creating space for midfielders to run into attacking positions.",
      frequency: 38,
      impact: "Medium",
      teams: ["Manchester Kék", "London Ágyúk"],
      timeFrame: "Throughout",
      success: 58
    },
    {
      id: 5,
      title: "Low Block Transition",
      description: "Defensive shape transitioning to quick counter-attack when possession is regained.",
      frequency: 62,
      impact: "High",
      teams: ["Tottenham", "Chelsea", "West Ham"],
      timeFrame: "Second half",
      success: 69
    },
    {
      id: 6,
      title: "Pressing Trap",
      description: "Inviting pressure to one side before quickly switching play to exploit open space.",
      frequency: 35,
      impact: "Medium",
      teams: ["Liverpool", "Manchester Kék"],
      timeFrame: "Throughout",
      success: 62
    }
  ];

  const statsData = {
    totalPatterns: 24,
    highImpact: 9,
    activeTeams: 16,
    avgSuccess: "68%"
  };

  return (
    <DashboardLayout 
      title="Game Patterns" 
      subtitle="Identify and analyze recurring tactical patterns"
    >
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <StatCard
          title="Total Patterns"
          value={statsData.totalPatterns}
          icon={<Layers size={24} />}
          color="blue"
          change={{ 
            value: "+3", 
            isPositive: true, 
            text: "new patterns" 
          }}
        />

        <StatCard
          title="High Impact"
          value={statsData.highImpact}
          icon={<Layers size={24} />}
          color="green"
          change={{ 
            value: "37.5%", 
            isPositive: true, 
            text: "of all patterns" 
          }}
        />

        <StatCard
          title="Active Teams"
          value={statsData.activeTeams}
          icon={<Layers size={24} />}
          color="purple"
          change={{ 
            value: "100%", 
            isPositive: true, 
            text: "participation" 
          }}
        />

        <StatCard
          title="Avg. Success Rate"
          value={statsData.avgSuccess}
          icon={<Layers size={24} />}
          color="amber"
          change={{ 
            value: "+2.5%", 
            isPositive: true, 
            text: "improved" 
          }}
        />
      </div>

      {/* Patterns Grid */}
      <Card glassmorphism glowColor="blue" className="mt-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">Game Patterns</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" leftIcon={<Filter size={16} />} size="sm">
                Filter
              </Button>
              <Button variant="glass" leftIcon={<Layers size={16} />} size="sm">
                New Pattern
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.map((pattern) => (
              <div key={pattern.id} className="border border-[#222224] rounded-lg p-5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">{pattern.title}</h3>
                  <span className={cn(
                    "px-2 py-0.5 text-xs rounded font-medium",
                    pattern.impact === "High" ? "bg-green-900/30 text-green-500" :
                    pattern.impact === "Medium" ? "bg-amber-900/30 text-amber-500" :
                    "bg-blue-900/30 text-blue-500"
                  )}>
                    {pattern.impact} Impact
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">{pattern.description}</p>
                
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Frequency</span>
                    <span className="text-xs font-medium">{pattern.frequency} occurrences</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Time Frame</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs font-medium">{pattern.timeFrame}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Success Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-[#222224] rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full",
                            pattern.success >= 70 ? "bg-green-500" :
                            pattern.success >= 50 ? "bg-amber-500" :
                            "bg-red-500"
                          )}
                          style={{ width: `${pattern.success}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">{pattern.success}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="text-xs text-gray-400 block mb-2">Teams</span>
                  <div className="flex flex-wrap gap-1">
                    {pattern.teams.map((team, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-[#1e1e20] px-2 py-0.5 rounded"
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-4 text-blue-500"
                  leftIcon={<Eye size={14} />}
                  rightIcon={<ChevronRight size={14} />}
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              Load More Patterns
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Pattern Analysis */}
      <Card glassmorphism glowColor="purple" className="mt-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 text-purple-500" />
              <h2 className="text-xl font-semibold">Pattern Analysis</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 border border-[#222224] rounded-lg p-4">
              <h3 className="font-semibold mb-3">Pattern Distribution by Impact</h3>
              
              {/* Simple bar chart for pattern distribution */}
              <div className="mt-6 h-64">
                <div className="h-full flex items-end justify-around">
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-green-500/80 rounded-t" style={{height: '55%'}}></div>
                    <span className="mt-2 text-xs text-gray-400">High</span>
                    <span className="text-sm font-medium">9</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-amber-500/80 rounded-t" style={{height: '40%'}}></div>
                    <span className="mt-2 text-xs text-gray-400">Medium</span>
                    <span className="text-sm font-medium">11</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-500/80 rounded-t" style={{height: '15%'}}></div>
                    <span className="mt-2 text-xs text-gray-400">Low</span>
                    <span className="text-sm font-medium">4</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-[#222224] rounded-lg p-4">
              <h3 className="font-semibold mb-4">Pattern Success</h3>
              
              {/* Simple pie chart simulation */}
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-8 border-green-500/80" style={{clipPath: 'polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0)'}}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-amber-500/80" style={{clipPath: 'polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%)','transform': 'rotate(25deg)'}}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-red-500/80" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)','transform': 'rotate(200deg)'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold text-lg">68%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-green-500/80"></span>
                    <span className="text-xs text-gray-400">Successful</span>
                  </div>
                  <span className="text-xs font-medium">68%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-amber-500/80"></span>
                    <span className="text-xs text-gray-400">Partial</span>
                  </div>
                  <span className="text-xs font-medium">25%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-red-500/80"></span>
                    <span className="text-xs text-gray-400">Failed</span>
                  </div>
                  <span className="text-xs font-medium">7%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              Generate Full Analysis Report
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Patterns;

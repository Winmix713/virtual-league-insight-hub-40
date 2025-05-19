
import React from "react";
import { BarChart2, TrendingUp, BarChart, Download, ChevronRight, ArrowUpRight } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";

const Analysis = () => {
  // Sample data for charts
  const performanceData = [
    { team: "Manchester Kék", won: 14, drawn: 2, lost: 4 },
    { team: "Liverpool", won: 13, drawn: 3, lost: 4 },
    { team: "London Ágyúk", won: 12, drawn: 5, lost: 3 },
    { team: "Vörös Ördögök", won: 11, drawn: 4, lost: 5 },
    { team: "Chelsea", won: 10, drawn: 4, lost: 6 }
  ];

  const statsData = {
    accuracy: "76%",
    totalPredictions: 240,
    successRate: "82%",
    improvement: "+4.2%"
  };

  return (
    <DashboardLayout 
      title="Analysis" 
      subtitle="Performance analytics and team comparisons"
    >
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <StatCard
          title="Prediction Accuracy"
          value={statsData.accuracy}
          icon={<BarChart2 size={24} />}
          color="blue"
          change={{ 
            value: "+3.5%", 
            isPositive: true, 
            text: "from last month" 
          }}
          trend={[20, 45, 30, 65, 85, 70]}
        />

        <StatCard
          title="Total Predictions"
          value={statsData.totalPredictions}
          icon={<TrendingUp size={24} />}
          color="green"
          change={{ 
            value: "+24", 
            isPositive: true, 
            text: "new predictions" 
          }}
          trend={[30, 40, 45, 50, 55, 60]}
        />

        <StatCard
          title="Success Rate"
          value={statsData.successRate}
          icon={<BarChart size={24} />}
          color="purple"
          change={{ 
            value: "+5.3%", 
            isPositive: true, 
            text: "year over year" 
          }}
          trend={[50, 60, 45, 70, 65, 80]}
        />

        <StatCard
          title="Improvement"
          value={statsData.improvement}
          icon={<ArrowUpRight size={24} />}
          color="amber"
          change={{ 
            value: "Consistent", 
            isPositive: true, 
            text: "growth trend" 
          }}
          trend={[25, 40, 55, 45, 60, 75]}
        />
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card glassmorphism glowColor="blue">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <BarChart2 className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">Team Performance</h2>
              </div>
              <Button variant="outline" size="sm" leftIcon={<Download size={16} />}>
                Export
              </Button>
            </div>
            
            <div className="h-80 w-full flex">
              {/* Simulated chart for teams performance */}
              <div className="w-full h-full flex flex-col justify-end">
                <div className="flex w-full h-full items-end justify-between gap-8 pb-6">
                  {performanceData.map((team, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="w-full flex flex-col items-center gap-1">
                        <div className="h-[calc(var(--won)*3px)] w-full bg-green-500/80 rounded-t-sm"
                            style={{ "--won": team.won } as React.CSSProperties}></div>
                        <div className="h-[calc(var(--drawn)*3px)] w-full bg-amber-500/80"
                            style={{ "--drawn": team.drawn } as React.CSSProperties}></div>
                        <div className="h-[calc(var(--lost)*3px)] w-full bg-red-500/80 rounded-b-sm"
                            style={{ "--lost": team.lost } as React.CSSProperties}></div>
                      </div>
                      <span className="text-xs font-medium text-gray-400 mt-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                        {team.team}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center border-t border-[#222224] pt-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-green-500/80"></span>
                      <span className="text-xs text-gray-400">Won</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-amber-500/80"></span>
                      <span className="text-xs text-gray-400">Drawn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-red-500/80"></span>
                      <span className="text-xs text-gray-400">Lost</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" rightIcon={<ChevronRight size={14} />}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card glassmorphism glowColor="purple">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <h2 className="text-xl font-semibold">Prediction Trends</h2>
              </div>
              <Button variant="outline" size="sm" leftIcon={<Download size={16} />}>
                Export
              </Button>
            </div>
            
            <div className="h-80 w-full flex">
              {/* Simulated line chart for prediction trends */}
              <div className="w-full h-full flex flex-col justify-end">
                <div className="w-full h-full relative">
                  {/* SVG Line Chart Simulation */}
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#222224" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#222224" strokeWidth="0.5" />
                    <line x1="0" y1="75" x2="100" y2="75" stroke="#222224" strokeWidth="0.5" />
                    
                    {/* Accuracy Line */}
                    <path 
                      d="M0,65 L20,55 L40,60 L60,45 L80,30 L100,25" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="2"
                    />
                    
                    {/* Area under the curve */}
                    <path 
                      d="M0,65 L20,55 L40,60 L60,45 L80,30 L100,25 L100,100 L0,100 Z" 
                      fill="url(#blueGradient)" 
                      opacity="0.2" 
                    />
                    
                    {/* Prediction Line */}
                    <path 
                      d="M0,70 L20,65 L40,50 L60,40 L80,35 L100,30" 
                      fill="none" 
                      stroke="#a855f7" 
                      strokeWidth="2"
                    />
                    
                    {/* Area under the curve */}
                    <path 
                      d="M0,70 L20,65 L40,50 L60,40 L80,35 L100,30 L100,100 L0,100 Z" 
                      fill="url(#purpleGradient)" 
                      opacity="0.2" 
                    />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Y-axis labels */}
                  <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-400 pointer-events-none">
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400 pointer-events-none">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-t border-[#222224] pt-4 mt-8">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-blue-500/80"></span>
                      <span className="text-xs text-gray-400">Accuracy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-purple-500/80"></span>
                      <span className="text-xs text-gray-400">Predictions</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" rightIcon={<ChevronRight size={14} />}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Team Comparison */}
      <Card glassmorphism glowColor="green" className="mt-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BarChart className="h-5 w-5 text-green-500" />
              <h2 className="text-xl font-semibold">Team Comparison</h2>
            </div>
            <Button variant="glass" size="sm">
              Compare Teams
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#222224] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#1e1e20] flex items-center justify-center">
                    <span className="font-bold text-white">MK</span>
                  </div>
                  <h3 className="font-medium">Manchester Kék</h3>
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Attack</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Defense</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Possession</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Form</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-[#222224] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#1e1e20] flex items-center justify-center">
                    <span className="font-bold text-white">LI</span>
                  </div>
                  <h3 className="font-medium">Liverpool</h3>
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Attack</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Defense</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Possession</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-400">Form</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full h-2 bg-[#222224] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 border border-[#222224] rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Head to Head</h3>
              <div className="flex items-center gap-3">
                <span className="text-sm">Last 5 matches</span>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-3 my-6">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-[#1e1e20] flex items-center justify-center">
                  <span className="font-bold text-white">MK</span>
                </div>
                <span className="font-medium mt-2">3</span>
              </div>
              
              <div className="flex flex-col items-center px-4">
                <span className="text-sm text-gray-400">Draws</span>
                <span className="font-medium mt-2">1</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-[#1e1e20] flex items-center justify-center">
                  <span className="font-bold text-white">LI</span>
                </div>
                <span className="font-medium mt-2">1</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-1">
              <span className="w-8 h-6 flex items-center justify-center rounded bg-blue-700/30 text-blue-500 text-xs font-medium">MK</span>
              <span className="w-8 h-6 flex items-center justify-center rounded bg-gray-700/30 text-gray-500 text-xs font-medium">D</span>
              <span className="w-8 h-6 flex items-center justify-center rounded bg-blue-700/30 text-blue-500 text-xs font-medium">MK</span>
              <span className="w-8 h-6 flex items-center justify-center rounded bg-red-700/30 text-red-500 text-xs font-medium">LI</span>
              <span className="w-8 h-6 flex items-center justify-center rounded bg-blue-700/30 text-blue-500 text-xs font-medium">MK</span>
            </div>
          </div>
          
          <div className="mt-6">
            <Button variant="glass" fullWidth={true} rightIcon={<ChevronRight size={16} />}>
              View Detailed Analysis
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Analysis;

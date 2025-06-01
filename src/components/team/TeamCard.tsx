import React, { useState } from "react";
import { Users, TrendingUp, TrendingDown, ChevronDown, ChevronUp, Target, Award, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamStats {
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  position?: number;
  players: number;
  cleanSheets?: number;
  avgGoalsPerGame?: number;
  avgConcededPerGame?: number;
}

interface FormData {
  result: "W" | "D" | "L";
}

interface PlayerInfo {
  name: string;
  position: string;
  goals: number;
  assists: number;
}

interface TeamCardProps {
  name: string;
  logo: string;
  division: string;
  stats: TeamStats;
  form: FormData[];
  topPlayers?: PlayerInfo[];
  onClick?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  logo,
  division,
  stats,
  form,
  topPlayers = [],
  onClick
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const goalDifference = stats.goalsFor - stats.goalsAgainst;
  const gamesPlayed = stats.wins + stats.draws + stats.losses;
  const winPercentage = gamesPlayed > 0 ? Math.round((stats.wins / gamesPlayed) * 100) : 0;

  const handleExpandToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <Card 
      className="p-5 hover:bg-white/5 transition-all duration-300 cursor-pointer group border-[#222224] hover:border-white/20 overflow-hidden"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="font-bold text-white text-sm">{logo}</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400">{division} Division</p>
              {stats.cleanSheets && (
                <div className="flex items-center gap-1">
                  <Award className="h-3 w-3 text-blue-400" />
                  <span className="text-xs text-blue-400">{stats.cleanSheets} CS</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {stats.position && (
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400">Position</span>
              <span className={cn(
                "text-xl font-bold",
                stats.position <= 4 ? "text-green-500" :
                stats.position <= 10 ? "text-blue-500" :
                "text-gray-400"
              )}>
                #{stats.position}
              </span>
            </div>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={handleExpandToggle}
            className="p-1 h-6 w-6"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-green-500">{stats.wins}</div>
          <div className="text-xs text-gray-400">Wins</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-amber-500">{stats.draws}</div>
          <div className="text-xs text-gray-400">Draws</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-red-500">{stats.losses}</div>
          <div className="text-xs text-gray-400">Losses</div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Points</span>
          <span className="font-semibold">{stats.points}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Goal Difference</span>
          <span className={cn(
            "font-semibold flex items-center gap-1",
            goalDifference > 0 ? "text-green-500" : goalDifference < 0 ? "text-red-500" : "text-gray-400"
          )}>
            {goalDifference > 0 ? <TrendingUp className="h-3 w-3" /> : goalDifference < 0 ? <TrendingDown className="h-3 w-3" /> : null}
            {goalDifference > 0 ? `+${goalDifference}` : goalDifference}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Win Rate</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-[#222224] rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-1000"
                style={{ width: `${winPercentage}%` }}
              />
            </div>
            <span className="font-semibold text-xs">{winPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="space-y-4 border-t border-[#222224] pt-4 mb-4">
          {/* Advanced Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Avg Goals/Game</span>
              <div className="flex items-center gap-1">
                <Target className="h-3 w-3 text-blue-400" />
                <span className="text-xs font-medium">{stats.avgGoalsPerGame || (stats.goalsFor / gamesPlayed).toFixed(1)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Avg Conceded</span>
              <span className="text-xs font-medium">{stats.avgConcededPerGame || (stats.goalsAgainst / gamesPlayed).toFixed(1)}</span>
            </div>
          </div>

          {/* Top Players */}
          {topPlayers.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                <Users className="h-3 w-3" />
                Top Players
              </h4>
              <div className="space-y-1">
                {topPlayers.slice(0, 3).map((player, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-gray-300">{player.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{player.position}</span>
                      <span className="text-green-400">{player.goals}G</span>
                      <span className="text-blue-400">{player.assists}A</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Indicators */}
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 bg-[#1e1e20] rounded">
              <div className="text-xs text-gray-400">Attack</div>
              <div className={cn(
                "text-sm font-medium",
                winPercentage > 60 ? "text-green-500" : winPercentage > 40 ? "text-amber-500" : "text-red-500"
              )}>
                {Math.round((stats.goalsFor / gamesPlayed) * 10)}
              </div>
            </div>
            <div className="text-center p-2 bg-[#1e1e20] rounded">
              <div className="text-xs text-gray-400">Defense</div>
              <div className={cn(
                "text-sm font-medium",
                (stats.goalsAgainst / gamesPlayed) < 1 ? "text-green-500" : 
                (stats.goalsAgainst / gamesPlayed) < 1.5 ? "text-amber-500" : "text-red-500"
              )}>
                {Math.round(10 - (stats.goalsAgainst / gamesPlayed) * 2)}
              </div>
            </div>
            <div className="text-center p-2 bg-[#1e1e20] rounded">
              <div className="text-xs text-gray-400">Form</div>
              <div className={cn(
                "text-sm font-medium",
                form.slice(-3).filter(f => f.result === "W").length >= 2 ? "text-green-500" :
                form.slice(-3).filter(f => f.result === "L").length >= 2 ? "text-red-500" : "text-amber-500"
              )}>
                {form.slice(-3).filter(f => f.result === "W").length >= 2 ? "Hot" :
                 form.slice(-3).filter(f => f.result === "L").length >= 2 ? "Cold" : "Mixed"}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Recent Form</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Last 5 games</span>
          </div>
        </div>
        <div className="flex gap-1">
          {form.slice(-5).map((game, idx) => (
            <div
              key={idx}
              className={cn(
                "w-6 h-6 rounded text-xs font-medium flex items-center justify-center transition-all duration-200 hover:scale-110",
                game.result === "W" ? "bg-green-700/30 text-green-400 border border-green-700/50" :
                game.result === "D" ? "bg-amber-700/30 text-amber-400 border border-amber-700/50" :
                "bg-red-700/30 text-red-400 border border-red-700/50"
              )}
            >
              {game.result}
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Button 
        variant="ghost" 
        className="w-full group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors"
        size="sm"
      >
        View Details
      </Button>
    </Card>
  );
};
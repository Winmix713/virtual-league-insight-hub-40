import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, Users, Trophy, Target, TrendingUp, Star, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { getTeamLogoUrl } from "@/data/teams";

interface TeamStats {
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  position?: number;
  players: number;
}

interface TeamForm {
  result: "W" | "D" | "L";
}

interface TeamCardProps {
  name: string;
  logo: string;
  division: string;
  stats: TeamStats;
  form: TeamForm[];
  onClick?: () => void;
  className?: string;
  featured?: boolean;
  loading?: boolean;
}

export function TeamCard({
  name,
  logo,
  division,
  stats,
  form,
  onClick,
  className,
  featured = false,
  loading = false
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const goalDifference = stats.goalsFor - stats.goalsAgainst;
  const totalGames = stats.wins + stats.draws + stats.losses;
  const winPercentage = totalGames > 0 ? (stats.wins / totalGames) * 100 : 0;

  if (loading) {
    return (
      <Card className={cn("p-6 animate-pulse", className)}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-700"></div>
            <div>
              <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
              <div className="h-3 bg-gray-700 rounded w-16"></div>
            </div>
          </div>
          <div className="h-8 w-8 bg-gray-700 rounded"></div>
        </div>
        <div className="space-y-3">
          <div className="h-16 bg-gray-700 rounded"></div>
          <div className="h-2 bg-gray-700 rounded"></div>
          <div className="h-8 bg-gray-700 rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
    >
      <Card
        glassmorphism
        glowColor={featured ? "amber" : "blue"}
        intensity="medium"
        className={cn(
          "p-6 cursor-pointer group relative overflow-hidden",
          "hover:shadow-2xl transition-all duration-500",
          featured && "ring-2 ring-amber-500/30",
          className
        )}
        onClick={onClick}
      >
        {/* Premium Badge */}
        {featured && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium"
          >
            Featured
          </motion.div>
        )}

        {/* Animated Background Glow */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
          />
        )}

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-white/20 backdrop-blur-sm overflow-hidden"
              >
                {getTeamLogoUrl(name) ? (
                  <img 
                    src={getTeamLogoUrl(name)} 
                    alt={`${name} logo`}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="font-bold text-lg text-white">${logo}</span>`;
                    }}
                  />
                ) : (
                  <span className="font-bold text-lg text-white">{logo}</span>
                )}
              </motion.div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-gray-400">{division} Division</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {stats.position && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex flex-col items-center bg-black/20 rounded-lg p-2 backdrop-blur-sm"
                >
                  <span className="text-xs text-gray-400">Pos</span>
                  <span className="text-lg font-bold text-amber-500">#{stats.position}</span>
                </motion.div>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorite(!isFavorite);
                }}
                className={cn(
                  "p-2 rounded-full transition-all duration-200",
                  isFavorite ? "text-yellow-500" : "text-gray-400 hover:text-yellow-500"
                )}
              >
                <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
              </motion.button>
            </div>
          </div>

          {/* Enhanced Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Trophy size={12} />
                  Points
                </span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-sm font-bold text-white bg-blue-500/20 px-2 py-1 rounded"
                >
                  {stats.points}
                </motion.span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">Matches</span>
                <span className="text-sm font-medium text-white">{totalGames}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Users size={12} />
                  Squad
                </span>
                <span className="text-sm font-medium text-white">{stats.players}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">Goals</span>
                <span className="text-sm font-medium text-white">{stats.goalsFor}:{stats.goalsAgainst}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">Difference</span>
                <span className={cn(
                  "text-sm font-medium",
                  goalDifference > 0 ? "text-green-500" : goalDifference < 0 ? "text-red-500" : "text-gray-400"
                )}>
                  {goalDifference > 0 ? "+" : ""}{goalDifference}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <TrendingUp size={12} />
                  Win Rate
                </span>
                <span className="text-sm font-medium text-white">{winPercentage.toFixed(0)}%</span>
              </div>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">Performance</span>
              <span className="text-xs text-gray-400">{winPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${winPercentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Form Display */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-gray-400">Recent Form</span>
              <div className="flex gap-1">
                {form.slice(-5).map((match, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    className={cn(
                      "w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-200",
                      "border-2 backdrop-blur-sm",
                      match.result === "W" ? "bg-green-500/20 border-green-500 text-green-400" :
                      match.result === "D" ? "bg-yellow-500/20 border-yellow-500 text-yellow-400" :
                      "bg-red-500/20 border-red-500 text-red-400"
                    )}
                  >
                    {match.result}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-3 bg-green-500/10 rounded-lg border border-green-500/30 backdrop-blur-sm"
            >
              <Trophy className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-xs font-bold text-green-400">{stats.wins}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 backdrop-blur-sm"
            >
              <Target className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-xs font-bold text-yellow-400">{stats.draws}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-3 bg-red-500/10 rounded-lg border border-red-500/30 backdrop-blur-sm"
            >
              <Users className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-xs font-bold text-red-400">{stats.losses}</span>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 backdrop-blur-sm border border-blue-500/20"
              leftIcon={<Eye size={14} />}
            >
              View Details
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300 hover:bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <MoreHorizontal size={14} />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
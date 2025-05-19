
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, MinusCircle, XCircle, Heart, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
}

interface MatchResult {
  result: "W" | "D" | "L";
  opponent?: string;
  score?: string;
  date?: string;
}

interface TeamCardProps {
  name: string;
  logo: string;
  division: string;
  stats: TeamStats;
  form: MatchResult[];
  onClick?: () => void;
}

export const TeamCard = ({
  name,
  logo,
  division,
  stats,
  form,
  onClick
}: TeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [activeResult, setActiveResult] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 5; // Reduced rotation intensity
      const rotateY = (x / rect.width) * 5;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setActiveResult(null);
  };

  const getResultColor = (result: "W" | "D" | "L") => {
    switch (result) {
      case "W": return "bg-green-700/30 text-green-500";
      case "D": return "bg-amber-700/30 text-amber-500";
      case "L": return "bg-red-700/30 text-red-500";
    }
  };

  // Calculate form percentage
  const totalPoints = stats.wins * 3 + stats.draws;
  const maxPoints = form.length * 3;
  const formPercentage = maxPoints > 0 ? (totalPoints / maxPoints) * 100 : 0;

  return (
    <div className="w-full">
      <motion.div
        ref={cardRef}
        className="w-full perspective-1000"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotateX: rotation.x,
          rotateY: rotation.y
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          opacity: { duration: 0.6 }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ 
          transformStyle: "preserve-3d",
        }}
        onClick={onClick}
      >
        {/* Card container */}
        <div className="w-full overflow-hidden h-full rounded-lg cursor-pointer">
          {/* Glass effect background */}
          <div className="absolute inset-0 rounded-lg backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/80 border border-white/10 shadow-lg"></div>
          
          {/* Modern mesh gradient overlay */}
          <motion.div
            className="absolute inset-0 z-0 rounded-lg"
            style={{
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
              pointerEvents: "none",
            }}
            animate={{
              opacity: isHovered ? 0.95 : 0.8,
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Enhanced light effect on hover */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-0 pointer-events-none rounded-lg"
            style={{
              background: "radial-gradient(circle at var(--x) var(--y), rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
              mixBlendMode: "soft-light",
            }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              "--x": `${50 + rotation.y * 2}%`,
              "--y": `${50 + rotation.x * 2}%`,
            } as any}
            transition={{ duration: 0.3 }}
          />
          
          {/* Subtle border glow */}
          <motion.div 
            className="absolute inset-0 rounded-lg z-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
            animate={{
              boxShadow: isHovered 
                ? "inset 0 0 0 1px rgba(255, 255, 255, 0.2)" 
                : "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          />
          
          <div className="relative z-10 p-6 flex flex-col h-full">
            {/* Header with team info */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {logo.startsWith('http') ? (
                    <img src={logo} alt={name} className="w-8 h-8 object-contain" />
                  ) : (
                    <span className="text-white font-bold">{logo}</span>
                  )}
                </motion.div>
                <div>
                  <h2 className="text-lg font-semibold text-white">{name}</h2>
                  <p className="text-sm text-white/70">{division} Division</p>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button 
                      className="text-white/80 hover:text-pink-500 transition-colors p-2 rounded-full bg-white/5"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to favorites</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "Wins", value: stats.wins, icon: <Trophy className="w-4 h-4 text-white/80" /> },
                { label: "Draws", value: stats.draws, icon: <MinusCircle className="w-4 h-4 text-white/80" /> },
                { label: "Losses", value: stats.losses, icon: <XCircle className="w-4 h-4 text-white/80" /> },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 rounded-xl p-3 backdrop-blur-sm"
                  whileHover={{ 
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                >
                  <div className="flex items-center gap-1 mb-1">
                    {stat.icon}
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                  </div>
                  <p className="text-xs text-white/70 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Recent Results */}
            <div className="mb-5">
              <h3 className="text-white/90 text-xs font-semibold mb-2 uppercase tracking-wider">Recent Results</h3>
              <div className="flex gap-2">
                {form.map((match, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          className={cn(
                            "w-6 h-6 flex items-center justify-center text-xs font-medium rounded-md cursor-pointer",
                            getResultColor(match.result)
                          )}
                          style={{ 
                            transformStyle: "preserve-3d",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                          }}
                          whileHover={{ 
                            scale: 1.15,
                            translateZ: 10,
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveResult(activeResult === index ? null : index);
                          }}
                        >
                          {match.result}
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {match.opponent && match.score ? (
                          <div className="text-xs p-1">
                            <p className="font-medium">{match.opponent}</p>
                            <p>{match.score} {match.date && `• ${match.date}`}</p>
                          </div>
                        ) : (
                          <p>{match.result === 'W' ? 'Win' : match.result === 'D' ? 'Draw' : 'Loss'}</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
            
            {/* Form Guide */}
            <div className="mb-5 bg-white/5 p-3 rounded-xl" style={{
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))",
            }}>
              <h3 className="text-white/90 text-xs font-semibold mb-2 uppercase tracking-wider">Form Guide</h3>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full"
                  style={{
                    background: "linear-gradient(to right, #f43f5e, #eab308, #10b981)",
                    borderRadius: "9999px",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${formPercentage}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-white/60">Poor</span>
                <span className="text-xs text-white/60">Excellent</span>
              </div>
            </div>
            
            {/* Footer Stats */}
            <div className="mt-auto grid grid-cols-2 gap-3">
              <motion.div 
                className="flex items-center gap-2 rounded-xl p-2.5"
                whileHover={{ 
                  y: -2,
                  boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.2 }
                }}
                style={{
                  background: "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.05))",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                  background: "rgba(245, 158, 11, 0.2)",
                }}>
                  <Trophy className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{stats.points}</p>
                  <p className="text-xs text-white/70">Points</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 rounded-xl p-2.5"
                whileHover={{ 
                  y: -2,
                  boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.2 }
                }}
                style={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                  background: "rgba(59, 130, 246, 0.2)",
                }}>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{stats.players}</p>
                  <p className="text-xs text-white/70">Players</p>
                </div>
              </motion.div>
            </div>
            
            {/* Position Badge */}
            {stats.position && (
              <div 
                className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
              >
                {stats.position}
                {stats.position === 1 ? 'st' : 
                  stats.position === 2 ? 'nd' : 
                  stats.position === 3 ? 'rd' : 'th'}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

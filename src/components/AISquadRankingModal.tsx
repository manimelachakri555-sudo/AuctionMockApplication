import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Sparkles,
  Bot,
  Award,
  Download,
  RefreshCw,
  X,
  Flame,
  Shield,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  FileCode,
  Users,
} from 'lucide-react';
import { AuctionRoomState, IPLTeam, TeamId, AIRankingReport, TeamAIRankingResult } from '../types/auction';
import { fetchGeminiAIRankings, evaluateSquadsAlgorithmic } from '../utils/aiSquadEvaluator';
import { exportSquadsToCSV, exportSquadsToJSON } from '../utils/squadExport';
import { IPL_TEAMS } from '../data/teamsData';
import { formatLakhsToINR } from '../utils/auctionCalculations';
import { TeamLogo } from './TeamLogo';

interface AISquadRankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: AuctionRoomState;
  onViewSquadDetails?: (teamId: TeamId) => void;
}

export const AISquadRankingModal: React.FC<AISquadRankingModalProps> = ({
  isOpen,
  onClose,
  room,
  onViewSquadDetails,
}) => {
  const [report, setReport] = useState<AIRankingReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [expandedTeamId, setExpandedTeamId] = useState<TeamId | null>(null);

  // Teams to evaluate: strictly participating teams with human participants (supports 1 to 10 players)
  const participatingTeams = Object.values(room.teams || {}).filter(
    (team) => team && team.isActive !== false && (!!team.ownerUserId || (room.activeTeamIds && room.activeTeamIds.includes(team.id)))
  );
  const teamsToEvaluate = participatingTeams.length > 0
    ? participatingTeams
    : Object.values(room.teams || {}).filter((t) => t.squad.length > 0);

  const loadRankings = async () => {
    setLoading(true);
    try {
      const data = await fetchGeminiAIRankings(teamsToEvaluate);
      setReport(data);
      if (data.rankings.length > 0) {
        setExpandedTeamId(data.rankings[0].teamId);
      }
    } catch (e) {
      console.error('Failed to load AI rankings:', e);
      const fallback = evaluateSquadsAlgorithmic(teamsToEvaluate);
      setReport(fallback);
      if (fallback.rankings.length > 0) {
        setExpandedTeamId(fallback.rankings[0].teamId);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && !report) {
      loadRankings();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const championTeam = report?.rankings[0] ? IPL_TEAMS[report.rankings[0].teamId] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#0A0E1A] border-2 border-amber-500/50 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-tech font-extrabold uppercase flex items-center gap-1.5 shadow-sm">
                <Bot className="w-3.5 h-3.5 text-pink-400" />
                <span>GEMINI 3.8 FLASH SCOUT ENGINE</span>
              </span>
              <span className="text-[10px] font-tech text-cyan-400">
                Official Post-Auction Verdict
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-display uppercase tracking-wider text-white mt-1 flex items-center gap-2">
              <span>AI SQUAD RANKINGS & CRICKET CRITIQUE</span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </h2>
            <p className="text-xs font-tech text-slate-400">
              Evaluated on player skill ratings, batting firepower, death bowling, spin control, and big-match form.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => exportSquadsToCSV(room)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/60 text-slate-300 hover:text-white text-xs font-tech flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Export all squads to CSV spreadsheet"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => exportSquadsToJSON(room)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/60 text-slate-300 hover:text-white text-xs font-tech flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Export all squads to JSON format"
            >
              <FileCode className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={loadRankings}
              disabled={loading}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-amber-400 cursor-pointer disabled:opacity-50 transition-colors"
              title="Re-run AI Analysis"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4 pr-1 font-tech">
          {loading ? (
            <div className="h-72 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin" />
                <Bot className="w-8 h-8 text-pink-400 absolute inset-0 m-auto" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-slate-200">
                  AI Scout Evaluating Squads & Form...
                </p>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  Analyzing batting depth, bowling economy, death overs execution, player ratings, and championship probability.
                </p>
              </div>
            </div>
          ) : report ? (
            <>
              {/* Champion Favorite Banner */}
              {report.rankings[0] && (
                <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border-2 border-amber-500/40 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/20">
                      <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold text-[9px] uppercase tracking-wider">
                          #1 TITLE FAVORITE
                        </span>
                        <span className="text-xs font-bold text-amber-300">
                          {report.rankings[0].trophyProbability}% Trophy Probability
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mt-0.5">
                        {report.rankings[0].teamName} ({report.rankings[0].grade} Grade)
                      </h3>
                      <p className="text-xs text-slate-300 max-w-xl line-clamp-2 mt-0.5">
                        {report.rankings[0].scoutCritique}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block uppercase">
                        AI Overall Score
                      </span>
                      <span className="text-2xl font-extrabold font-display text-amber-400">
                        {report.rankings[0].overallScore}/100
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Summary description */}
              <div className="px-4 py-2.5 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{report.summary}</span>
              </div>

              {/* Franchise Rankings List */}
              <div className="space-y-3">
                {report.rankings.map((res) => {
                  const team = IPL_TEAMS[res.teamId] || room.teams[res.teamId];
                  const isExpanded = expandedTeamId === res.teamId;

                  return (
                    <div
                      key={res.teamId}
                      className={`rounded-2xl border transition-all ${
                        res.rank === 1
                          ? 'border-amber-500/40 bg-slate-900/90 shadow-lg'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                      }`}
                    >
                      {/* Top Row: Rank Summary */}
                      <div
                        onClick={() => setExpandedTeamId(isExpanded ? null : res.teamId)}
                        className="p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer select-none"
                      >
                        {/* Left: Rank, Logo & Team Name */}
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-extrabold text-sm shrink-0 shadow ${
                              res.rank === 1
                                ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-400/50'
                                : res.rank === 2
                                ? 'bg-slate-300 text-slate-950'
                                : res.rank === 3
                                ? 'bg-amber-700 text-white'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            #{res.rank}
                          </div>

                          <div className="w-10 h-10 bg-transparent flex items-center justify-center shrink-0">
                            <TeamLogo teamId={res.teamId} maxHeight="max-h-9" maxWidth="max-w-9" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-display font-extrabold text-sm text-white">
                                {res.teamName}
                              </span>
                              <span
                                className={`px-2 py-0.2 rounded text-[10px] font-bold ${
                                  res.grade.startsWith('A')
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                    : res.grade.startsWith('B')
                                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                }`}
                              >
                                Grade: {res.grade}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              X-Factor Matchwinner:{' '}
                              <strong className="text-amber-300">{res.xFactorPlayer}</strong> •{' '}
                              Trophy Chance: {res.trophyProbability}%
                            </p>
                          </div>
                        </div>

                        {/* Right: Scores & Expand arrow */}
                        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                          <div className="text-left sm:text-right">
                            <span className="text-[9px] text-slate-500 block uppercase">
                              AI Rating
                            </span>
                            <span className="text-lg font-extrabold font-display text-white">
                              {res.overallScore}
                              <span className="text-xs font-normal text-slate-400">/100</span>
                            </span>
                          </div>

                          <button
                            type="button"
                            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Section: Criteria Bars & In-Depth Scout Analysis */}
                      {isExpanded && (
                        <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 bg-slate-950/40 space-y-3.5 animate-in fade-in duration-200">
                          {/* 5-Criteria Metrics Grid */}
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              Tactical Criteria Breakdown
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                              {/* Batting */}
                              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-slate-400 flex items-center gap-1">
                                    <Flame className="w-3 h-3 text-amber-400" />
                                    <span>Batting</span>
                                  </span>
                                  <span className="font-bold text-slate-200">
                                    {res.criteria.battingPower}%
                                  </span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                  <div
                                    className="h-full bg-amber-400 rounded-full"
                                    style={{ width: `${res.criteria.battingPower}%` }}
                                  />
                                </div>
                              </div>

                              {/* Bowling */}
                              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-slate-400 flex items-center gap-1">
                                    <Shield className="w-3 h-3 text-cyan-400" />
                                    <span>Pace & Death</span>
                                  </span>
                                  <span className="font-bold text-slate-200">
                                    {res.criteria.bowlingDepth}%
                                  </span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                  <div
                                    className="h-full bg-cyan-400 rounded-full"
                                    style={{ width: `${res.criteria.bowlingDepth}%` }}
                                  />
                                </div>
                              </div>

                              {/* Spin */}
                              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-slate-400 flex items-center gap-1">
                                    <Zap className="w-3 h-3 text-purple-400" />
                                    <span>Spin Attack</span>
                                  </span>
                                  <span className="font-bold text-slate-200">
                                    {res.criteria.spinAttack}%
                                  </span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                  <div
                                    className="h-full bg-purple-400 rounded-full"
                                    style={{ width: `${res.criteria.spinAttack}%` }}
                                  />
                                </div>
                              </div>

                              {/* All-Rounder */}
                              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-slate-400 flex items-center gap-1">
                                    <Trophy className="w-3 h-3 text-emerald-400" />
                                    <span>All-Round</span>
                                  </span>
                                  <span className="font-bold text-slate-200">
                                    {res.criteria.allRounderBalance}%
                                  </span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                  <div
                                    className="h-full bg-emerald-400 rounded-full"
                                    style={{ width: `${res.criteria.allRounderBalance}%` }}
                                  />
                                </div>
                              </div>

                              {/* Form & Skill */}
                              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span className="text-slate-400 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-pink-400" />
                                    <span>Form & Skill</span>
                                  </span>
                                  <span className="font-bold text-slate-200">
                                    {res.criteria.formAndSkill}%
                                  </span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                  <div
                                    className="h-full bg-pink-400 rounded-full"
                                    style={{ width: `${res.criteria.formAndSkill}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Scout Critique Box */}
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                            <span className="text-amber-400 font-bold block mb-1">
                              AI Scout Critique:
                            </span>
                            <p className="text-slate-300 leading-relaxed italic">
                              "{res.scoutCritique}"
                            </p>
                          </div>

                          {/* Strengths & Weaknesses */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="space-y-1.5">
                              <span className="text-emerald-400 font-bold text-[10px] uppercase flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Key Franchise Strengths</span>
                              </span>
                              {res.strengths.map((str, i) => (
                                <div
                                  key={i}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px]"
                                >
                                  • {str}
                                </div>
                              ))}
                            </div>

                            <div className="space-y-1.5">
                              <span className="text-rose-400 font-bold text-[10px] uppercase flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" />
                                <span>Tactical Vulnerabilities</span>
                              </span>
                              {res.weaknesses.map((wk, i) => (
                                <div
                                  key={i}
                                  className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300 text-[11px]"
                                >
                                  • {wk}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Squad Action Link */}
                          {onViewSquadDetails && (
                            <div className="pt-1 flex justify-end">
                              <button
                                onClick={() => {
                                  onViewSquadDetails(res.teamId);
                                  onClose();
                                }}
                                className="text-xs text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
                              >
                                View {res.teamName} Squad Roster →
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-slate-500">
              No evaluation available. Click refresh to evaluate squads.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-tech text-slate-400 shrink-0">
          <span>AI Model: Gemini 3.8 Flash • Real-Time Statistical Grounding</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-display font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            Close Evaluation
          </button>
        </div>
      </div>
    </div>
  );
};

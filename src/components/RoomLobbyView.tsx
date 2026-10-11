import React, { useState } from 'react';
import {
  Play,
  Copy,
  Check,
  Shield,
  Layers,
  Share2,
  Users,
  MessageCircle,
  X,
  ArrowLeft,
  AlertTriangle,
} from 'lucide-react';
import { AuctionRoomState, IPLTeam, TeamId, UserProfile, RoomParticipant } from '../types/auction';
import { LobbyPlayerBrowser } from './LobbyPlayerBrowser';
import { RetentionSetup } from './RetentionSetup';
import { FranchiseClaimCard } from './FranchiseClaimCard';
import { IPL_TEAMS } from '../data/teamsData';
import { OFFICIAL_SETS_CONFIG } from '../data/auctionSetsData';

interface RoomLobbyViewProps {
  room: AuctionRoomState;
  user: UserProfile;
  onStartAuction: () => void;
  onSubmitRetentions: (teamId: TeamId, retainedPlayerIds: string[]) => void;
  onSelectTeam: (teamId: TeamId) => void;
  onLeaveRoom: () => void;
}

export const RoomLobbyView: React.FC<RoomLobbyViewProps> = ({
  room,
  user,
  onStartAuction,
  onSubmitRetentions,
  onSelectTeam,
  onLeaveRoom,
}) => {
  const [activeTab, setActiveTab] = useState<'POOL' | 'RETENTIONS'>('POOL');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showConfirmStart, setShowConfirmStart] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const isHost = room.hostUid ? room.hostUid === user.id : room.hostUserId === user.id;
  const shareUrl = `${window.location.origin}/join/${room.roomCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(room.roomCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'IPL Mock Auction Invite',
          text: `Join my IPL Mock Auction room (${room.roomCode})! Claim your franchise and let's bid!`,
          url: shareUrl,
        });
        return;
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setShowShareModal(true);
        }
      }
    } else {
      setShowShareModal(true);
    }
  };

  const startingPurse = room.gameMode === 'MEGA' || room.gameMode === 'MINI' ? '₹120 Cr' : '₹100 Cr';

  const distinctSetsCount = React.useMemo(() => {
    if (room.players && room.players.length > 0) {
      const s = new Set(room.players.map(p => p.setNumber || p.setNo || p.setName).filter(Boolean));
      if (s.size > 0) return s.size;
    }
    return OFFICIAL_SETS_CONFIG.length;
  }, [room.players]);

  const totalPlayersCount = room.players?.length || 350;

  // Authoritative participants list with fallback
  const participantsList = React.useMemo(() => {
    if (room.participants && room.participants.length > 0) {
      return room.participants;
    }
    const list: RoomParticipant[] = [];
    for (const [tid, team] of Object.entries(room.teams) as [TeamId, IPLTeam][]) {
      if (team.ownerUserId || team.isConnected) {
        list.push({
          uid: team.ownerUserId || tid,
          displayName: team.ownerName || 'Participant',
          email: '',
          photoURL: team.ownerAvatar,
          teamId: tid,
          teamShortName: team.shortName,
          isHost: team.ownerUserId === (room.hostUid || room.hostUserId),
          joinedAt: room.createdAt || Date.now(),
          connectionStatus: team.isConnected ? 'connected' : 'disconnected',
        });
      }
    }
    return list;
  }, [room.participants, room.teams, room.hostUid, room.hostUserId, room.createdAt]);

  const unassignedParticipants = participantsList.filter((p) => !p.teamId);

  const joinedParticipants = React.useMemo(() => {
    return Object.values(room.teams)
      .filter((t) => !!t.ownerUserId || t.isConnected)
      .map((t) => ({
        teamId: t.id,
        team: t,
        ownerUserId: t.ownerUserId,
        ownerName: t.ownerName || 'Participant',
        ownerAvatar: t.ownerAvatar,
        isConnected: t.isConnected,
        isHost: t.ownerUserId === (room.hostUid || room.hostUserId),
      }));
  }, [room.teams, room.hostUid, room.hostUserId]);

  const otherParticipantsCount = React.useMemo(() => {
    return participantsList.filter((p) => p.uid !== user?.id).length;
  }, [participantsList, user?.id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      {/* 1. ROOM LOBBY HERO & STATUS AREA */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-800/80">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowLeaveModal(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-400/50 text-xs font-tech font-bold uppercase transition-all cursor-pointer shadow-sm"
              title="Leave Room"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FFC400]" />
              <span>← Back</span>
            </button>
            <span className="text-[11px] font-tech font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#FFC400]/10 text-[#FFC400] border border-[#FFC400]/25">
              PRE-AUCTION STAGING
            </span>
            <span className="text-[11px] font-tech text-slate-500 uppercase tracking-wider">
              {room.gameMode} AUCTION
            </span>
            {room.gameMode === 'MINI' && (
              <span className="text-[11px] font-tech font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                CYCLE {room.miniAuctionCycle || 1}
              </span>
            )}
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            TATA IPL<br />
            MOCK AUCTION
          </h1>

          <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-xl leading-relaxed pt-1">
            Browse the complete {totalPlayersCount}-player auction pool across {distinctSetsCount} sets before the auction begins.
          </p>
        </div>

        {/* Compact Room Information & Host Start Action */}
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <div className="bg-[#080D1C] border border-slate-800 px-4 py-3 rounded-xl flex items-center gap-3">
            <div>
              <span className="text-[10px] font-tech uppercase text-slate-500 block">ROOM</span>
              <span className="font-editorial text-xl font-bold tracking-wider text-[#FFC400] leading-none">
                {room.roomCode}
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              title="Copy room code"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="bg-[#080D1C] border border-slate-800 px-4 py-3 rounded-xl">
            <span className="text-[10px] font-tech uppercase text-slate-500 block">STARTING PURSE</span>
            <span className="font-editorial text-xl font-bold text-white tracking-wider leading-none">
              {startingPurse}
            </span>
          </div>

          {/* Prominent Share Room Button */}
          <button
            onClick={handleShare}
            title="Invite friends to room"
            className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white font-tech text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-sm"
          >
            <Share2 className="w-4 h-4 text-[#FFC400]" />
            <span>SHARE ROOM</span>
          </button>

          {isHost ? (
            <button
              onClick={() => setShowConfirmStart(true)}
              className="px-8 py-3.5 rounded-xl bg-[#FFC400] hover:bg-amber-300 text-slate-950 font-editorial text-xl font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-[0_0_20px_rgba(255,196,0,0.3)] hover:shadow-[0_0_25px_rgba(255,196,0,0.5)] transform hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 fill-slate-950" />
              <span>START AUCTION</span>
            </button>
          ) : (
            <div className="px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-tech text-slate-400">
              Awaiting host to start auction...
            </div>
          )}
        </div>
      </div>

      {/* Joined Participants Bar */}
      {joinedParticipants.length > 0 && (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#080D1C] border border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-tech font-bold uppercase text-slate-300 tracking-wider">
              JOINED PARTICIPANTS ({joinedParticipants.length}/10)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {joinedParticipants.map((p) => (
              <div
                key={p.teamId}
                className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-950/80 border border-slate-800"
              >
                {p.ownerAvatar ? (
                  <img
                    src={p.ownerAvatar}
                    alt={p.ownerName}
                    referrerPolicy="no-referrer"
                    className="w-5 h-5 rounded-full object-cover border border-slate-700"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-[#FFC400] text-slate-950 text-[9px] font-bold flex items-center justify-center">
                    {p.ownerName.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-xs text-slate-200 font-sans">{p.ownerName}</span>
                <span
                  className="text-[9px] font-tech font-bold px-1.5 py-0.2 rounded text-white"
                  style={{ backgroundColor: p.team.primaryColor || '#94A3B8' }}
                >
                  {p.team.shortName}
                </span>
                {p.isHost && (
                  <span className="text-[8px] font-tech text-amber-400 font-bold uppercase">Host</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Share Modal Dialog */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#080D1C] border border-amber-500/40 rounded-2xl p-6 shadow-2xl text-slate-100">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 text-[#FFC400]">
              <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 border border-[#FFC400]/30 flex items-center justify-center">
                <Share2 className="w-5 h-5 text-[#FFC400]" />
              </div>
              <div>
                <h3 className="text-xl font-editorial font-bold uppercase tracking-wide text-white">
                  SHARE AUCTION ROOM
                </h3>
                <p className="text-xs font-tech text-[#FFC400]">Room Code: {room.roomCode}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-4">
              Invite friends to join this live auction room directly. They can pick their franchise table and bid in real-time.
            </p>

            <div className="space-y-3 font-tech">
              <div className="flex items-center gap-2 p-2 bg-slate-950 border border-slate-800 rounded-xl">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="bg-transparent text-xs text-slate-300 w-full outline-none font-mono px-2"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-lg bg-[#FFC400] text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Join my IPL Mock Auction room (${room.roomCode})!\n${shareUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Share via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. CLAIM YOUR FRANCHISE SECTION */}
      <div className="space-y-4">
        <div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
            CLAIM YOUR FRANCHISE
          </h2>
          <p className="text-xs font-sans text-slate-400 mt-0.5">
            Select your franchise table to bid during the live auction.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
          {(Object.keys(IPL_TEAMS) as TeamId[]).map((tid) => {
            const team = room.teams[tid] || IPL_TEAMS[tid];
            const isClaimed = !!team.ownerUserId || team.isConnected;
            const isMine = user.selectedTeamId === tid;

            return (
              <FranchiseClaimCard
                key={tid}
                team={team}
                isSelected={isMine}
                isMine={isMine}
                isClaimed={isClaimed}
                ownerName={team.ownerName}
                onSelect={() => onSelectTeam(tid)}
              />
            );
          })}
        </div>
      </div>

      {/* 3. LOBBY NAVIGATION: AUCTION PLAYER POOL & RETENTIONS */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4">
          <button
            onClick={() => setActiveTab('POOL')}
            className={`font-editorial text-xl sm:text-2xl font-bold uppercase tracking-wider flex items-center gap-2 pb-1 border-b-2 transition-all cursor-pointer ${
              activeTab === 'POOL'
                ? 'text-[#FFC400] border-[#FFC400]'
                : 'text-slate-500 border-transparent hover:text-slate-300'
            }`}
          >
            <Layers className="w-5 h-5" />
            <span>AUCTION PLAYER POOL</span>
          </button>

          {room.gameMode === 'MEGA' && (
            <button
              onClick={() => setActiveTab('RETENTIONS')}
              className={`font-editorial text-xl sm:text-2xl font-bold uppercase tracking-wider flex items-center gap-2 pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === 'RETENTIONS'
                  ? 'text-[#FF2D8D] border-[#FF2D8D]'
                  : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>FRANCHISE RETENTIONS</span>
            </button>
          )}
        </div>

        {activeTab === 'POOL' ? (
          <LobbyPlayerBrowser
            players={room.players}
          />
        ) : (
          <RetentionSetup
            room={room}
            user={user}
            onSubmitRetentions={onSubmitRetentions}
            onStartAuction={onStartAuction}
          />
        )}
      </div>

      {/* Host Start Auction Confirmation Modal */}
      {showConfirmStart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#080D1C] border border-[#FFC400]/40 rounded-2xl p-6 shadow-2xl text-slate-100">
            <div className="flex items-center gap-3 mb-4 text-[#FFC400]">
              <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 border border-[#FFC400]/30 flex items-center justify-center">
                <Play className="w-5 h-5 fill-[#FFC400]" />
              </div>
              <div>
                <h3 className="text-xl font-editorial font-bold uppercase tracking-wide text-white">
                  START LIVE AUCTION?
                </h3>
                <p className="text-xs font-tech text-[#FFC400]">Host Confirmation</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed">
              When started, the full 350-player browser will be hidden from everyone, and the auction will begin with Set 1 (BA1) with players randomized inside each set.
            </p>

            <div className="flex items-center justify-end gap-3 font-tech">
              <button
                onClick={() => setShowConfirmStart(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowConfirmStart(false);
                  onStartAuction();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#FFC400] hover:bg-amber-300 text-slate-950 text-xs font-editorial font-extrabold uppercase tracking-wider cursor-pointer shadow-lg flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>START NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leave Room Confirmation Modal */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-sm bg-[#080D1C] border border-amber-500/40 rounded-2xl p-6 shadow-2xl text-slate-100">
            <div className="flex items-center gap-3 mb-3 text-[#FFC400]">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#FFC400]" />
              </div>
              <div>
                <h3 className="text-xl font-editorial font-bold uppercase tracking-wide text-white">
                  {isHost && otherParticipantsCount > 0 ? 'Leave Room?' : 'Leave this room?'}
                </h3>
                <p className="text-[10px] font-tech text-amber-400/90 uppercase tracking-wider">
                  Room Navigation
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed whitespace-pre-line">
              {isHost && otherParticipantsCount > 0
                ? 'You are the host. Leaving will transfer host control to another participant.'
                : 'You can join again later using the invitation link.'}
            </p>

            <div className="flex items-center justify-end gap-3 font-tech">
              <button
                type="button"
                onClick={() => setShowLeaveModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowLeaveModal(false);
                  onLeaveRoom();
                }}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg transition-colors"
              >
                {isHost && otherParticipantsCount > 0 ? 'Leave' : 'Leave Room'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

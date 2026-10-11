import React, { useState } from 'react';
import { Volume2, VolumeX, Copy, Check, Radio, LogOut, ArrowLeft, AlertTriangle } from 'lucide-react';
import { UserProfile, AuctionRoomState } from '../types/auction';
import { auctionAudio } from '../utils/audio';

interface NavbarProps {
  room: AuctionRoomState | null;
  user: UserProfile | null;
  connected: boolean;
  onOpenSquads?: () => void;
  onOpenLeaderboard?: () => void;
  onOpenSearch?: () => void;
  onOpenAIRankings?: () => void;
  onOpenTeamImageCollector?: () => void;
  onExportSquads?: () => void;
  onSignOut?: () => void;
  onLeaveRoom: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  room,
  user,
  connected,
  onSignOut,
  onLeaveRoom,
}) => {
  const [copied, setCopied] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(auctionAudio.enabled);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const toggleSound = () => {
    auctionAudio.enabled = !auctionAudio.enabled;
    setSoundEnabled(auctionAudio.enabled);
  };

  const copyRoomCode = () => {
    if (!room?.roomCode) return;
    navigator.clipboard.writeText(room.roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeFranchise = user?.selectedTeamId && room?.teams[user.selectedTeamId];

  const isAuctionLive = room && (room.stage === 'LIVE' || room.stage === 'ACCELERATED');
  const isHost = room && user && room.hostUserId === user.id;

  const otherParticipantsCount = room
    ? Object.values(room.teams).filter(
        (t) => t.ownerUserId && t.ownerUserId !== user?.id && t.isConnected
      ).length
    : 0;

  const handleConfirmLeave = () => {
    setShowLeaveModal(false);
    onLeaveRoom();
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#080D1C]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left Side: Brand with Bold Condensed Typography & LIVE 2026 Badge */}
          <div className="flex items-center gap-3">
            {room && (
              <button
                onClick={() => setShowLeaveModal(true)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-400/50 text-xs font-tech font-bold uppercase transition-all cursor-pointer shadow-sm mr-1"
                title="Leave Room"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="hidden sm:inline">Leave Room</span>
                <span className="sm:hidden">Back</span>
              </button>
            )}

            <div className="flex flex-col select-none">
              <span className="font-editorial text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-none">
                IPL MEGA
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-editorial text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-none">
                  AUCTION
                </span>
                <span className="text-[9px] font-tech font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#FFC400]/15 text-[#FFC400] border border-[#FFC400]/30 leading-none">
                  LIVE 2026
                </span>
              </div>
            </div>
          </div>

        {/* Center: Minimal Room Code Display */}
        {room && (
          <div className="flex items-center gap-2 font-tech">
            <span className="text-xs text-slate-400 tracking-wider font-semibold">
              ROOM:
            </span>
            <button
              onClick={copyRoomCode}
              title="Click to copy Room Code"
              className="group flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-widest text-[#FFC400] hover:text-amber-300 py-1 px-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-[#FFC400]/40 transition-all cursor-pointer"
            >
              <span>{room.roomCode}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
              )}
            </button>
          </div>
        )}

        {/* Right Side: Essential Controls (Sound, User Profile, Sign Out) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#FFC400]" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* User Profile */}
          {user && (
            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-800">
              <div className="relative">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-700 object-cover"
                  />
                ) : (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFC400] text-slate-950 font-bold text-xs flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
                {activeFranchise && (
                  <span
                    className="absolute -bottom-1 -right-1 text-[8px] font-tech font-bold px-1 rounded text-white shadow-sm"
                    style={{ backgroundColor: activeFranchise.primaryColor }}
                  >
                    {activeFranchise.shortName}
                  </span>
                )}
              </div>

              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-semibold text-slate-200 truncate max-w-[120px]">
                  {user.name}
                </span>
                <span className="text-[10px] font-tech text-slate-400">
                  {room && room.hostUserId === user.id ? 'Host' : activeFranchise ? activeFranchise.shortName : 'Participant'}
                </span>
              </div>

              {onSignOut && (
                <button
                  onClick={onSignOut}
                  title="Sign Out"
                  className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer rounded-lg hover:bg-slate-900"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>

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
                {isAuctionLive
                  ? 'Leave Room?'
                  : isHost && otherParticipantsCount > 0
                  ? 'Leave Room?'
                  : 'Leave this room?'}
              </h3>
              <p className="text-[10px] font-tech text-amber-400/90 uppercase tracking-wider">
                {isAuctionLive ? 'Auction In Progress' : 'Room Navigation'}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-300 font-sans mb-6 leading-relaxed whitespace-pre-line">
            {isAuctionLive
              ? 'The auction is currently in progress.\nLeaving will remove you from this room.'
              : isHost && otherParticipantsCount > 0
              ? 'You are the host. Leaving will transfer host control to another participant.'
              : 'You can join again later using the invitation link.'}
          </p>

          <div className="flex items-center justify-end gap-3 font-tech">
            <button
              type="button"
              onClick={() => setShowLeaveModal(false)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase cursor-pointer transition-colors"
            >
              {isAuctionLive ? 'Stay' : 'Cancel'}
            </button>
            <button
              type="button"
              onClick={handleConfirmLeave}
              className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg transition-colors"
            >
              {isAuctionLive
                ? 'Leave'
                : isHost && otherParticipantsCount > 0
                ? 'Leave'
                : 'Leave Room'}
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

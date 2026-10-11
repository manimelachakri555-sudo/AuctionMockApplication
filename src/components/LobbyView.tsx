import React, { useState } from 'react';
import { Gavel, Users, Shield, PlusCircle, LogIn, Sparkles, Play, ArrowRight } from 'lucide-react';
import { GameMode, UserProfile } from '../types/auction';

interface LobbyViewProps {
  user: UserProfile;
  initialJoinCode?: string | null;
  onCreateRoom: (mode: GameMode) => void;
  onJoinRoom: (roomCode: string) => void;
}

export const LobbyView: React.FC<LobbyViewProps> = ({
  user,
  initialJoinCode,
  onCreateRoom,
  onJoinRoom,
}) => {
  const [activeTab, setActiveTab] = useState<'CREATE' | 'JOIN'>(initialJoinCode ? 'JOIN' : 'CREATE');
  const [gameMode, setGameMode] = useState<GameMode>('MEGA');
  const [inputRoomCode, setInputRoomCode] = useState(initialJoinCode || '');
  const [roomPreview, setRoomPreview] = useState<{
    hostName?: string;
    participantsCount?: number;
    participants?: { name: string; teamShortName: string; avatar?: string }[];
  } | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);

  // Fetch room preview whenever inputRoomCode changes in JOIN tab
  React.useEffect(() => {
    const code = inputRoomCode.trim().toUpperCase();
    if (activeTab === 'JOIN' && code.length >= 4) {
      setPreviewLoading(true);
      fetch(`/api/rooms/${code}`)
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error('Room not found');
        })
        .then((data) => {
          if (data.room) {
            const participants: { name: string; teamShortName: string; avatar?: string }[] = [];
            for (const team of Object.values(data.room.teams) as any[]) {
              if (team.ownerUserId || team.isConnected) {
                participants.push({
                  name: team.ownerName || 'Manager',
                  teamShortName: team.shortName || team.id,
                  avatar: team.ownerAvatar,
                });
              }
            }
            setRoomPreview({
              hostName: data.room.hostName || 'Host',
              participantsCount: participants.length,
              participants,
            });
            setJoinError(null);
          } else {
            setRoomPreview(null);
          }
        })
        .catch(() => {
          setRoomPreview(null);
        })
        .finally(() => setPreviewLoading(false));
    } else {
      setRoomPreview(null);
    }
  }, [inputRoomCode, activeTab]);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateRoom(gameMode);
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = inputRoomCode.trim().toUpperCase();
    if (!cleanCode) {
      setJoinError('Please enter a valid 6-digit room code.');
      return;
    }
    setJoinError(null);
    onJoinRoom(cleanCode);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center p-3 sm:p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900/90 border border-amber-500/20 rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl shadow-amber-500/5">
        {/* Left Column: Platform Overview & Rules */}
        <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-tech font-bold uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Tata IPL Mock Auction
            </div>
            <h1 className="font-editorial text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              PLAY WITH FRIENDS
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-sans">
              Create a custom live auction room or join an existing room with a 6-digit code. Claim your franchise table inside the room to bid in real-time.
            </p>

            {/* Core Feature Cards */}
            <div className="mt-6 space-y-3 font-tech text-xs text-slate-300">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Users className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100">Equal Roles (Zero Host Dominance):</strong>
                  <p className="text-[11px] text-slate-400">All players are franchise owners. The auction runs on shared real-time bidding.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Gavel className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100">Automated 6s Hammer Countdown:</strong>
                  <p className="text-[11px] text-slate-400">Going Once (2s), Going Twice (2s), Going Thrice (2s), then SOLD!</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100">Room-Scoped Team Selection:</strong>
                  <p className="text-[11px] text-slate-400">Select your franchise after entering the room. Only available teams can be picked.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Google User Bar */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full border border-amber-400/40 object-cover shrink-0"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center border border-amber-400 shrink-0">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="min-w-0 truncate">
                <p className="text-xs font-bold text-slate-200 truncate">{user.name}</p>
                <p className="text-[10px] text-slate-400 font-tech truncate">{user.email}</p>
              </div>
            </div>
            <span className="text-[10px] font-tech px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase shrink-0">
              Logged In
            </span>
          </div>
        </div>

        {/* Right Action Column: Clean Choice between CREATE ROOM and JOIN WITH CODE */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          {/* Create vs Join Tab Switcher */}
          <div className="flex items-center gap-2 p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-6">
            <button
              onClick={() => {
                setActiveTab('CREATE');
                setJoinError(null);
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-tech font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'CREATE'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <PlusCircle className="w-4 h-4" /> Create Room
            </button>
            <button
              onClick={() => {
                setActiveTab('JOIN');
                setJoinError(null);
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-tech font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'JOIN'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LogIn className="w-4 h-4" /> Join With Code
            </button>
          </div>

          {activeTab === 'CREATE' ? (
            <form onSubmit={handleCreate} className="space-y-6">
              {/* Game Mode Selection */}
              <div>
                <label className="block text-xs font-tech uppercase text-amber-400 mb-2.5 font-bold tracking-wider">
                  Select Auction Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setGameMode('MEGA')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      gameMode === 'MEGA'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 ring-1 ring-amber-500/40 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block font-display tracking-wider">MEGA AUCTION</span>
                    <span className="text-[11px] font-tech block text-slate-300 mt-0.5">₹120 Cr Purse</span>
                    <span className="text-[10px] text-amber-400 block mt-1">Retentions + RTM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGameMode('MINI')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      gameMode === 'MINI'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 ring-1 ring-amber-500/40 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block font-display tracking-wider">MINI AUCTION</span>
                    <span className="text-[11px] font-tech block text-slate-300 mt-0.5">₹120 Cr Purse</span>
                    <span className="text-[10px] text-amber-400 block mt-1">Repeated Squad Cycles</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGameMode('CLEAN_SLATE')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      gameMode === 'CLEAN_SLATE'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 ring-1 ring-amber-500/40 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block font-display tracking-wider">CLEAN SLATE</span>
                    <span className="text-[11px] font-tech block text-slate-300 mt-0.5">₹120 Cr Equal</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Zero Retentions</span>
                  </button>
                </div>
              </div>

              {/* Informative Staging Note */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs font-tech text-slate-300">
                <Users className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-amber-300 block">Next Step: Select Franchise in Room</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Once the room is created, you will choose your franchise table from the available IPL teams and confirm to enter the lobby.
                  </p>
                </div>
              </div>

              {/* Create Room Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-editorial font-extrabold text-lg tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Play className="w-5 h-5 fill-slate-950" />
                <span>CREATE ROOM NOW</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleJoin} className="space-y-6">
              {/* Room Code Input */}
              <div>
                <label className="block text-xs font-tech uppercase text-amber-400 mb-2.5 font-bold tracking-wider">
                  Enter 6-Digit Room Code
                </label>
                <input
                  type="text"
                  maxLength={10}
                  value={inputRoomCode}
                  onChange={(e) => {
                    setInputRoomCode(e.target.value.toUpperCase());
                    setJoinError(null);
                  }}
                  placeholder="e.g. 6FEJ5Z"
                  className="w-full py-3.5 px-4 rounded-2xl bg-slate-950 border border-slate-700 text-amber-400 font-mono text-2xl tracking-widest text-center focus:outline-none focus:border-amber-400 uppercase shadow-inner"
                />
                <p className="text-[11px] text-slate-400 mt-2 font-tech text-center">
                  Ask your friend for their room code or paste from invite link
                </p>

                {joinError && (
                  <p className="text-xs font-tech text-rose-400 mt-2 text-center">
                    {joinError}
                  </p>
                )}

                {/* Room Preview Card */}
                {roomPreview && (
                  <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-tech text-slate-200 animate-in fade-in">
                    <div className="flex items-center justify-between pb-2 border-b border-amber-500/20 mb-2">
                      <span className="font-bold text-amber-300 uppercase">
                        Host: {roomPreview.hostName}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {roomPreview.participantsCount} Joined
                      </span>
                    </div>
                    {roomPreview.participants && roomPreview.participants.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {roomPreview.participants.map((p, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                          >
                            {p.name} ({p.teamShortName})
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Informative Note */}
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-start gap-3 text-xs font-tech text-slate-300">
                <Users className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-cyan-300 block">Next Step: Select Available Franchise</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    After joining, you will select from the non-taken IPL franchises in this room and confirm your team.
                  </p>
                </div>
              </div>

              {/* Join Room Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-editorial font-extrabold text-lg tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <LogIn className="w-5 h-5" />
                <span>JOIN ROOM WITH CODE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
